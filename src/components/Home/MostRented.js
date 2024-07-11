import React from 'react'
import SubTitle from '../utility/subTitle'
import RentedCard from '../Cards/RentedCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from "react-bootstrap"
const MostRented = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: false,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
                dots: true,
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Container className='retendDiv mt-5'>
            <SubTitle title="الاكثر ايجارا" />
            <div className='sliderRented'>
                <Slider {...settings} className='slider-item-retend'>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                    <div>
                        <RentedCard />
                    </div>
                </Slider>
            </div>
        </Container>
    )
}

export default MostRented
