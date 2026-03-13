# Portfolio V1

https://tomalvarez.xyz

## Bugs

- bottom nav links and topnav links should use same json data.

## Implement

- option to increase touch target size
- option to increase text size

✅
❌
☑️

## Issues

## Requirements

- Mobile first ❌
- WAI-ARIA / WCAG accessible ☑️

## WCAG

1. Images & Alt Text ✅
   All images have meaningful alt attributes
   Decorative images use alt="" (empty alt)
   Complex images (charts, diagrams) have detailed descriptions
2. Keyboard Navigation ✅
   All interactive elements are reachable via Tab key
   Focus indicators are clearly visible
   Tab order follows logical sequence
   No keyboard traps
3. Forms (if any) ☑️
   All form inputs have associated labels
   Error messages are clear and programmatically linked
   Required fields are indicated
   Form validation doesn't rely solely on color
4. Links & Buttons
   Link text makes sense out of context
   Touch targets are minimum 24x24px (AA)
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
