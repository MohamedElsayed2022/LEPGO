import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import imageDefault from "../../images/Uploading-bro.svg"
const UploadImage = () => {
    const [images, setImages] = useState([]);
    const handleImageUpload = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);
    }
    const handleLabelClick = (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('file');
        fileInput.click();
    };
    console.log(images);
    return (
        <div>
            <div>
                <div className="file-input">
                    <input type="file" id="file" accept="image/*" multiple={true} max={`4`} onChange={handleImageUpload} style={{ visibility: "hidden" }} />
                    <img src={imageDefault} alt="Select images" onClick={handleLabelClick} />
                </div>
                <div className="image-container">
                    {images.map((image, index) => (
                        <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} 
                        style={{width:"100px" , height:"100px"}}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UploadImage
