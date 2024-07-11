import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
// import bmw from "../../images/range-rover-1806931.png"
// import cash from "../../images/Group 598@2x.png"
// import villa from "../../images/Rectangle 871.png"
const IMageDisplay = ({ imageOne, imageTwo, imageThree, imageFour }) => {
    let img1 = ""
    let img2 = ""
    let img3 = ""
    let img4 = ""

    img1 = imageOne !== "" ? imageOne : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

    img2 = imageTwo !== "" ? imageTwo : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

    img3 = imageThree !== "" ? imageThree : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

    img4 = imageFour !== "" ? imageFour : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

    const images = [
        {
            original: imageOne ? imageOne : imageOne,
            thumbnail: imageOne ? imageOne : imageOne,
        },
        {
            original: imageTwo ? imageTwo : imageOne,
            thumbnail: imageTwo ? imageTwo : imageOne,
        },
        {
            original: imageThree ? img3 : imageOne,
            thumbnail: imageThree ? img3 : imageOne,
        },
        {
            original: imageFour ? img4 : imageOne,
            thumbnail: imageFour ? img4 : imageOne,
        },
    ];
    return (
        <div>
            <div className="product-gallary-card" style={{ maxWidth: "100%", objectFit: "cover", maxHeight: "350px" }}>
                <ImageGallery items={images} style={{ maxHeight: "50px", objectFit: "cover" }} />
            </div>
        </div>
    )
}

export default IMageDisplay
