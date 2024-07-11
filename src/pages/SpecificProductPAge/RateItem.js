import React from "react";
import { Col, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import del from "../../images/delete.svg"
import baseURL from "../../Api/baseUrl";
import person from "../../images/person2.jpg"
const RateItem = (comment) => {
    const userData = JSON.parse(localStorage.getItem('user'))
    // console.log(userData.data.user.id);

    const deleteComment = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        let res = await baseURL.delete(`/api/v1/reviews/${comment.id}`, config)
        window.location.href = `/product/${comment.Identifier}`
    }
    return (
        <div>
            <div style={{ background: "#F8F8F8" }}>
                <div style={{ textAlign: "right" }} className="commentContainer">
                    <Row className="mt-2">
                        <Col className="d-felx me-5 commentContainer" style={{ position: "relative" }}>
                            {
                                comment.user.image ? (<img src={comment.user.image} alt="ImageUSer" style={{ width: "25px", height: "25px", borderRadius: "50%" }} />) : (<img src={person} alt="ImageUSer" style={{ width: "25px", height: "25px", borderRadius: "50%" }} />)
                            }
                            <div className="rate-name  d-inline">{comment.user.name}</div>
                            <img className="" src={rate} alt="" height="16px" width="16px" />
                            <div className="cat-rate  d-inline  p-1 pt-2">{comment.rateUs}</div>
                            {
                                userData ? (
                                    comment.user.id === userData.data.user.id ? (
                                        <img src={del} style={{ cursor: "pointer" }} onClick={deleteComment} alt="delete" className="deleteComment" />
                                    ) : null
                                ) : null
                            }
                        </Col>
                    </Row>
                    <Row className="border-bottom mx-2 mt-4">
                        <Col className="d-felx me-4 pb-2">
                            <div className="rate-description  d-inline ms-2">
                                {comment.comment}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default RateItem;
