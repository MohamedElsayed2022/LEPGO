import React from 'react'
import bicycle from "../../images/bicycles-737190@2x.png"
import { Card, Col } from 'react-bootstrap'

const RentedCard = () => {
    return (
        <Col className="d-flex justify-content-around ">
            <Card style={{ background: "#F9F9FA", borderRadius: "20px", transition: "0.3s" , marginTop:"-50px"}}>
                <Card.Img variant="top" src={bicycle} style={{width:"100%"}}/>
                <Card.Body>
                    <Card.Title>خصم%25</Card.Title>
                    <Card.Text>
                        كايرو بايك
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default RentedCard
