# SovLab brand guide

Version 1.3, November 2026 (1.2: app layout; 1.3: apps take the look of SovLab's Stalwart web interface). This folder is the single source of truth for SovLab colors, type, logo and layout.

## Files in this folder

| File | What it is |
| --- | --- |
| `BRAND.md` | This guide. Rules, voice, and every token value. |
| `tokens.json` | All tokens as structured data (colors with light and dark values, type styles, spacing, radius). |
| `tokens.css` | The same tokens as CSS variables plus ready-made type classes (`.slide-title`, `.doc-body`, ...). Loads Inter and JetBrains Mono from Google Fonts. |
| `logos/` | Logo files in SVG and transparent PNG. |

## Using this with Claude Code, Codex or other AI tools

Put this folder in your repo (for example `brand/`) and add a line like this to `CLAUDE.md` or `AGENTS.md`:

> For anything visual (documents, slides, web pages, emails), follow `brand/BRAND.md`. Use the colors and type styles from `brand/tokens.css` or `brand/tokens.json` exactly. Use logo files from `brand/logos/`, never redraw the logo.

## About SovLab

SovLab is a sovereignty data lab. We help organizations take back ownership of their data and infrastructure, and we run our own email, chat, authentication and other online services on the same stack we build for clients.

This is a lightweight guide for making SovLab documents and slides. It covers the logo, colors, type and a few layout rules. Nothing more.

## Voice

Write like an engineer explaining a decision to a colleague. Plain words, short sentences, real numbers.

- Do: say what we run and where it runs ("Mail runs on our servers in Montreal").
- Do: use concrete figures (mailbox counts, weeks, uptime).
- Don't: hype words, exclamation marks, emoji, fear-based security language.
- Don't: em dashes or en dashes as punctuation. Use commas, periods or parentheses.

## Logo

The logo is a green dot held inside square brackets, followed by the wordmark **SovLab** set in Inter Display Bold. The brackets are your boundary. The dot is your data, inside it.

- Always write the name **SovLab** (capital S, capital L, one word).
- `sovlab-light.svg` on white or light backgrounds. `sovlab-dark.svg` on navy or dark backgrounds.
- `sovlab-mark-light.svg` / `sovlab-mark-dark.svg` (brackets and dot only) for small spaces: slide footers, favicons, avatars.
- `sovlab-icon.svg` is the mark on a rounded navy tile, for app icons and profile pictures.
- Clear space: keep empty space around the logo at least the width of one bracket arm (about 7% of the logo width) on every side.
- Minimum size: 100px wide for the full logo on screen, 24px for the mark alone.
- Don't recolor the dot, stretch the logo, add effects, or place it on a busy photo.

## Color

Two brand colors and a small set of neutrals. Navy carries most of the weight. Green is the accent, used sparingly so it stays meaningful.

| Token | Hex | Use |
| --- | --- | --- |
| `navy` | #0E1A2B | Primary brand color. Text, dark slides, solid blocks. |
| `green` | #14B87A | Accent. The logo dot, highlights, chart emphasis, bullets. |
| `green-text` | #0B7A50 | Green as text on white (links, highlighted words). |
| `green-soft` | #E3F7EE | Callout and tag backgrounds. |
| `surface-alt` | #F4F5F7 | Panels, table headers, alternate slide background. |
| `line` | #D9DEE5 | Borders and dividers. |
| `ink-muted` | #5B6676 | Captions, footers, metadata. |

Rules:

- Bright green (`green`) is never used for text on white, because it is too light to read (2.6:1). Use `green-text` instead.
- Text on a green fill is navy, never white.
- Aim for roughly 60% white or light gray, 30% navy, 10% green on any page or slide.
- For charts: navy for the main series, green for the one you want people to look at, `ink-muted` and `line` for everything else.
- The dark theme swaps the page to navy (#0E1A2B) with white text and `surface-alt` #16263B for panels. Green stays the same.

## Web apps and dashboards

Documents and slides can carry a lot of green. Interfaces cannot: an admin screen is full of buttons, toggles, badges and selected rows, and if all of them are bright green the page gets loud fast. So inside applications the rules shift a little.

- Page and panels are white (`surface`). Cards are rounded tiles (20px) lifted from the page by a hairline ring and a soft shadow, not by a tinted background.
- Primary buttons, checked toggles and checkboxes are navy in light mode. In dark mode they are `green` with navy text (`on-green`).
- Green appears as a tint, not a fill: active navigation, selected rows and tags use `success-soft` with `green-text`. Focus rings use `green-text`.
- Bright `green` stays for the logo dot, small dots and accents, and the dark-mode primary button.
- Status colors (below) are only used for states. Never use `danger` or `warning` for decoration.

### Layout

Every app looks like SovLab's Stalwart web interface (github.com/sovlab/webui): the control plane (staff), the customer portal and Stalwart's own admin should feel like one product. Its CSS tokens (`src/index.css`) are the reference; the control plane copies them into `admin.css`. Calm and dense, rounded and soft, with clear contrast on the actions.

- **Top bar** (64px, page background, slightly translucent): the logo on the left (30px tall), breadcrumbs next to it (muted links, the current page in `ink`, semibold), and on the right the environment tag (a green-tinted pill with a dot: `● sandbox`), a light/dark toggle and a round account button (40px) that opens the person's name and "Sign out".
- **Sidebar**: a floating tile (240px, 12px from the window edges, 20px radius) under the top bar. The product or tenant name as a small uppercase label at the top, then the navigation: top-level items are a 16px line icon and a label; related pages sit in a **group that opens and closes** (icon, label, chevron that turns), its children indented behind a thin vertical line and without icons. Items are 36px (children 32px) with 10px rounded corners; the current page is `success-soft` with `green-text`, semibold. The group holding the current page is open; other groups remember what the person chose. Below 860px the sidebar becomes a tile above the page.
- **Page head:** a round back button (40px) on detail pages, the title (26px, weight ~720, tight letter-spacing) with its status badge beside it, one muted line of context under it (14px), and the actions on the right: **one** primary button for the common task, everything else in a secondary "Actions" menu, destructive items last in `danger` after a divider.
- **Buttons** are pills (fully rounded, 36px, semibold 14px). Primary: navy with a soft navy shadow (dark mode: `green` with navy text). Secondary: a white tile with the hairline ring, lifting on hover. Destructive: `danger` fill.
- **Menus** are rounded popovers (16px radius, 6px padding, items with 10px corners); small uppercase labels group the items.
- **Tables** sit on a tile (20px radius). Column headers are 11px, semibold, uppercase with letter-spacing, in `dim` gray. Rows are ~44px, separated by hairlines, with a light hover. The first column is the link (semibold `ink`). Empty tables say so in one muted line inside the table.
- **Status** is a soft pill: a 6px dot and the word in the state color on its `-soft` background (`success`, `info` in progress, `warning` waiting, `danger` failed, gray otherwise).
- **Key facts** (tier, language, dates) are a grid on one tile: small uppercase label, semibold value.
- **Forms** are one tile of field rows separated by hairlines: label (semibold) and hint on the left third, the input on the right (40px, 12px radius, hairline ring, green focus ring). The buttons at the bottom left. A change that removes data previews first and asks to type its name.
- **Words:** sentence case in labels and text (uppercase only for table headers, fact labels and the sidebar's product label), short labels ("Add a mailbox", "Audit log"), no exclamation marks, no emoji, no marketing tone in the app.
- Line icons are drawn in the app (stroke `currentColor`, 1.75 width), never loaded from a third party.

### Status and UI colors

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `green-strong` | #0E9A66 | #3DD69A | Chart main series, progress bars, status dots. Not for body text (3.6:1 on white). |
| `success` | #0B7A50 | #3DD69A | Healthy, delivered, completed. Same as `green-text`. |
| `success-soft` | #E6F6EF | #0F3A2E | Behind success text; active navigation; selected rows. |
| `danger` | #C42B36 | #F2777E | Errors, failed states, destructive buttons. |
| `danger-soft` | #FDECEC | #3B1D24 | Behind danger text. |
| `warning` | #9A5A00 | #F0B455 | Warnings, degraded, expiring soon. |
| `warning-soft` | #FEF3E0 | #33281A | Behind warning text. |
| `info` | #1D5FAE | #7DB2F0 | Neutral information, queued, in progress. |
| `info-soft` | #E8F0FA | #16293F | Behind info text. |
| `violet` | #6B5BC4 | #A99BF0 | Extra chart series only. |

Every text color above passes 4.5:1 on white and on its own `-soft` background in light mode, and on `surface-alt` in dark mode. The danger red and warning amber are tuned slightly cool so they sit next to navy without clashing with the green.

Chart series order in apps: `green-strong`, `info`, warning amber (#D08A1E, chart fill only), `violet`, `ink-muted`. This keeps the main series on brand and gives four distinct hues before falling back to gray.

### Web app logo

Use the full logo (brackets, dot and wordmark) at 30px tall at the left of the top bar (never below 28px, about 113px wide, above the 100px minimum). Draw the brackets and wordmark in the current text color so one file serves both themes; the dot is always `green`. Use `sovlab-icon.svg` for favicons and app icons.

## Typography

One family, **Inter**, for everything. It is free on Google Fonts and installed with most design tools, so documents and slides render the same everywhere. The logo uses Inter Display Bold (already outlined in the logo files). Use **JetBrains Mono** only for commands, config and hostnames.

Weights: Bold (700) for titles and headings, SemiBold (600) for subheadings, Regular (400) for body, Medium (500) for captions.

**Slides** (16:9, 1920 x 1080)

| Style | Size / line | Weight |
| --- | --- | --- |
| `slide-title` | 72 / 80 px | Bold, -2% tracking |
| `slide-heading` | 48 / 56 px | Bold, -1% tracking |
| `slide-body` | 28 / 40 px | Regular |
| `slide-caption` | 18 / 24 px | Medium, `ink-muted` |

**Documents**

| Style | Size / line | Weight |
| --- | --- | --- |
| `doc-title` | 32 / 40 px (24pt) | Bold |
| `doc-heading` | 20 / 28 px (15pt) | SemiBold |
| `doc-subheading` | 16 / 24 px (12pt) | SemiBold |
| `doc-body` | 15 / 24 px (11pt) | Regular |
| `doc-caption` | 12 / 16 px (9pt) | Medium, `ink-muted` |

Headings use sentence case ("Current infrastructure", not "Current Infrastructure").

## Slides

- Margins: 96px on all sides of a 1920 x 1080 slide (`space-12`).
- Title and section slides: navy background, white title, the dark logo bottom left.
- Content slides: white background, navy heading, the light mark in the bottom right corner at about 48px tall, slide number in `slide-caption`.
- One idea per slide. Five bullets at most. Use green on a single word or number per slide, not more.

## Documents

- Logo top left on the first page only, about 140px wide. Footer on every page: "SovLab" and page number in `doc-caption`.
- Margins: 1 inch (2.5 cm).
- Callouts: `green-soft` background, `radius-md` corners, `space-2` padding, `green-text` label.
- Tables: `surface-alt` header row, `line` borders, no vertical rules.

## Token reference

### Colors

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `surface` | #FFFFFF | #0E1A2B | Page and slide background. |
| `surface-alt` | #F4F5F7 | #16263B | Panels, table headers, callout boxes, alternate slide background. |
| `line` | #D9DEE5 | #2A3A50 | Hairlines, table borders, dividers. |
| `ink` | #0E1A2B | #FFFFFF | Headings and body text on surface and surface-alt. In light theme this is SovLab Navy. |
| `ink-muted` | #5B6676 | #A3AEBD | Captions, footers, metadata. Passes 4.5:1 on surface and surface-alt in both themes. |
| `navy` | #0E1A2B | #0E1A2B | SovLab Navy, the primary brand color. Use for dark slides, title slides and solid blocks. Same value in both themes. |
| `green` | #14B87A | #14B87A | SovLab Green, the accent. Fills, the logo dot, chart highlights, bullets. Not for text on white (2.6:1). |
| `green-text` | #0B7A50 | #3DD69A | Green when it has to be text: links, highlighted words. 5.4:1 on white, 9.4:1 on navy. |
| `green-soft` | #E3F7EE | #0F3A2E | Tinted background behind green-text, for callouts and tags. |
| `on-green` | #0E1A2B | #0E1A2B | Text and icons on a green fill. Navy, never white (white on green is 2.6:1). |

### Type styles

Families: sans = Inter, Helvetica Neue, Arial, sans-serif; mono = JetBrains Mono, ui-monospace, Menlo, Consolas, monospace.

| Style | Family | Size | Line height | Weight | Tracking | Use |
| --- | --- | --- | --- | --- | --- | --- |
| `slide-title` | sans | 72px | 80px | 700 | -0.02em | Title and section divider slides. |
| `slide-heading` | sans | 48px | 56px | 700 | -0.01em | One per content slide. |
| `slide-body` | sans | 28px | 40px | 400 | 0 | Bullets and short paragraphs. Five bullets max. |
| `slide-caption` | sans | 18px | 24px | 500 | 0.02em | Sources, footers, slide numbers. ink-muted. |
| `doc-title` | sans | 32px | 40px | 700 | -0.01em | Document title, once. |
| `doc-heading` | sans | 20px | 28px | 600 | 0 | Section headings. |
| `doc-subheading` | sans | 16px | 24px | 600 | 0 | Subsections. |
| `doc-body` | sans | 15px | 24px | 400 | 0 | Running text. Use 11pt in Word or Google Docs. |
| `doc-caption` | sans | 12px | 16px | 500 | 0.02em | Captions, table labels, footers, in ink-muted. Use 9pt in Word or Google Docs. |
| `code` | mono | 13px | 20px | 400 | 0 | Commands, config, hostnames. |

### Spacing (8px base)

| Token | Value | Use |
| --- | --- | --- |
| `space-1` | 8px | Gap between an icon and its label. |
| `space-2` | 16px | Padding inside callouts and table cells. |
| `space-3` | 24px | Between paragraphs and blocks. |
| `space-6` | 48px | Between sections; minimum logo clear space at 1000px width. |
| `space-12` | 96px | Slide margins at 1920 x 1080. |

### Radius

| Token | Value | Use |
| --- | --- | --- |
| `radius-sm` | 4px | Tags, inputs, small chips. |
| `radius-md` | 8px | Callouts, cards, images in slides. |
| `radius-lg` | 16px | Large blocks and panels. |

### Logo files

| File | Use |
| --- | --- |
| `logos/sovlab-light.svg` | Full logo for white and light backgrounds. |
| `logos/sovlab-dark.svg` | Full logo for navy and dark backgrounds. |
| `logos/sovlab-mark-light.svg` | Brackets and dot only, navy. Footers, favicons, small spaces. |
| `logos/sovlab-mark-dark.svg` | Brackets and dot only, white. Same uses on dark backgrounds. |
| `logos/sovlab-icon.svg` | Mark on a rounded navy tile. App icons and profile pictures. |
| `logos/sovlab-{light,dark}-{100,250,500,1000}px.png` | Transparent PNGs for tools that don't accept SVG. |
