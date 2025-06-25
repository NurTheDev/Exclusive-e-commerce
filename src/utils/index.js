const getBannerImg = (name)=>{
    return new URL(`../assets/${name}`, import.meta.url).href

}
export {getBannerImg}
