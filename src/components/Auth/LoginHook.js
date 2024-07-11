import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, VerifyEmailCode } from '../../redux/action/AuthAction';
import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
const LoginHook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true)

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = async () => {
        setLoading(true)
        await dispatch(LoginUser({
            email,
            password
        }))
        setLoading(false)
    }
    const data = useSelector(state => state.UserReducer.LoginUser)
    useEffect(() => {
        if (loading === false) {
            if (data) {
                if (data.status === 201) {
                    console.log(data);
                    localStorage.setItem('token', data.data.token)
                    localStorage.setItem('user', JSON.stringify(data));
                    swal("تم تسجيل الدخول");
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1500)
                }
                setLoading(true)
            } else {
                console.log("Noooo");
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                swal("هناك خطا ما")
            }
        }
    }, [loading])

    return [email, password, onChangeEmail, onChangePassword, onSubmit]
}

export default LoginHook;