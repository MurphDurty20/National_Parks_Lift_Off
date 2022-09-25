import ImageSlider from "./imageSlider"

const Pictures = () => {
    const slides =[
        {url: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/b0e4aed8ae09f8b72d917a8a9f4b6cc1-canyonlands-national-park.jpg', title: 'Canyon Lands' },
        {url: 'https://fthmb.tqn.com/THexV-JsTEZItRo8YVHMbAXtisM=/2093x1435/filters:fill(auto,1)/yosemite-national-park-56a8171b5f9b58b7d0f088fc.jpg', title: 'Yosemite' },
        {url: 'https://getwallpapers.com/wallpaper/full/3/2/b/190678.jpg', title: 'Yosemite Falls' },
        {url: 'https://media.architecturaldigest.com/photos/57ae22afcfc37bc171ad809a/master/pass/visit-national-parks-free.jpg', title: 'Arches National Park' },
        {url: 'https://www.countrywalkers.com/content/uploads/2019/04/iStock-943608428.jpg', title: 'Glacier Natinal Park' }
    ];

    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto"
    }
    return(
        <div style={containerStyles}>
            <ImageSlider slides ={slides}/>
        </div>
    );
};

export default Pictures