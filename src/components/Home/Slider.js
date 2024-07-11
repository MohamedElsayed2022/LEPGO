import React, { useState } from 'react'
import { Carousel } from "react-bootstrap";
import sliderimg from "../../images/slider1.png";
import slider4 from "../../images/slider4.png";
import prod3 from "../../images/prod3.png";
import prod4 from "../../images/prod4.png";
import {Container} from "react-bootstrap"
const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="slider-background" style={{ background: "#CBBCA4" }} interval={2000}>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img
                            style={{ height: "296px", width: "313.53px" }}
                            className=""
                            src={slider4}
                            alt="First slide"
                        />
                        <div className="">
                            <h3 className="slider-title">هناك خصم كبير</h3>
                            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="slider-background2" style={{ background: "#CBBCA4" }} interval={2000}>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img
                            style={{ height: "296px", width: "313.53px" }}
                            className=""
                            src={sliderimg}
                            alt="First slide"
                        />
                        <div className="">
                            <h3 className="slider-title">هناك خصم كبير</h3>
                            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="slider-background3" style={{ background: "#CBBCA4" }} interval={2000}>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img
                            style={{ height: "296px", width: "373.53px" }}
                            className=""
                            src={prod3}
                            alt="First slide"
                        />
                        <div className="">
                            <h3 className="slider-title">هناك خصم كبير</h3>
                            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="slider-background4" style={{ background: "#CBBCA4" }} interval={2000}>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img
                            style={{ height: "296px", width: "373.53px" }}
                            className=""
                            src={prod4}
                            alt="First slide"
                        />
                        <div className="">
                            <h3 className="slider-title">هناك خصم كبير</h3>
                            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Slider
