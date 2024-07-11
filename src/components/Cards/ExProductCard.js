import React, { useEffect, useState } from 'react'
import { Card, Col, Toast } from 'react-bootstrap'
// import bmw from "../../images/Group 598.png"
import heart from "../../images/heart.svg"
import heartred from '../../images/heartRed.svg'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux"
import '@fortawesome/fontawesome-free/css/all.css'
import { DeleteFavouriteItem, FavouriteItem } from '../../redux/action/FavouriteAction';
import { Navigate } from 'react-router-dom';
import location from "../../images/location_pin.svg"
// import FavouritContainer from '../FavouriteComponent/FavouritContainer';
import swal from 'sweetalert';




const ExProductCard = ({ title, desc, img, id, rates,city }) => {





    // const dispatch = useDispatch();
    // const navigate = useNavigate();



    const myClass = 'productCard';
    const [isHovered, SetHovered] = useState(false);




    const handleMouseEnter = () => {
        SetHovered(true);
    };

    const handleMouseLeave = () => {
        SetHovered(false);
    };
    const shadowClass = isHovered ? "shadowIt" : "";





    // const refresh = (e) => {
    //     // if(move){
    //     //     window.location.href=`/product/${id}`
    //     // }
    //     if (e.target.getAttribute('src') !== "/static/media/heart.9e4358fd97ab2675b037fa92071b911a.svg") {
    //         window.location.href = `/product/${id}`
    //     }
    // }












    return (
        <Col xl="3" lg="4" md="6" sm="12" className="my-4">
            {/* <div style={{ position: "fixed", right: "0", top: "22%", zIndex: "100" }}>
                <Toast show={showA} onClose={() =>setShowA(false)} autohide delay={2000}>
                    <div className='d-flex'>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>لا بد من التسجيل اولا </Toast.Body>
                    </div>
                </Toast>
            </div> */}

            {/* <div style={{ position: "fixed", right: "0", top: "22%", zIndex: "100" }} >
                <Toast show={showB} onClose={() =>setShowB(false)} autohide delay={2000}>
                    <div className='d-flex'>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>تم اضافة المنتج الي المفضله</Toast.Body>
                    </div>
                </Toast>
            </div> */}

            <div style={{ textDecoration: "none" }}>
                <Card className={`${shadowClass} ${myClass}`} onMouseEnter={handleMouseEnter} onClick={(e)=>e.preventDefault()}
                    onMouseLeave={handleMouseLeave} style={{ background: "#F9F9FA", borderRadius: "20px", transition: "0.3s", padding: "8px", border: "none" }}>
                    <Card.Img variant="top" src={img} style={{ width: "100%", borderRadius: "10px", height: "250px", objectFit: "cover" }} />
                    <Card.Body style={{ textAlign: "right" }}>
                        <Card.Text>{title}
                        </Card.Text>
                        <Card.Text className='textDescription' style={{ textAlign: "right", textDecoration: "none", fontWeight: "500" }}>
                            <p style={{ width: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {desc}
                            </p>
                        </Card.Text>
                        <Card.Text>
                            <img src={location} alt="Location" style={{ paddingLeft: "5px" }} />
                            {city}
                        </Card.Text>
                        <Card.Text>
                            {/* <div style={{ fontWeight: "700" }}>
                                <span style={{ color: "#08324B" }}> {amount}  جنيه</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{ color: "#CB955B" }}>لمدة {duration} يوم </span>
                            </div> */}
                            <div className='d-flex justify-content-between align-items-center my-2'>
                                <div style={{ display: "flex", background: "#CB955B", color: "#08324B", padding: "5px 15px", borderRadius: "10px" }}>
                                    <span> <FontAwesomeIcon icon={faTruck} />&nbsp; &nbsp;غير قابل للشحن</span>
                                </div>
                                <div>
                                    <span style={{ color: "#FFA841" }}><FontAwesomeIcon icon={faStar} />
                                        {rates}</span>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default ExProductCard
