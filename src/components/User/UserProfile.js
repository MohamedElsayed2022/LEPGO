import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Pen from "../../images/pen.svg"
import { Tabs, Tab } from 'react-bootstrap';
import UserData from './UserData';
import GetMyProducts from './GetMyProducts';

const UserProfile = () => {
    return (
        <Tabs defaultActiveKey="home" id="my-tabs">
            <Tab eventKey="home" title={<span style={{color:"#CB955B"}}>البيانات الشخصيه</span>}>
                <UserData/>
            </Tab>
            <Tab eventKey="profile" title={<span style={{color:"#CB955B"}}>ادارة منتجاتي</span>}>
                <GetMyProducts/>
            </Tab>
        </Tabs>
    )
}

export default UserProfile
