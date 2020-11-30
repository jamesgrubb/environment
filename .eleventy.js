module.exports=(eleventyConfig)=>{
    eleventyConfig.addPassthroughCopy({"src/script.js":"/script.js"})
    return{
    env: process.env.NODE_ENV,
    dir:{input:"src",output:"dist"}
    }
}

