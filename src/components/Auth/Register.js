import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {createNewUsers} from '../../redux/action/AuthAction';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {VerifyEmailCode} from '../../redux/action/AuthAction';

const Register = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [addresUser, setAddress] = useState("")
    const [loading, setLoading] = useState(true)

    const onChangeName = (event) => {
        setName(event.target.value) 
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onChangePhone = (event) => {
        setPhone(event.target.value)
    }
    const onChangeAddress = (event) => {
        setAddress(event.target.value)
    }

    const validationData = () => {
        if (name === "") {
            swal("please Enter your name")
            return;
        }
        if (email === "") {
            swal("please Enter your email")
            return;
        }
        if (addresUser === "") {
            swal("please Enter your address")
            return;
        }
        if (password === "" || password.length <= 10) {
            swal("please Enter your password correct")
            return;
        }
        if(phone.length  <=10){
            swal("Enter your phone number")
            return;
        }
    }


    const verify_Email_to_activate =async ()=>{
        await dispatch(VerifyEmailCode({
            email,
        }))
    }
    
    const onSubmit = async () => {
        validationData();
        setLoading(true)
        await dispatch(createNewUsers({
            name,
            email,
            password,
            phone_number: phone,
            address:addresUser
        }))
        setLoading(false)
    }
    const data = useSelector(state => state.UserReducer.createUSer);
    // const getVerify = useSelector(state => state.UserReducer.verifyemail)
    useEffect(() => {
        if (loading === false) {
            if (data) {
                if(data.data.token){
                    swal("تم التسجيل ينجاح")
                    localStorage.setItem('token', data.data.token);
                    localStorage.setItem('user', JSON.stringify(data));
                    console.log(data);
                    verify_Email_to_activate(); 
                    // localStorage.setItem('user', JSON.stringify(data));
                    // console.log(getVerify);
                    navigate('/verify-email')
                }
            }else{
                swal('هناك خطا في البيانات ')
            }
        }
    }, [loading])


    return [name, email, password, phone, addresUser, onChangeName, onChangeEmail, onChangePassword, onChangePhone, onChangeAddress , onSubmit]

}

export default Register
