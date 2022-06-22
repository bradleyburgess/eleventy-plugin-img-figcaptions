# eleventy-plugin-img-figcaptions

## Table Of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)

## Overview

This [Eleventy](https://www.11ty.dev) plugin is a wrapper around
[`@bradleyburgess/img-figcaptions`](https://github.com/bradleyburgess/img-figcaptions)
to add semantic HTML captions using plain-text `"Caption: "` blocks.

## Installation

NPM:

```bash
npm i -D @bradleyburgess/eleventy-plugin-img-figcaptions
```

Yarn:

```bash
yarn add -D @bradleyburgess/eleventy-plugin-img-figcaptions
```

## Usage

Add the plugin to your Eleventy config. For options for the transformer, see the
[`@bradleyburgess/img-figcaptions` readme](https://github.com/bradleyburgess/img-figcaptions#readme).

```javascript
// .eleventy.js or your Eleventy config
const imgFigcaptions = require("@bradleyburgess/img-figcaptions");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(imgFigcaptions);
  // ... rest of your config
};
```

You can pass options to `img-figcaptions`:

```javascript
const options = {
  imgFigcaptionsOptions: {
    removeTitle: false,
    replaceEmptyParagraph: true,
  },
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(imgFigcaptions, options);
  // ... rest of your config
};
```

## Roadmap

There is currently no customization to the Eleventy side of the plugin. But some
features that might be added in the future:

- [ ] Allow exclusion of input paths
- [ ] Allow exclusion of output paths
