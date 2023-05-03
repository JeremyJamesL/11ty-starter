const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
		files: './site/css/**/*.css'
	});

    eleventyConfig.addPlugin(pluginSEO, require("./src/_data/site.json"))

    return {
        dir: {
            input: "src"
        }
    }
}