import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from '../../redux/action/categoryAction.js'
import Spinner from 'react-bootstrap/Spinner';

const HomeCategory = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const categories = useSelector(state => state.allCategory.category)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
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
        <Container className='mt-5 sliderCategory'>
            <Slider {...settings} className='slider-item'>
                {
                    categories.data ?  (
                        categories.data.map((item, index) => {
                            return(<div>
                                <Link to={`/categorydetails/${item.id}`}>
                                    <img src={item.image} alt="1" />
                                </Link>
                                <p style={{ marginLeft: "-14px", width: "120px", textAlign: "center" }}>{item.title_ar}</p>
                            </div>)
                        })
                    ):(<Spinner animation="grow" />)
                }
            </Slider>
        </Container>
    )
}

export default HomeCategory
