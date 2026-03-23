# Portfolio

https://tomalvarez.xyz

A responsive personal portfolio site built as one of the final projects in The Odin Project curriculum.

![Portfolio screenshot](docs/assets/screenshotsite.png)

## REQUIREMENTS

- Showcase everything I've learned in the Odin Project curriculum to this point
- Responsive, simple, and accessible design that avoids generic dev portfolio aesthetics
- Handles multiple languages and colour themes
- WCAG AA accessibility compliance
- Data separated from code to allow for future headless CMS integration

## ABOUT

The goal was to build something that showcases my front-end skills while staying true to a design philosophy of simplicity and accessibility — but with a playful and characterful edge rather than a generic dev portfolio look. What started as a single-page app evolved as usability considerations shaped the structure. Good design is iterative, and this project evolved many times as I learned more via study and user-testing.

Beyond layout and responsiveness, the site features dark and light mode switching and a language selector covering English, Spanish, and Galician — all managed through React state. These additions reflect both the reality of my life navigating three languages, and a specific interest in building interfaces that work for different people in different contexts. Site content is stored in JSON and kept deliberately separate from the codebase — JSON's flexibility was a better fit than XML for data without a strict schema, it handles multilingual content cleanly across three languages, and the separation makes it straightforward to swap in a headless CMS down the line if needed.

Accessibility was a core commitment throughout this project, building upon on my experience in managing digital development for products where it was an absolute requirement. Thus, the site targets WCAG AA compliance, with attention to contrast ratios, semantic HTML, and keyboard navigability.

The site works across all screen sizes from 320px to 1920px wide, with distinct layouts for mobile, tablet, and desktop viewports. Built with React and Vite, styled with CSS, and deployed via GitHub Pages with a custom domain through Porkbun.

## STACK

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
