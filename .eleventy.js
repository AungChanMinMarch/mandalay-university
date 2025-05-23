module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("teachingStaff", () => {
    return require("./_data/teachingStaff")();
  });
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/img");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
