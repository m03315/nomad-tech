---
title: "Building a Hugo Theme from Scratch"
date: 2024-08-10
categories: ["tech", "tutorial"]
tags: ["hugo", "web-development", "static-sites"]
---

# Building a Hugo Theme from Scratch

Creating a custom Hugo theme has been an exciting journey! Here's what I learned while building the nomad-tech theme.

## Key Concepts

Hugo's template lookup order is crucial for theme development:

```
layouts/
├── _default/
│   ├── baseof.html
│   ├── list.html
│   └── single.html
├── partials/
└── section-name/
    └── list.html
```

## Hugo Pipes for Assets

Modern Hugo themes should use Hugo Pipes for asset processing:

```go
{{ $scss := resources.Get "scss/main.scss" }}
{{ $css := $scss | resources.ToCSS | resources.Minify | resources.Fingerprint }}
```

## Multilingual Support

Hugo's i18n system makes multilingual themes straightforward:

```yaml
# i18n/en.toml
[home]
other = "Home"

[about]
other = "About"
```

Building themes teaches you so much about Hugo's internals!