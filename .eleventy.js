const imgFigcaptions = require("@bradleyburgess/img-figcaptions");

module.exports = function (eleventyConfig, options) {
  eleventyConfig.addTransform("img-figcaptions", function (content) {
    if (!this.outputPath.endsWith(".html")) return content;
    return imgFigcaptions(content, options?.imgFigcaptionsOptions ?? {});
  });
};
