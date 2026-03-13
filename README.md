# Portfolio Site V1

https://brrrrdy.github.io/Portfolio.v1/

## Issues

✅
❌
☑️ Move toolkit adjacent to projects

## Requirements

- Mobile first
- WAI-ARIA
- Audit accessibility

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Trigger workflow

## WCAG

1. Images & Alt Text
   All images have meaningful alt attributes
   Decorative images use alt="" (empty alt)
   Complex images (charts, diagrams) have detailed descriptions
2. Keyboard Navigation
   All interactive elements are reachable via Tab key
   Focus indicators are clearly visible
   Tab order follows logical sequence
   No keyboard traps
3. Forms (if any)
   All form inputs have associated labels
   Error messages are clear and programmatically linked
   Required fields are indicated
   Form validation doesn't rely solely on color
4. Links & Buttons
   Link text makes sense out of context ("Click here" → "View weather app project")
   Touch targets are minimum 44x44px
   Links to external sites indicate they open in new windows
5. Content Structure
   Page titles are unique and descriptive
   Content is readable at 200% zoom without horizontal scrolling
   Information doesn't rely solely on color/shape/position
6. Motion & Animation
   Respect prefers-reduced-motion CSS media query
   No auto-playing content longer than 5 seconds
   Parallax/animations don't cause seizures
7. Language & Text
   HTML lang attribute is set correctly
   Text has sufficient line height (1.5x minimum)
   No justified text that creates uneven spacing
   Quick Test Methods:
   Navigate with Tab only (no mouse)
   Zoom to 200% and check usability
   Test with screen reader (NVDA/JAWS/VoiceOver)
   Check in high contrast mode
   Test on mobile devices

## Bugs

- bottom nav links and topnav links should use same json data.
