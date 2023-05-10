const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.addWatchTarget("./src/sass/");

    // Add support for SEO
    eleventyConfig.addPlugin(pluginSEO, require("./src/_data/site.json"))

    // Change default input directory
    return {
        dir: {
            input: "src"
        }
    }
}