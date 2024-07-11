import React from "react";
import { Container, Row } from "react-bootstrap";
import lock from "../../images/lock.svg"
import gmail from "../../images/gmail.svg"
import logo from "../../images/logoIt.png"
import LoginHook from "../../components/Auth/LoginHook";
import swal from 'sweetalert';
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [email, password, onChangeEmail, onChangePassword, onSubmit] = LoginHook();

    return (
        <Container style={{ minHeight: "680px", paddingTop: "190px" }} className="workAt">
            <Row className="py-5 d-flex justify-content-center ">
                <div>
                    <div className='mx-auto'>
                        <img src={logo} alt="Lepgo Logo" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
                        <p style={{ color: "#424750" }}>مرحبا بك</p>
                        <p style={{ color: "#424750" }}>قم بالتسجيل الدخول للمتابعة</p>
                        <p style={{ color: "#424750" }}>ليس لديك حساب؟<a href="/register" style={{ color: "#CB955B", cursor: "pointer" }}>اشترك دلوقتي</a></p>
                    </div>
                    <from className='w-100 d-block py-2 text-center'>
                        <div className='formInput w-75 mx-auto'>
                            <img src={gmail} className='imgInput' alt="img" />
                            <input type='email' className='w-100 py-2 form-control' placeholder='البريد الالكتروني' style={{ textAlign: "right", margin: "auto" }} required
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className='formInput w-75 mx-auto'>
                            <img src={lock} className='imgInput lock' alt="img" />
                            <input type='password' className='w-100 py-2 mt-4 form-control' placeholder='كلمة السر' style={{ textAlign: "right", margin: "auto" }}
                                value={password}
                                onChange={onChangePassword}
                            />
                            <Link to="/forget-pass" style={{textDecoration:"none"}}>
                                <span style={{ textAlign: "right" }}><a href="*" style={{ textDecoration: "none", color: "#666666" }}>هل نسيت كلمة السر</a></span>
                            </Link>
                        </div>
                        <button className='mt-3 w-75 button' style={{ background: "#CB955B", border: "1px solid #CB955B", color: "#08324B" }} onClick={onSubmit}>تسجيل الدخول</button>
                    </from>
                </div>
            </Row>
        </Container >
    );
};

export default LoginPage;
