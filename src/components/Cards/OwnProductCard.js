import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
// import bmw from "../../images/Group 598.png"
import heart from "../../images/heart.svg"
import del from '../../images/delete.svg'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css'
import { useDispatch, useSelector } from "react-redux"
import { DeleteProduct } from '../../redux/action/ProductAction';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';




const OwnProductCard = ({ title, desc, img, id, rates, duration, amount }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myClass = 'productCard';
    const [isHovered, SetHovered] = useState(false);

    const [loading, setLoading] = useState(true);


    const handleMouseEnter = () => {
        SetHovered(true);
    };

    const handleMouseLeave = () => {
        SetHovered(false);
    };
    const shadowClass = isHovered ? "shadowIt" : "";

    const turnOn = (event) => {
        event.preventDefault();

        setLoading(true)
        dispatch(DeleteProduct(id))
        setLoading(false)

        setTimeout(()=>{
            window.location.href="/user/profile"
        } , 1500)
    }


    const ProductDeleteSelect = useSelector(state => state.allProducts.deleteProducts)

    useEffect(()=>{
        console.log(ProductDeleteSelect.data);
    } , [loading])


    return (
        <Col xs="12" sm="12" md="6" lg="2" className="my-4 d-flex justify-content-around ">
            <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
                <Card className={`${shadowClass} ${myClass}`} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} style={{ background: "#F9F9FA", borderRadius: "20px", transition: "0.3s", padding: "8px" }}>
                    <OverlayTrigger
                        key="tooltip"
                        placement="top"
                        overlay={<Tooltip id="tooltip">حذف المنتج</Tooltip>}
                    >
                        <div className='imgFav'>
                            <img src={del} onClick={turnOn} style={{ color: "white" }} alt="delete" />
                        </div>
                    </OverlayTrigger>
                    <Card.Img variant="top" src={img} style={{ width: "300px", height: "250px", background: "red" }} />
                    <Card.Body style={{ textAlign: "right" }}>
                        <Card.Text>{title}
                        </Card.Text>
                        <Card.Text className='textDescription' style={{ textAlign: "right", textDecoration: "none", fontWeight: "500" }}>
                            <p>
                                {desc}
                            </p>
                        </Card.Text>
                        <Card.Text>
                            <div style={{ fontWeight: "700" }}>
                                <span style={{ color: "#08324B" }}> {amount}  جنيه</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{ color: "#CB955B" }}>لمدة {duration} يوم </span>
                            </div>
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
            </Link>
        </Col>
    )
}

export default OwnProductCard
