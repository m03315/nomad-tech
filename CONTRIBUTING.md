# Contributing to Nomad Tech Hugo Theme

Thank you for your interest in contributing to the Nomad Tech Hugo Theme! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use the issue templates** when available
3. **Provide clear reproduction steps** for bugs
4. **Include system information** (Hugo version, OS, browser)

### Suggesting Features

We welcome feature suggestions! Please:

1. **Check existing feature requests** first
2. **Describe the use case** and why it's valuable
3. **Consider the scope** - keep it focused on the theme's purpose
4. **Provide mockups or examples** when possible

## 🔧 Development Setup

### Prerequisites

- Hugo Extended v0.100.0+
- Node.js 16+ (for asset processing)
- Git

### Local Development

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nomad-tech.git
   cd nomad-tech
   ```

2. **Create a development branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Set up the example site:**
   ```bash
   cd exampleSite
   hugo server -D --themesDir ../..
   ```

4. **Make your changes** and test thoroughly

## 📝 Pull Request Process

### Before Submitting

- [ ] Test your changes with the example site
- [ ] Ensure responsive design works on mobile/tablet/desktop
- [ ] Test with different Hugo versions if possible
- [ ] Update documentation if needed
- [ ] Add/update tests for new features

### PR Guidelines

1. **Use descriptive titles** following conventional commits:
   - `feat: add new portfolio layout`
   - `fix: resolve mobile navigation issue`
   - `docs: update configuration guide`

2. **Provide detailed description:**
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Screenshots for UI changes

3. **Keep PRs focused** - one feature/fix per PR

4. **Update relevant documentation**

## 🎨 Code Style Guidelines

### HTML/Templates

- Use semantic HTML5 elements
- Follow Hugo templating best practices
- Maintain accessibility standards (WCAG 2.1 AA)
- Use consistent indentation (2 spaces)

### CSS/SCSS

- Follow BEM methodology for class naming
- Use CSS custom properties for theming
- Ensure mobile-first responsive design
- Maintain consistent formatting

### JavaScript

- Use modern ES6+ syntax
- Follow ESLint configuration
- Minimize dependencies
- Ensure progressive enhancement

## 🧪 Testing

### Manual Testing Checklist

- [ ] Theme works with Hugo's example content
- [ ] Responsive design on different screen sizes
- [ ] All navigation links work correctly
- [ ] Social media links function properly
- [ ] Multilingual switching works
- [ ] Dark/light theme toggle (if applicable)
- [ ] Performance is acceptable

### Browser Support

Test on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📚 Documentation

When contributing, please update relevant documentation:

- README.md for major features
- Configuration examples
- Code comments for complex logic
- Changelog for releases

## 🏷️ Commit Message Format

Use conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(portfolio): add project filtering functionality
fix(mobile): resolve navigation menu overflow issue
docs(readme): update installation instructions
```

## 🚀 Release Process

Releases are managed by maintainers:

1. Version bumping follows [Semantic Versioning](https://semver.org/)
2. Changelog is updated with notable changes
3. GitHub releases include migration notes if needed

## 💬 Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Focus on constructive feedback
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md)

## ❓ Questions?

- **General questions:** [GitHub Discussions](https://github.com/m03315/nomad-tech/discussions)
- **Bug reports:** [GitHub Issues](https://github.com/m03315/nomad-tech/issues)
- **Feature requests:** [GitHub Issues](https://github.com/m03315/nomad-tech/issues)

## 🙏 Recognition

Contributors will be:
- Listed in the README.md
- Mentioned in release notes
- Added to the GitHub contributors list

Thank you for helping make Nomad Tech Theme better for everyone! 🚀