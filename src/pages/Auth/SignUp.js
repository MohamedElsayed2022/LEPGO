import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import lepgoLogo from "../../images/photo_2023-03-10_16-10-07.jpg"
import lock from "../../images/lock.svg"
import gmail from "../../images/gmail.svg"
import user from "../../images/user.svg"
import Phonenum from "../../images/phone.svg"
import logo from "../../images/logoIt.png"
import Register from '../../components/Auth/Register';
import { Container } from 'react-bootstrap';
// import Login from './Login';
function SignUp() {
    const [name, email, password, phone, addresUser, onChangeName, onChangeEmail, onChangePassword, onChangePhone, onChangeAddress, onSubmit] = Register();



    return (
        <div style={{paddingTop:"190px"}} className='mx-auto RegisterComponent'>



            <div  dir="ltr" className='text-center'>
                <Container>
                    <div>
                        <div className='mx-auto'>
                            <img src={logo} alt="Lepgo Logo" style={{ width: "150px", borderRadius: "50%" }} />
                            <p style={{ color: "#08324B" }}>يرجي تعبئة المعلومات التالية</p>
                            <p style={{ color: "#424750" }}> لديك حساب؟<a href="/login" style={{ color: "#CB955B", cursor: "pointer" }}>تسجيل الدخول</a></p>
                        </div>
                        <from className='w-100 d-block py-2 text-center'>
                            <div className='formInput w-75 mx-auto'>
                                <img src={user} className='imgInput' alt="img" />
                                <input type='text' className='w-100 py-2 form-control mb-4'
                                    value={name}
                                    onChange={onChangeName}
                                    placeholder='الاسم' style={{ textAlign: "right", margin: "auto" }} />
                            </div>

                            <div className='formInput w-75 mx-auto'>
                                <img src={user} className='imgInput' alt="img" />
                                <input type='text' className='w-100  form-control mb-4'
                                    value={addresUser}
                                    onChange={onChangeAddress}
                                    placeholder='العنوان' style={{ textAlign: "right", margin: "auto" }} />
                            </div>

                            <div className='formInput w-75 mx-auto'>
                                <img src={Phonenum} className='imgInput' alt="img" />
                                <input type='tel' className='w-100 py-2 form-control mb-4' placeholder='رقم الهاتف' style={{ textAlign: "right", margin: "auto" }}

                                    value={phone}
                                    onChange={onChangePhone}
                                />
                            </div>

                            <div className='formInput w-75 mx-auto'>
                                <img src={gmail} className='imgInput' alt="img" />
                                <input type='email' className='w-100 py-2 form-control' placeholder='البريد الالكتروني' style={{ textAlign: "right", margin: "auto" }}

                                    value={email}

                                    onChange={onChangeEmail}
                                    required
                                />
                            </div>
                            <div className='formInput w-75 mx-auto'>
                                <img src={lock} className='imgInput lock' alt="img" />
                                <input type='password' className='w-100 py-2 mt-4 form-control' placeholder='كلمة السر' style={{ textAlign: "right", margin: "auto" }}

                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </div>
                            <button className='mt-3 w-75 button' style={{ background: "#CB955B", border: "1px solid #CB955B", color: "#08324B" }} onClick={onSubmit}>تسجيل الدخول</button>
                        </from>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default SignUp;