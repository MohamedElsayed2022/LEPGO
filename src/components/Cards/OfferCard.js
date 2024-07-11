import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
const OfferCard = ({img , title , discount}) => {
    const [isHovered, SetHovered] = useState(false);

    const handleMouseEnter = () => {
        SetHovered(true);
    };

    const handleMouseLeave = () => {
        SetHovered(false);
    };
    const shadowClass = isHovered ? "shadowIt" : "";
    return (
        <Col className="my-4 d-flex justify-content-around">
            <Card className={shadowClass}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} style={{ background: "#F9F9FA", borderRadius: "20px" , transition:"0.3s"  , padding:"8px" , border:"1px solid white"}}>
                <Card.Img variant="top" src={img} style={{objectFit:"cover" , borderRadius:"10px" , width:"200px" ,height:"150px"}}/>
                <Card.Body>
                    <Card.Title style={{fontSize:"25px" , fontWeight:"500"}}>خصم%{discount}</Card.Title>
                    <Card.Text style={{fontSize:"20px" , fontWeight:"900"}}>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default OfferCard
