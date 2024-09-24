module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/assets");

    // eleventyConfig.addCollection("fishesDivided", collection => {
    //     const fishes = collection.getFilteredByTag("fish");
    //     const dividedFishes = [];

    //     fishes.forEach(fish => {
    //         if (fish.data.aquarium.length > 1) {
    //             fish.data.aquarium.forEach(aquarium => {
    //                 // dividedFishes.push({
    //                 //     ...fish,
    //                 //     aquarium: aquarium,
    //                 // });
    //             });
    //         } else {
    //             // dividedFishes.push({ ...fish, aquarium: fish.data.aquarium[0] });
    //         }
    //     });
    //     console.log(dividedFishes)

    //     return dividedFishes;
    // });

    eleventyConfig.addCollection("fishesByAquarium", collection => {
        const fishes = collection.getFilteredByTag("fish");
        const aquariums = {};

        fishes.forEach(fish => {
            fish.data.aquarium.forEach(aquarium => {
                if (!aquariums[aquarium]) {
                    aquariums[aquarium] = [];
                }
                aquariums[aquarium].push(fish);
            });
        });

        // const fishesByAquarium =
        // Object.entries(aquariums)
        //     .map(([aquarium, fishList]) => [aquarium, fishList]);
        
        const fishesByAquarium = [];
        for (const aquarium in aquariums) {
            fishesByAquarium.push([aquarium, aquariums[aquarium]]);
        }

        return fishesByAquarium;
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
