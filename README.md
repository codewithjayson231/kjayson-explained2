# KJayson Explained website

A ready-to-host static website. It has no database and no build step: upload the files and the site works.

## What's in the folder

| File | What it does |
|---|---|
| `index.html` | The website: headline, About poem and all posts |
| `styles.css` | Colours, fonts, glass effect and layout |
| `main.js` | Filter buttons, search and "Read more" |
| `.jpg`, `.webp`, `.png` files | Profile picture, background, social preview image and icons |
| `404.html` | Page shown when someone opens a link that doesn't exist |
| `robots.txt`, `sitemap.xml` | Help Google find and index the site |
| `site.webmanifest` | Lets phones add the site to the home screen with its icon |

## Step 1: put in your web address (important for SEO)

The files use `https://your-domain.com` as a placeholder. Once you know your real address,
find and replace `https://your-domain.com` with it in these files:

- `index.html`
- `robots.txt`
- `sitemap.xml`

Example: if your site is `https://kjaysonexplained.com`, replace every `https://your-domain.com` with `https://kjaysonexplained.com`.

## Step 2: host it (pick one, all have free options)

**Netlify (easiest)**
1. Go to app.netlify.com/drop
2. Drag the whole `kjayson-explained` folder onto the page.
3. You get a live link at once. Add your own domain in Site settings, then Domain management.

**GitHub Pages**
1. Create a new public repository and upload all the files (all files sit together in one folder, so you can select them all and drag them in at once).
2. Go to Settings, then Pages, choose the `main` branch and save.
3. Your site appears at `https://<your-username>.github.io/<repo-name>/`.

**Cloudflare Pages / Vercel**
Create a new project and upload the folder. No build command is needed.

**Normal web hosting (cPanel)**
Upload everything into the `public_html` folder with File Manager.

## Step 3: tell Google about the site

1. Open Google Search Console and add your domain.
2. Submit `https://your-real-domain/sitemap.xml` under Sitemaps.
3. Share the link on WhatsApp or social media to check the preview image.

## Adding a new post

Open `index.html` and find the comment `HOW TO ADD A POST`. Copy one `<article> ... </article>` block, paste it at the top of the list, and change:

- `id="..."`: a short name with dashes, for example `id="what-is-vat"`. This also becomes the post's link: `your-domain.com/#what-is-vat`.
- `data-type="..."`: `update`, `example` or `clarification`
- The label (`Update`, `Example statement` or `Clarification`)
- The date, in both places: `datetime="2026-10-01"` and the visible `1 Oct 2026`
- The title and text

Formatting inside a post:

- `<p>Text</p>` is a paragraph.
- `<blockquote>Text</blockquote>` is an example statement people can copy. It shows in italics inside a glass box.
- `<dfn>word</dfn>` is a word you are explaining. It shows in italics.
- `<em>word</em>` is a word you want to stress. It shows in italics.
- `<strong>word</strong>` is a warning or key point. It shows in bold.

For better SEO, also add the post to the `"blogPost"` list near the top of `index.html`, and update `<lastmod>` in `sitemap.xml` to the new date.

The post counts in the About section and the "Read more" button update automatically.
