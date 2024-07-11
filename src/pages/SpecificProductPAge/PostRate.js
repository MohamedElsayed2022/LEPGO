import { parse } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react'
import { Col, Row, Toast } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { json, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { PostCommenttoProduct } from '../../redux/action/PostComment';
import swal from 'sweetalert';
import person from "../../images/person2.jpg"
const PostRate = () => {

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);


    let params = useParams();
    const dispatch = useDispatch();

    const [rateData, setRateData] = useState(0);

    const setting = {
        size: 20,
        count: 5,
        color: "#3B3B3B",
        activeColor: "#ffc107",
        value: 0.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue) => {
            setRateData(newValue);
        },
    };


    const [addcomment, setAddComment] = useState("")
    const [loading, setloading] = useState(true)


    const postCommentData = async (e) => {
        if (rateData === 0) {
            // swal('من فضلك اختر التقييم')
            setShowA(!showA)
            return;
        }
        setloading(true)
        await dispatch(PostCommenttoProduct({
            rate: rateData,
            comment: addcomment,
            product_id: params.id
        }))
        setloading(false)

        setTimeout(() => {
            window.location.href = `/product/${params.id}`
        }, 1500)
    }



    const userData = JSON.parse(localStorage.getItem('user'));
    // const Second = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData.data.user.image)
    // userData.data.user.image = "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/profiles/1690970986_photo_2023-06-26_21-59-46.jpg"
    // // console.log(Second.data.user.image);
    // localStorage.setItem("user", JSON.stringify(userData));
    return (

        <div>
            <div style={{ position: "fixed", right: "0", top: "22%", zIndex: "100" }}>
                <Toast show={showA} onClose={() =>setShowA(false)} autohide delay={2000}>
                    <div className='d-flex'>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>اختر التقييم</Toast.Body>
                    </div>
                </Toast>
            </div>
            <div className='w-100'>
                <div style={{ position: "relative" }}>
                    <div className="rate-name  d-flex  justify-content-evenly align-items-center ms-3 mt-1 " style={{ fontSize: "14px", position: "absolute", right: "8%", top: "-4%", borderRadius: "20px", padding: "3px", background: "#F8F8F8", border: "1px solid #9399A3", color: "#3B3B3B"  }}>
                        {
                            userData ? (
                                userData.data.user.image ? ((<img src={userData.data.user.image} alt="person" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />)) : ((<img src={person} alt="person" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />))
                            ) : null
                        }
                        {
                            userData ? (userData.data.user.name) : null
                        }
                        {
                            userData ? (<ReactStars {...setting} />) : null
                        }
                    </div>
                    {
                        userData ? (<Row className="border-bottom mx-2">
                            <Col className="d-felx me-4 pb-2">
                                <textarea
                                    style={{ resize: "none", outline: "none", paddingTop: "40px", background: "white" }}
                                    className="input-form-area  mt-3"
                                    rows="4"
                                    cols="20"
                                    placeholder="اكتب تعليقك...."
                                    value={addcomment}
                                    onChange={(e) => setAddComment(e.target.value)}
                                />
                                <div className=" d-flex justify-content-end al">
                                    <div className="product-cart-add px-3  py-2 text-center d-inline" onClick={postCommentData}>اضف تعليق</div>
                                </div>
                            </Col>
                        </Row>) : null
                    }
                </div>
                <div className='mt-2' style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "16px", color: "#000000" }}>مراجعة المستخدمين</p>
                </div>
            </div>
        </div>
    )
}

export default PostRate
