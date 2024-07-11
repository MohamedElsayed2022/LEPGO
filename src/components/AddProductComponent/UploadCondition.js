import React, { useState, useEffect } from 'react'
import { Button, Toast } from 'react-bootstrap';
import plus from "../../images/plus.svg"
import mins from "../../images/minus.svg"
import LocationSvg from "../../images/location_pin.svg"
import imageDefault from "../../images/Uploading-bro.svg"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from '../../redux/action/categoryAction.js'
import { StoreProduct } from '../../redux/action/StoreProductAction';
import swal from 'sweetalert';
import { UpdateDetails } from '../../redux/action/UpdateDetailsAction';
import { getAllGovernments } from '../../redux/action/GovernmentAction';
import baseURL from '../../Api/baseUrl';


const UploadCondition = () => {

    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [showD, setShowD] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    useEffect(() => {
        dispatch(getAllGovernments());
    }, [])


    const categories = useSelector(state => state.allCategory.category)
    const governments = useSelector(state => state.GovernmentsReducer.Governments);

    // if(governments){
    //     console.log(governments.data);
    // }



    // const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);
    }
    const handleLabelClick = (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('file');
        fileInput.click();
    };





    // const [count, SetCount] = useState(0)
    // const increaseTime = () => SetCount(count + 1);
    // const DecreaseTime = () => {
    //     if (count <= 0) {
    //         SetCount(0)
    //     } else {
    //         SetCount(count - 1)
    //     }
    // }



    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [conditions, setConditions] = useState("");
    const [location, setLocation] = useState('');
    const [place, setPlace] = useState('');
    const [duration, setDuration] = useState(0);
    const [amount, setAmount] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [enum_durations, setenum_durations] = useState('');
    const [discount, setDiscount] = useState(0);
    const [available, setAvailable] = useState(1);
    const [loading, setLoading] = useState(true);
    const [idGovern, setIdgovern] = useState(0)
    const [cityId, setCityId] = useState(0)
    const [city, setCity] = useState([])
    //Store Id Category
    const onSelectCategory = (e) => {
        setCategoryId(e.target.value)
    }
    const onSelectLocatioin = (e) => {
        setLocation(e.target.value)
        setIdgovern(e.target.value)
    }
    const onSelectEnum = (e) => {
        setenum_durations(e.target.value)
    }
    const onSelectCity = (e) => {
        setCityId(e.target.value)
    }

    // console.log(location);

    const fetchCities = async () => {
        let city = await baseURL.get(`/api/v1/cities/${idGovern}`)
        // console.log(city);
        setCity(city)
    }

    useEffect(() => {
        fetchCities()
    }, [idGovern])


    // console.log(city.data);

    var infoUser = JSON.parse(localStorage.getItem('user'));


    //to Save Data
    const handleSubmitProduct = async (e) => {
        e.preventDefault();

        if (images.length <= 0 || title === "" || categoryId === 0 || amount === "" || desc === "" || conditions === "" || location === "") {
            // swal('ادخل البيانات الصحيحه');
            setShowA(!showA)
            return;
        }
        const formData = new FormData();
        formData.append("title", title)
        formData.append("desc", desc)
        formData.append("conditions", conditions)
        formData.append("category_id", categoryId)
        formData.append("location", location)
        formData.append("amount", amount)
        images.map((image) => formData.append("images[]", image))
        formData.append("duration", duration)
        formData.append("city_id", cityId)
        formData.append("enum_durations", enum_durations)
        formData.append("discount", discount)
        formData.append("available", available)

        if (infoUser) {
            if (loading === true && infoUser.data.user.is_verified === "1") {
                // swal("جاري الرفع الان")
                setShowB(!showB)
                setLoading(true)
                await dispatch(StoreProduct(formData))
                setLoading(false)
            } else {
                setShowD(!showD)
            }
        }else{
            swal("قم بالتسجيل")
        }
    }

    // console.log(images[0]);
    const r = useSelector(state => state.StoreProductReducer.storeProducts)
    // console.log(r);

    useEffect(() => {

        if (loading === false) {
            setTitle('');
            setImages([]);
            setAvailable(false)
            setDiscount(0)
            setenum_durations('')
            setDesc("")
            setAmount(0)
            setConditions("")
            setDuration(0)

            // setTimeout(() => {
                setLoading(true)
            // }, 1500);

            if (r) {
                console.log(r.data);
                // swal(`${r.data.message}`)
                setShowC(!showC)
            } else {
                swal('عليك تحديث البيانات في الصفحه الرئيسيه')
            }
        }

    }, [loading])









    return (
        <div>
            <div style={{ position: "fixed", right: "0", top: "22%", zIndex: "100" }}>
                <Toast show={showA} onClose={() => setShowA(false)} autohide delay={2000}>
                    <div className='d-flex'>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>ادخل البيانات كامله</Toast.Body>
                    </div>
                </Toast>
            </div>
            <div style={{ position: "fixed", right: "0", top: "22%", zIndex: "100" }}>
                <Toast show={showB} onClose={() => setShowB(false)} autohide delay={5000}>
                    <div className='d-flex'>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>جاري الرفع الان</Toast.Body>
                    </div>
                </Toast>
            </div>
            <div style={{ position: "fixed", right: "0", top: "22%", zIndex: "100" }}>
                <Toast show={showC} onClose={() => setShowC(false)} autohide delay={2000}>
                    <div className='d-flex'>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>تم رفع المنتج بنجاح</Toast.Body>
                    </div>
                </Toast>
            </div>
            <div style={{ position: "fixed", right: "0", top: "22%", zIndex: "100" }}>
                <Toast show={showD} onClose={() => setShowD(false)} autohide delay={2000}>
                    <div className='d-flex'>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>قم بتفعيل الايميل</Toast.Body>
                    </div>
                </Toast>
            </div>
            <div>
                <div>
                    <div className="file-input">
                        <input type="file" id="file" accept="image/*" multiple={true} max={`4`} onChange={handleImageUpload} style={{ visibility: "hidden" }} />
                        <img src={imageDefault} alt="Select images" onClick={handleLabelClick} />
                    </div>
                    <div className="image-container">
                        {images.map((image, index) => (
                            <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`}
                                style={{ width: "100px", height: "100px" }} />
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "right" }} className='addProduct'>
                <div className="mt-5">
                    <abel>تحديد نوع المنتج</abel>
                    <select className="w-100 mt-2 py-2"
                        name="category"
                        onChange={onSelectCategory}
                    >
                        <option value="0">اختر التصنيف</option>
                        {
                            categories && categories.data ? (
                                categories.data.map((item) => {
                                    return (
                                        <option value={item.id}>{item.title_ar}</option>
                                    )
                                })
                            ) : (null)
                        }
                    </select>
                </div>
                <div className='mt-4'>
                    <label>إسم المنتج</label>
                    <br />
                    <input type='text' className='w-100 mt-2' placeholder='........اكتب هنا'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='mt-4 d-flex justify-content-between  align-items-center'>
                    <div className='w-100'>
                        <label>سعر الحجز</label>
                        <br />
                        <input type='number' className='w-100 mt-2' placeholder="السعر"

                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    {/* <div className='w-50'>
                        <label>خصم(إختياري)</label>
                        <br />
                        <input type='text' className='w-75 mt-2' placeholder="نسبة الخصم" />
                    </div> */}
                </div>
                <div className='mt-4 d-flex align-items-center'>
                    <div className='w-100'>
                        <label>  مدة الحجز </label>
                        <br />
                        <input type='number' className='w-75 mt-2' placeholder="السعر"

                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>

                    <div className='w-100'>
                        <label>  مدة الحجز </label>
                        <br />
                        <select className='w-75' name="enum-duration"

                            onChange={onSelectEnum}
                        >
                            <option value="year">year</option>
                            <option value="month">month</option>
                            <option value="week">week</option>
                            <option value="day">day</option>
                            <option value="hour">hour</option>
                        </select>
                    </div>
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

                <div className='mt-4'>
                    <label>وصف المنتج</label>
                    <br />
                    <textarea className='mt-2' style={{ resize: 'none' }} cols={80} rows={10}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className='mt-4'>
                    <label>شروط حجز المنتج</label>
                    <br />
                    <textarea className='mt-2' style={{ resize: 'none' }} cols={80} rows={10}

                        value={conditions}
                        onChange={(e) => setConditions(e.target.value)}
                    ></textarea>
                </div>
                <div className='text-center    mt-3'>
                    <Button style={{ backgroundColor: "#CB955B", outline: "none", border: "none" }} className='w-50'
                        onClick={handleSubmitProduct}
                    >أضف الان</Button>
                </div>
            </div>
        </div>
    )
}

export default UploadCondition
