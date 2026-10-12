# Project images

Put your own project photos, screenshots, and diagrams in this folder. No project images are included yet.

Reference a file from its project in `portfolio-data.js` using a repository-relative path:

```js
image: 'assets/projects/follow-me-robot.jpg',
imageAlt: 'Replace with a description of what your image shows',
imageFit: 'cover',
```

`follow-me-robot.jpg` is an example filename. Add your actual file, match its capitalization and extension exactly, and use forward slashes. Use JPG, PNG, or WebP; about 1600 pixels wide and under 1 MB is a useful starting point.

Use `cover` to fill the visual area with possible cropping, or `contain` to show the entire image. A blank `image` value or a file that cannot load falls back to the project’s built-in `visual` sketch.

Commit and publish the image along with your other site changes. See the [main README](../../README.md) for the full editing instructions.
