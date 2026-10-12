# Personal portfolio template

An editable, technology-focused portfolio for GitHub Pages. The design pairs a warm off-white background with charcoal text, lime accents, and abstract project visuals. It includes a profile, project cards, and a chronological update feed.

This is a static website: no framework, installation, or build step is required. Your display name (`lhddw02`), role (Postgraduate MPhil student), and GitHub profile have been added. The final year project and two robotics cards are temporary placeholders; their suggested topics, statuses, dates, descriptions, and updates are examples. Replace them with your actual project information before presenting them as your work.

## Personalize the content

Edit `portfolio-data.js` to change the content in one place:

- `profile`: your name, introduction, about text, focus areas, and contact details. Your `initials` appear in the About signature; optional `location` and `availability` appear as About details when provided. Empty optional fields stay hidden.
- `projects`: your project names, descriptions, stacks, status, links, and updates. Rename the suggested perception and control topics to match your robotics projects. Use a unique `id` for each project. The `stack` arrays start empty; add only tools or technologies you actually used.
- `repo` and `demo`: add full `https://` URLs. Project links appear only when a URL is provided.
- `visual`: choose `signal`, `relay`, or `fieldnotes` for the built-in abstract artwork.
- `sampleContent`: change to `false` after replacing all example content to remove the sample-content notice.

Keep quotes and commas intact when editing JavaScript. Use an apostrophe inside a double-quoted string, or escape it with `\'` inside a single-quoted string.

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

The abstract visuals are part of the template and require no image downloads. You can replace them with project screenshots when you have your own assets.

## Preview locally

From the repository folder, run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

If your Python installation uses the Windows launcher, use `py` instead of `python`. Open [the local preview](http://localhost:4173) in your browser. Press `Ctrl+C` in the terminal to stop the server.

## Publish with GitHub Pages

Commit your finished changes to the branch configured for GitHub Pages and push them to GitHub. This template is ready to be served from the repository root. If Pages is already configured for this repository, keep that existing publishing configuration.

The draft itself does not commit, push, or publish any changes.
