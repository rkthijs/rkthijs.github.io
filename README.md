# Personal Website - Robert Thijs Kozma

A modern, minimalist personal website hosted on GitHub Pages.

## Overview

This website presents my work as an AI researcher and mathematician: agentic systems, transformer models, multimodal analysis, and published research. It includes industry experience in marketing and adtech and availability for independent consulting across industries.

## Features

- **Modern Design**: Clean, minimalist layout with contemporary styling
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Accessible**: Semantic HTML5 with proper heading structure and alt text
- **Fast Loading**: Lightweight CSS with no dependencies
- **SEO Optimized**: Proper meta tags and semantic structure

## Structure

- `index.html` - Research profile, selected SAGE AI and Ace Metrix work, representative publications, and consulting contact
- `industry.html` - Industry experience, with separate SAGE AI and Ace Metrix entries
- `research.html` - Publications organized by theme
- `academic.html` - Academic education, research topics, and CV
- `SVOHP.html` - Horoball packing problems visualization
- `JuliaSets.html` - Complex dynamics and Julia sets
- `teaching.html` - Teaching and outreach experience
- `style.css` - Shared responsive typography, layout, and accessibility styles
- `theme.js` - System theme detection and persistent light/dark preference

## Design

The top navigation is Home, Industry, Academic, and Publications. Packing Problems and Complex Dynamics are accessible under Research on the Academic page.

The site uses a restrained editorial layout, warm off-white background, and blue accents. The home page leads with a personal research profile, technical contributions to iSpot SAGE AI and Ace Metrix, and selected publications in mathematics and computational neuroscience. A compact consulting section follows the work. Shared typography, keyboard skip links, and responsive layouts carry through to the research pages. A light/dark toggle follows the system preference until a visitor makes a choice, then remembers it across pages. Both themes also work without JavaScript using the system preference. The site remains static and requires no build process.

## GitHub Pages Compatibility

This website is fully compatible with GitHub Pages:
- Static HTML/CSS/JS only
- No build process required
- Works with custom domains
- Automatic HTTPS support

## Local Development

Simply open any HTML file in a web browser. For a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

After changing `style.css` or `theme.js`, refresh their cache versions before committing:

```bash
python3 scripts/version_assets.py
```

This updates the asset URLs in every page using content hashes, so browsers fetch the matching files after a deployment instead of reusing an older stylesheet or script.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© Robert Thijs Kozma. All rights reserved.

## Contact

- Email: robert [at] kozma [dot] ai
- [Google Scholar](https://scholar.google.com/citations?user=mAyPNVEAAAAJ)

---

Last updated: November 2026
