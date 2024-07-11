import React, { useEffect, useState } from 'react'
import { Col, Row, Toast } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Pen from "../../images/pen.svg"
import Button from 'react-bootstrap/Button';
import { getAllGovernments } from '../../redux/action/GovernmentAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import baseURL from '../../Api/baseUrl';
import { UpdateDetails } from '../../redux/action/UpdateDetailsAction';
// import { VerifyEmailCodeNumOtp } from '../../redux/action/AuthAction';
import { VerifyEmailCode } from '../../redux/action/AuthAction';
// import person from "../../images/person2.jpg"
import swal from "sweetalert";
import { UploadImageProfile } from '../../redux/action/UploadImageProfile';
import personuknown from "../../images/download.png"

const UserData = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [showA, setShowA] = useState(false);

    let userData = '';

    if (localStorage.getItem('user') != null) {
        userData = JSON.parse(localStorage.getItem('user'))
    } else {
        userData = ""
    }


    const [selectImage, setSelectImage] = useState(false)


    const [show, setShow] = useState(false);
    const [idGovern, setIdgovern] = useState(0)

    const [location, setLocation] = useState('');
    const [cityId, setCityId] = useState(0)
    const [city, setCity] = useState([])
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [addressIt, setAddress] = useState("");

    const onSelectCity = (e) => {
        setCityId(e.target.value)
    }
    const onSelectLocatioin = (e) => {
        setLocation(e.target.value)
        setIdgovern(e.target.value)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(getAllGovernments());
    }, [])

    const fetchCities = async () => {
        let city = await baseURL.get(`/api/v1/cities/${idGovern}`)
        // console.log(city);
        setCity(city)
    }

    useEffect(() => {
        fetchCities()
    }, [idGovern])




    const governments = useSelector(state => state.GovernmentsReducer.Governments);

    useEffect(() => {
        dispatch(getAllGovernments());
    }, [])

    const handleSubmitProduct = async (e) => {
        e.preventDefault();

        setLoading(true)
        await dispatch(UpdateDetails({
            name: userData.data.user.name,
            address: addressIt,
            city_id: cityId,
            phone_number: userData.data.user.phone_number
        }))
        setLoading(false)
    }

    const updateDetailss = useSelector(state => state.updateDetails.updateDetails);


    useEffect(() => {
        if (updateDetailss && loading === false) {
            if (updateDetailss.status === 200) {
                setShow(false)
                console.log(updateDetailss.data);
                swal('تم تحديث البيانات')
            } else {
                swal("هناك خطا في اختيار البيانات")
            }
        }
    }, [loading])

    // if(updateDetailss){
    //     console.log(updateDetailss);
    // }



    const onSubmit = async () => {
        setLoading(true)
        await dispatch(VerifyEmailCode({
            email: userData.data.user.name,
        }))


        navigate('/verify-email')
        // setTimeout(()=>{navigate('/')},1500)
    }

    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);
    }
    const handleLabelClick = (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('file');
        fileInput.click();
        setSelectImage(true)
    };


    useEffect(() => {
        if (selectImage === true && images.length !== 0) {
            console.log(images.length)
            console.log(selectImage)
            handleProfileImage();
        }
    }, [images.length])




    var infoUser = JSON.parse(localStorage.getItem('user'));

    const results = useSelector(state => state.UploadImageProfile.uploadsImages)


    const handleProfileImage = async () => {
        const formData = new FormData();
        images.map((image) => formData.append("image", image))
        if (loading2 === true) {
            console.log(loading2);
            if (infoUser.data.user.is_verified === "1") {
                setLoading2(true)
                await dispatch(UploadImageProfile(formData))
                setLoading2(false)
                setShowA(!showA)
            } else {
                swal("قم بتفعيل الايميل")
            }
        } else {
            // setShowD(!showD)
            // swal("قم بتفعيل الايميل")
        }

    }


    if (results) {
        if (results.status === 200) {
            console.log('تم التحديث');
            // setShowA(!showA)
        } else {

        }
    }



    return (
        <div>
            <div style={{ position: "fixed", right: "0", top: "22%", zIndex: "100" }}>
                <Toast show={showA} onClose={() => setShowA(false)} autohide delay={2000}>
                    <div className='d-flex'>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>تم تحديث الصورة الشخصية</Toast.Body>
                    </div>
                </Toast>
            </div>
            <div>
                <div className="user-address-card my-3 px-2">
                    <Row>
                        <Col>
                            <div className='imageProfileContainer'>
                                {
                                    infoUser ? (
                                        infoUser.data.user.image != null ? (


                                            
                                                <img src={infoUser.data.user.image} style={{ width: "100%", height: "100%", borderRadius: "50%" }} alt="Profile" />

                                        ) : (
                                            <div className="file-input">
                                                <input type="file" id="file" accept="image/*" onChange={handleImageUpload} style={{ visibility: "hidden" }} />
                                                <img src={personuknown} alt="ProfileImage" style={{ width: "100%", height: "100%" }} onClick={handleLabelClick} />
                                            </div>
                                        )
                                    ) : null
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-between pt-2">
                        <Col xs="6" className="d-flex">
                            <div className="p-2">الاسم:</div>
                            <div className="p-1 item-delete-edit">{userData.data.user.name}</div>
                        </Col>
                        <Col xs="6" className="d-flex justify-content-end text-center updateWidth" style={{ background: "#CB955B", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px", textAlign: "center", cursor: "pointer" }}>
                            <div className="d-flex mx-2" onClick={handleShow}>
                                <img
                                    alt=""
                                    className="ms-1 mt-2"
                                    src={Pen}
                                    height="17px"
                                    width="15px"
                                />
                                <p className="item-delete-edit" style={{ lineHeight: "25px", marginTop: "4px", color: "white", fontSize: "18px", cursor: "pointer" }}> تعديل</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="">
                        <Col xs="12" className="d-flex">
                            <div className="p-2">رقم الهاتف:</div>
                            <div className="p-1 item-delete-edit">{userData.data.user.phone_number}</div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col xs="12" className="d-flex">
                            <div className="p-2">الايميل:</div>
                            <div className="p-1 item-delete-edit">{userData.data.user.email}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" className="d-flex">
                            <div className="p-2">تفيعل الحساب:</div>
                            <div className="p-1 item-delete-edit">{
                                userData.data.user.is_verified ? (
                                    userData.data.user.is_verified === "1" ? ("الحساب مفعل") : (
                                        <button className="btn" onClick={onSubmit} style={{ background: "rgb(203, 149, 91)", color: "white" }}>فعل حسابك</button>
                                    )
                                ) : ('لم يتم تسجيل')
                            }</div>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-between  align-items-center'>
                        {/* <Col xs="6" className="d-flex">
                            <div>
                                <div >
                                    <div className="file-input">
                                        <input type="file" id="file" accept="image/*" onChange={handleImageUpload} style={{ visibility: "hidden" }} />
                                        <Button className='btn  w-100' style={{ background: "rgb(203, 149, 91)", border: "none", outline: "none" }} onClick={handleLabelClick}>
                                            الصورة الشخصيه
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col> */}
                        {/* <Col xs="6" className="d-flex justify-content-end align-items-center text-center">
                            <div className='uploadImageProfile'>
                                {images.map((image, index) => (
                                    <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`}
                                        style={{ width: "60px", height: "60px" }} />
                                ))
                                }
                            </div>
                            <div>
                                {
                                    images.length === 1 ? (<Button onClick={handleProfileImage} style={{ background: "rgb(203, 149, 91)", border: "none", outline: "none" }}>اضف الان</Button>) : null
                                }
                            </div>
                        </Col> */}
                    </Row>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} dir="rtl">
                <Modal.Title style={{ textAlign: "center", margin: "auto" }}>تحديث البيانات</Modal.Title>
                <Modal.Body>
                    <form>
                        <div>
                            <label htmlFor="name">الاسم</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={userData.data.user.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">البريد الإلكتروني</label>
                            <input
                                type="email"
                                id="email"
                                value={userData.data.user.email}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="text">العنوان</label>
                            <input
                                type="text"
                                id="text"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className='mt-4 d-flex justify-content-between  align-items-center'>
                            <div className='w-100'>
                                <label>المحافظه</label>
                                <br />
                                <select className="w-75 mt-2 py-2"
                                    name="govern"
                                    onChange={onSelectLocatioin}
                                >
                                    <option value="0">اختر المحافظه</option>
                                    {
                                        governments && governments.data ? (
                                            governments.data.map((item) => {
                                                return (
                                                    <option value={item.id}>{item.name}</option>
                                                )
                                            })
                                        ) : (null)
                                    }
                                </select>
                            </div>
                            <div className='w-100'>
                                <label>المدينه</label>
                                <br />
                                <select className="w-75 mt-2 py-2"
                                    name="cityId"
                                    onChange={onSelectCity}
                                >
                                    <option value="0">اختر المدينه</option>
                                    {
                                        city && city.data ? (
                                            city.data.data.map((item) => {
                                                return (
                                                    <option value={item.id}>{item.name}</option>
                                                )
                                            })
                                        ) : (null)
                                    }
                                </select>
                            </div>
                            {/* <div className='locationTime '>
                        <img src={LocationSvg} alt="Location" style={{ marginRight: "4px" }} />
                    </div> */}
                        </div>
                        <button type="submit" onClick={handleSubmitProduct}>إرسال</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default UserData
