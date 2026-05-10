@scope
- One-page websites
- Stack: HTML + TailwindCSS + vanilla JS
- Goal: modern, SEO-friendly, high-performance websites
- Current year is 2026

@workflow
- Ask only essential clarifying questions
- Read existing code before changes
- Improve with minimal necessary edits (optimize when clearly beneficial)
- Reuse existing patterns
- Avoid unnecessary files/folders (add only if justified)
- Source: src/<project> (immutable)
- Output: dist/<project>

@filesystem
- src/ is read-only

@output
Required:
- index.html
- robots.txt
- script.js
- styles.css
- favicon.ico

Assets:
- assets/ only

@priorities
1. Performance
2. Accessibility
3. SEO
4. UX quality
5. Maintainability

@ui
- Responsive-first (mobile-first preferred)
- Semantic HTML
- Content width: ~1100–1200px (full-bleed allowed when appropriate)
- Support 320px
- Tailwind for spacing and layout
- High contrast and accessibility compliance
- Prefer CSS animations; JS animations allowed if they improve UX and remain performant
- Design should be modern, clean, content-first, with clear hierarchy, good spacing, and subtle interaction feedback

@typography
- Max 2 font families
- Readable type scale and comfortable line length

@components
- Reuse utilities/components
- Avoid duplication
- Preserve naming conventions

@content
Tone: concise, professional
Avoid: filler, clichés, marketing language, placeholder sections

Footer (required):
EN: Created and designed by Dikanta
RU: Дизайн и разработка — Dikanta
URL: https://dikanta.ru

@assets
- Google Fonts only
- WebP images only
- Sources: Unsplash / Pexels / Pixabay
- Lazy-load all images

@performance
- Target Lighthouse 90+ (without harming UX)
- CLS < 0.1
- Minimal JS
- No external dependencies
- Prefer CSS solutions

@seo
Required:
- title
- meta description
- canonical URLs
- OpenGraph tags
- JSON-LD
- Schema.org

@security
- Validate/sanitize inputs
- No secrets in code
- Use env vars when needed

@constraints
- Preserve layout unless improvement is requested
- Prefer minimal viable change
- Avoid unnecessary complexity

@do-not
- No frameworks
- No build tools unless requested
- No large inline SVGs
- Avoid unnecessary comments (code should be self-explanatory)
- Avoid obvious unused or redundant code
- Avoid mock data unless required or content is missing

@output-rule
- Production-ready only
- No TODOs
