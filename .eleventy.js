module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addFilter("fishByAquarium", collection => {
        collection.sort((a, b) => (a.data.aquarium) > (b.data.aquarium) ? 1 : -1);
        return collection;
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
