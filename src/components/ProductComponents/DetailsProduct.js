import React from 'react'
import { Col, Row } from 'react-bootstrap'
import locationImage from "../../images/location_pin.svg"

const DetailsProduct = ({ title, desc, conditions, place, price, duration }) => {
    return (
        <div style={{ textAlign: "right" }} className='mx-5 detailsProduct'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='headText'>
                    التفاصيل
                </div>
                <div className='headText'>
                    متاح
                </div>
            </div>

            <div className='mt-5'>
                <p style={{ color: "#9399A3" }}>{title}</p>
                <p style={{ color: "#08324B", fontSize: "25px" }}>{desc}</p>
            </div>
            <div className='mt-5 d-flex justify-content-between d'>
                <p style={{ color: "#424750", display: "inline", fontSize: "20px" }}>السعر : </p>
                <p style={{ color: "#08324B", display: "inline", fontSize: "18px" }}>{price} جنيه <span style={{ color: "#CB955B" }}> لمدة {duration} يوم</span></p>
            </div>
            <div className='location mt-5 d-flex justify-content-between d'>
                <p style={{ color: "#424750", display: "inline" }}>المكان : </p>
                <div>
                    <img src={locationImage} style={{paddingLeft:"5px"}} alt="location" />
                    <p style={{ color: "#9399A3", display: "inline" }}>{place}</p>
                </div>
            </div>
            <div className='mt-4'>
                <p style={{ color: "#424750" }}>شروط الحجز</p>
                <div className='conditionBook'>
                    <p>
                        {conditions}
                    </p>
                </div>
            </div>
            <div className='text-center mt-4'>
                <p style={{ color: "#666666", fontSize: "25px" }}>للمزيد من البيانات</p>
                <p style={{ color: "#CB955B" }}>تواصل مع البائع</p>
            </div>
        </div>
    )
}

export default DetailsProduct
