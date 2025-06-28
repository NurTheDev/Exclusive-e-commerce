const getBannerImg = (name)=>{
    return new URL(`../assets/${name}`, import.meta.url).href
}
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
export {getBannerImg, getSettings}
const getSettings = (component) => {
    if(component === "banner") {
        return {
            ...settings,
            arrows: false,
            autoplay: true,
        }} else if(component === "product") {
        return {
            ...settings,
            arrows: false,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            width: "100%",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
    }
}
