---
name: tailwind-css
description: Tailwind CSS v4 utility-first styling patterns including responsive design and custom configuration. Use when styling with Tailwind, adding utility classes, configuring Tailwind or customizing the theme.
---

# Tailwind CSS v4 Development Guidelines

Best practices for using Tailwind CSS v4 utility classes effectively.

## Core Principles

1. **Utility-First**: Use utility classes instead of custom CSS
2. **Mobile-First**: Design for mobile, then scale up with responsive modifiers
3. **Component Extraction**: Extract repeated patterns into components
4. **Consistent Spacing**: Use Tailwind's spacing scale
5. **Custom Configuration**: Extend the default theme for brand consistency

## Best Practices

1. **Use Consistent Spacing**: Stick to Tailwind's spacing scale
2. **Responsive by Default**: Always consider mobile-first design
3. **Extract Components**: Avoid repeating long class lists
4. **Use Theme Colors**: Define custom colors in config, not arbitrary values
5. **Leverage @apply Sparingly**: Prefer utility classes in JSX
6. **Optimize Production**: Ensure purge is configured correctly

## Additional Resources

For detailed information, see:
- [Utility Patterns](utility-patterns.md)