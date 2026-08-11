# Andrea Serani — Personal Academic Website

Personal scientific website of Andrea Serani, Research Scientist at CNR-INM, Adjunct Professor at the University of Bologna, and Visiting Scholar at the University of Michigan.

The site presents Andrea's research programme, methodological contributions, selected publications, teaching and mentoring, and academic profile. Group-level material is maintained separately on the [MAO Research Group website](https://cnr-inm-mao.github.io/).

## Local preview on macOS

The site uses GitHub Pages and Jekyll. Dependencies are declared in `Gemfile` and installed inside the repository.

The repository pins Ruby in `.ruby-version`. If `rbenv` is not already installed, install it once with Homebrew:

```bash
brew install rbenv ruby-build
rbenv init
```

Open a new terminal, then from the repository root run:

```bash
rbenv install -s
gem install bundler
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --livereload
```

Open <http://127.0.0.1:4000/>. The preview rebuilds when source files change.

The setup uses an `rbenv`-managed Ruby and repository-local gems; it does not modify Apple's system Ruby or require `sudo`.

## Validation

Build the production site and check local links before completing a substantial change:

```bash
bundle exec jekyll build --trace
ruby scripts/check_internal_links.rb _site
```

The site intentionally uses simple HTML, Liquid, CSS, and a small navigation script. No JavaScript build step is required.

## Structure

- `_layouts/` — shared page shell;
- `_includes/` — metadata, navigation, and footer;
- `html/` — research, publication, mentoring, and profile pages;
- `assets/` — shared CSS and minimal JavaScript;
- `images/` — personal and institutional imagery;
- `docs/` — curriculum vitae and downloadable documents.

The established publication and mentoring URLs are retained for inbound links.
