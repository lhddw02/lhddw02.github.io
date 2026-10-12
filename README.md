# Personal portfolio template

An editable, technology-focused portfolio for GitHub Pages. The design pairs a warm off-white background with charcoal text, lime accents, and abstract project visuals. It includes a profile, project cards, and a chronological update feed.

This is a static website: no framework, installation, or build step is required. It is an editable draft; replace any remaining sample project descriptions, statuses, dates, and updates with your actual information.

## Personalize the content

Edit `portfolio-data.js` to change the content in one place:

- `profile`: your name, introduction, about text, focus areas, and contact details. Your `initials` appear in the About signature; optional `location` and `availability` appear as About details when provided. Empty optional fields stay hidden.
- `projects`: your project names, descriptions, stacks, status, links, and updates. Rename any suggested topics to match your projects. Use a unique `id` for each project, and add only tools or technologies you actually used to its `stack` array.
- `repo` and `demo`: add full `https://` URLs. Project links appear only when a URL is provided.
- `visual`: choose `signal`, `relay`, or `fieldnotes` for the built-in abstract artwork.
- `image`, `imageAlt`, and `imageFit`: add your own project photo, screenshot, or diagram as described below.
- `sampleContent`: change to `false` after replacing all example content to remove the sample-content notice.

Keep quotes and commas intact when editing JavaScript. Use an apostrophe inside a double-quoted string, or escape it with `\'` inside a single-quoted string.

### Add a project image

Store your project images in [`assets/projects/`](assets/projects/README.md). For example, after adding your own image file named `follow-me-robot.jpg`, add these fields to the existing **Follow-me Robot** project object in `portfolio-data.js`:

```js
image: 'assets/projects/follow-me-robot.jpg',
imageAlt: 'Replace with a description of your Follow-me Robot image',
imageFit: 'cover',
```

The filename above is an example; the image is not included. Replace `imageAlt` with a short description of what your actual image shows so that screen-reader users can understand it.

- Use repository-relative paths with forward slashes, such as `assets/projects/follow-me-robot.jpg`. Do not use a Windows path such as `C:\Users\...`.
- Match filenames and extensions exactly, including capitalization. GitHub Pages filenames are case-sensitive.
- JPG, PNG, and WebP are suitable formats. As a starting point, aim for about 1600 pixels wide and under 1 MB per image to keep loading quick.
- `imageFit: 'cover'` fills the visual area and may crop the edges. Use `imageFit: 'contain'` to show the whole image, which is useful for diagrams. `cover` is the default.

A provided image replaces the built-in sketch. Leave `image: ''` to use the sketch selected by `visual`; if an image file is missing or cannot load, the sketch appears as a fallback. Include the image file when committing and publishing your changes.

### Keep projects up to date

Add an entry to a project’s `updates` array whenever you have meaningful progress to share:

```js
{
  date: '2026-10-12', // Example date: replace with the actual date.
  title: 'A short description of what changed',
  description: 'Explain the progress and why it matters in one or two sentences.'
}
```

Use `YYYY-MM-DD` dates. The site selects the newest dated entry as that project’s latest authored update and shows the latest five entries in the combined update feed, sorted by date. Each project’s **Project notes** dialog shows its full update history. You can retain older entries to build a useful project history; array order does not determine which entry is latest.

These updates are manual. They change when you edit the data file and publish the updated site.

### Optional public GitHub activity

To enable GitHub activity, set `github.enabled` to `true` and add a public GitHub repository URL to each relevant project’s `repo` field, such as `https://github.com/your-username/your-project`.

When available, the site shows the latest commit date on the repository’s default branch, loaded when a visitor opens the page. It appears separately from your authored project update. A commit timestamp is a record of code activity; it does not replace the project update you wrote.

The browser uses GitHub’s public API without a token; see the [List commits API documentation](https://docs.github.com/en/rest/commits/commits#list-commits). Private repositories are not supported, and request limits, connectivity, or repository settings can prevent activity from loading. The site keeps the manually authored content available when GitHub data cannot be fetched. Do not put a personal access token in this public website.

## Adjust the design

- `styles.css`: colors, typography, spacing, and responsive layout.
- `index.html`: section structure, navigation, and page metadata. Update its page title and description for your name and work.
- `app.js`: rendering, filtering, and optional GitHub integration.

The abstract visuals are part of the template and require no image downloads. Use the project image fields above to replace them with your own assets.

## Preview locally

From the repository folder, run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

If your Python installation uses the Windows launcher, use `py` instead of `python`. Open [the local preview](http://localhost:4173) in your browser. Press `Ctrl+C` in the terminal to stop the server.

## Publish with GitHub Pages

Commit your finished changes to the branch configured for GitHub Pages and push them to GitHub. This template is ready to be served from the repository root. If Pages is already configured for this repository, keep that existing publishing configuration.

The draft itself does not commit, push, or publish any changes.
