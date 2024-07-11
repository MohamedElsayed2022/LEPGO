import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserProfile from "../../components/User/UserProfile";
const UserProfilePage = () => {
    return (
        <Container style={{paddingTop:"190px" , minHeight:"768px"}}>
            <Row className="py-3">
                <UserProfile />
            </Row>
        </Container>
    );
};

export default UserProfilePage