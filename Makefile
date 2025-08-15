# Hugo Theme Development Commands

.PHONY: dev build clean setup

# Start development server with Docker
dev:
	docker-compose up --build

# Build the site
build:
	docker-compose run --rm hugo hugo --minify

# Clean up
clean:
	docker-compose down
	docker system prune -f

# Build Docker image
setup:
	@echo "Building secure Hugo development environment..."
	docker-compose build
	@echo "Ready! Use 'make dev' to start development server"