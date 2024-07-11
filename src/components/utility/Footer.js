import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import ccPaypal from "../../images/cc-paypal.svg"
import cash from "../../images/CACH.svg"
import masterCard from "../../images/mastercard.svg"
import visa from "../../images/visa.svg"
import fawry from "../../images/fawry-seeklogo.com-3.svg"
import vodafone from "../../images/vodafone.svg"
import contac1 from "../../images/Group 362.svg"
import contac2 from "../../images/Group 366.svg"
import contac3 from "../../images/Group 367.svg"
import contac4 from "../../images/Group 370.svg"
const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2">
            <Container className="" fluid={true}>
                <Row style={{ margin: "auto" }} className="rowFooter">
                    <Col md="6" sm="6"  className='policy'>
                        <div className='d-flex justify-content-center'>
                            <div>
                                <ul>
                                    <h5>الخصوصيه</h5>
                                    <div className="horzintal"></div>
                                    <li><a href="*">سياسة الضمان</a></li>
                                    <li><a href="*">شروط الاسترجاع</a></li>
                                    <li><a href="*">شروط الاستخدام</a></li>
                                    <li><a href="*"> شروط الايجار</a></li>
                                    <li><a href="*"> شروط الخصوصية </a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col md="6" sm="6"  className='d-flex justify-content-center'>
                        <div className=''>
                            <div className='contacCashes'>
                                <h4>تواصل معنا</h4>
                                <img src={contac1} alt="Cahs" />
                                <img src={contac2} alt="PayPal" />
                                <img src={contac3} alt="MasterCard" />
                                <img src={contac4} alt="Visa" />
                                <div>
                                    <span style={{ display: 'block' }}>أو من خلال البريد الاليكتروني</span>
                                    <a style={{ display: 'block' }} href="mailto:info@lepgo.com">info@lepgo.com</a>
                                </div>

                                <div className='mt-2'>
                                    <span style={{ display: 'block' }}>أو عبر الهاتف</span>
                                    <a style={{ display: 'block' }} href="tel:+20123456789">+20123456789</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
