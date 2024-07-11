import React, { useContext, useEffect, useState } from 'react'
// import { Container, Spinner } from "react-bootstrap";
import UnopDropdown from "unop-react-dropdown";
import cash from "../../images/sort.png"
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from "../../redux/action/categoryAction.js"
// import { Dropdown } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategoryHeader = () => {

    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Loop through items
        speed: 100, // Transition speed in milliseconds
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll on navigation
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
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




    const handler = () => { };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const DataCate = useSelector(state => state.allCategory.category)


    // console.log(DataCate.data);


    return (
        <Container fluid={true} style={{ background: "white" }} className='shadow'>
            <Navbar expand="lg" className='d-flex' style={{ background: "white", alignItems: "center" }}>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        جميع المفات
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="right">
                        <div className="card-filter d-flex justify-content-center align-items-center">
                            <div className="groubFilter">
                                {
                                    DataCate ? (
                                        DataCate.data ? (
                                            DataCate.data.slice(1, 8).map((ele) => {
                                                return (
                                                    <div className="card-filter-item">
                                                        <a className="cat-text-header allfilesLink" href={`/categorydetails/${ele.id}`}>{ele.title_ar}</a>
                                                    </div>
                                                )
                                            })
                                        ) : null
                                    ) : null
                                }
                            </div>

                            <div className="groubFilter">
                                {
                                    DataCate ? (
                                        DataCate.data ? (
                                            DataCate.data.slice(9, 16).map((ele) => {
                                                return (
                                                    <div className="card-filter-item">
                                                        <a className="cat-text-header allfilesLink" href={`/categorydetails/${ele.id}`}>{ele.title_ar}</a>
                                                    </div>
                                                )
                                            })
                                        ) : null
                                    ) : null
                                }
                            </div>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Toggle aria-controls="basic-navbar-nav2" />
                <Navbar.Collapse id="basic-navbar-nav2" className='NavBarHeader'>
                    <Nav className="mx-4">
                        {
                            DataCate ? (
                                DataCate.data ? (
                                    DataCate.data.map((ele) => {
                                        return (
                                            <div>
                                                <a className="cat-text-header" href={`/categorydetails/${ele.id}`}>{ele.title_ar}</a>
                                            </div>
                                        )
                                    })
                                ) : null
                            ) : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <div className='sliderNavBar' style={{ background: "blue" }}>
                <Slider {...settings} className='sliderCategory'>
                    {
                        DataCate ? (
                            DataCate.data ? (
                                DataCate.data.map((ele) => {
                                    return (
                                        <div className='slider-item'>
                                            <a className="cat-text-header" href={`/categorydetails/${ele.id}`}>{ele.title_ar}</a>
                                        </div>
                                    )
                                })
                            ) : null
                        ) : null
                    }
                </Slider>
            </div> */}
        </Container>

    )
}

export default CategoryHeader


