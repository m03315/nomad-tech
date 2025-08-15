---
title: "Docker Development Workflow for Hugo Themes"
date: 2024-07-28
categories: ["tech", "tutorial"]
tags: ["docker", "hugo", "development", "workflow"]
---

# Docker Development Workflow for Hugo Themes

Setting up a consistent development environment across different machines is crucial for theme development. Here's my Docker-based workflow.

## The Setup

```dockerfile
FROM hugomods/hugo:exts-0.120.4
WORKDIR /src
COPY . /src/themes/nomad-tech/
CMD ["hugo", "server", "--bind", "0.0.0.0", "--buildDrafts"]
```

## Docker Compose Configuration

```yaml
services:
  hugo:
    build: .
    volumes:
      - "./exampleSite:/src"
    ports:
      - "1313:1313"
```

## Benefits

- **Consistency**: Same Hugo version everywhere
- **Security**: Pinned, official images only
- **Isolation**: No local Hugo installation needed
- **Portability**: Works on any machine with Docker

## Development Commands

```bash
# Start development server
docker-compose up

# Build for production
docker-compose run hugo hugo --minify

# Clean up
docker-compose down
```

This workflow has saved me countless hours of environment setup!