---
title: "CSS Grid vs Flexbox: When to Use What"
date: 2024-08-03
categories: ["tech", "tutorial"]
tags: ["css", "layout", "frontend"]
---

# CSS Grid vs Flexbox: When to Use What

Understanding the differences between CSS Grid and Flexbox for modern layouts.

## Use Flexbox For:
- One-dimensional layouts (rows OR columns)
- Component-level design
- Centering content
- Navigation bars

## Use CSS Grid For:
- Two-dimensional layouts (rows AND columns)
- Page-level design
- Complex layouts
- Card grids

```css
/* Flexbox for navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid for main layout */
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
}
```

Both are powerful tools - use them together!