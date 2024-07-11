import React from "react";
import { Container, Row } from "react-bootstrap";
import lock from "../../images/lock.svg"
import gmail from "../../images/gmail.svg"
import logo from "../../images/logoIt.png"
import LoginHook from "../../components/Auth/LoginHook";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import ForgetPassHook from "../../components/Auth/ForgetPassHook";


const ForgetPass = () => {
    const  [email ,onChangeEmail , onSubmit] = ForgetPassHook();
    return (
        <Container style={{ minHeight: "680px", paddingTop: "190px" }} className="workAt">
            <Row className="py-5 d-flex justify-content-center ">
                <div>
                    <div className='mx-auto'>
                        <img src={logo} alt="Lepgo Logo" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
                        <p style={{ color: "#424750" }}>مرحبا بك</p>
                        <p style={{ color: "#424750" }}>قم بتعديل كلمة السر الخاصه بك  للمتابعة</p>
                    </div>
                    <from className='w-100 d-block py-2 text-center'>
                        <div className='formInput w-75 mx-auto'>
                            <img src={gmail} className='imgInput' alt="img" />
                            <input type='email' className='w-100 py-2 form-control' placeholder='البريد الالكتروني' style={{ textAlign: "right", margin: "auto" }} required
                            value={email}
                            onChange={onChangeEmail}
                            />
                        </div>
                        <button className='mt-3 w-75 button' style={{ background: "#CB955B", border: "1px solid #CB955B", color: "#08324B" }}onClick={onSubmit}>ارسال الكود</button>
                    </from>
                </div>
            </Row>
        </Container >
    )
}

export default ForgetPass
