#!/usr/bin/env ruby

require "pathname"
require "uri"

site_root = Pathname.new(ARGV.fetch(0, "_site")).expand_path
abort "Build directory not found: #{site_root}" unless site_root.directory?

missing = []
html_files = Dir.glob(site_root.join("**/*.html")).sort

html_files.each do |file_name|
  file = Pathname.new(file_name)
  content = File.read(file, encoding: "UTF-8")

  content.scan(/(?:href|src)\s*=\s*["']([^"']+)["']/i).flatten.each do |reference|
    next if reference.empty?
    next if reference.start_with?("#", "//")
    next if reference.match?(/\A(?:https?:|mailto:|tel:|data:|javascript:)/i)

    path = reference.split(/[?#]/, 2).first
    next if path.nil? || path.empty?

    begin
      path = URI.decode_www_form_component(path)
    rescue ArgumentError
      # Keep the original path so malformed escapes are reported as missing.
    end

    target = if path.start_with?("/")
      site_root.join(path.delete_prefix("/"))
    else
      file.dirname.join(path)
    end.cleanpath

    candidates = [target]
    candidates << target.join("index.html") if target.directory? || File.extname(target.to_s).empty?
    candidates << Pathname.new("#{target}.html") if File.extname(target.to_s).empty?

    next if candidates.any?(&:exist?)

    missing << [file.relative_path_from(site_root), reference]
  end
end

if missing.empty?
  puts "Checked #{html_files.length} HTML files: no broken internal links."
  exit 0
end

warn "Broken internal links:"
missing.uniq.each { |file, reference| warn "  #{file}: #{reference}" }
exit 1
