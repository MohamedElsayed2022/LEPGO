import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import heart from "../../images/heart.svg"
import heartred from '../../images/heartRed.svg'
import { DeleteFavouriteItem } from '../../redux/action/FavouriteAction';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import MyToastComponent from '../utility/ToastNotify';
import toastr from 'toastr';


const FavouriteCard = ({ img, amount, desc, title, city, duration, identity, id, rate }) => {
    const dispatch = useDispatch();
    const [favImg, setFavimg] = useState(heartred);

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const turnIt = (event) => {
        event.preventDefault();
        RemoveProductToWishList();
    }



    const res = useSelector(state => state.FavouriteItemReducer.deleteItems)

    const RemoveProductToWishList = async () => {
        await dispatch(DeleteFavouriteItem(identity))
        if (res) {
            setShowA(!showA)
            setTimeout(() => {
                window.location.href = "/favourite"
            }, 600);
        }
        setFavimg(heart)
    }



    return (
        <div>
            <div style={{ position: "fixed", right: "0", top: "22%", zIndex: "100" }}>
                <Toast show={showA} onClose={toggleShowA}>
                    <div className='d-flex'>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>تم حذف المنتج من المفضله</Toast.Body>
                    </div>
                </Toast>
            </div>
            <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
                <div className='w-75 mx-auto favItem mt-4 text-center'>
                    <img src={img} className='imageFav' alt='img' />
                    <div className='mx-3'>
                        <h2 className='infos'>{title}</h2>
                        <p className='infos infoDetails' style={{ width: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{desc}</p>
                        <p className='infos'>{city}</p>
                        <div className='d-flex align-items-start w-100'>
                            <img src={favImg}  onClick={turnIt} style={{ color: "red", alignSelf: "start", margin: "5px" }} alt="" />
                            <p style={{ color: "#08324B", fontSize: "18px", cursor: "pointer" }} className='infos'>إزالة من المفضلة</p>
                        </div>
                    </div>
                    <div className='priceDetails' style={{ paddingLeft: "20px" }}>
                        <div className='detailsFavItemduration'>
                            <p style={{ color: "#9399A3" }}><span style={{ fontSize: "22px", color: "#08324B" }}>{amount}</span> جنيه</p>
                            <span style={{ marginTop: "-15px", display: "block", color: "#CB955B", fontSize: "18px" }}>لمدة {duration} يوم</span>
                        </div>
                        <div className='detailFavItem'>
                            <div className='d-inline'>
                                <span style={{ color: "#FFA841" }} className='mx-4'><FontAwesomeIcon icon={faStar} />
                                    {rate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FavouriteCard
