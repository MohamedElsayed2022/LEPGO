import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {VerifyEmailCodeNumOtp} from '../../redux/action/AuthAction';
import swal from "sweetalert";


const VerifyEmail= ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [otp, setCode] = useState("")

    const [loading, setLoading] = useState(true)

    const onChangeCode = (event) => {
        setCode(event.target.value)
    }

    const onSubmit =async ()=>{
        setLoading(true)
        await dispatch(VerifyEmailCodeNumOtp({
            otp,
        }))
        setLoading(false)

        // setTimeout(()=>{navigate('/')},1500)
    }
    const data = useSelector(state => state.UserReducer.VerifyEmailOtp)

    useEffect(() => {
        if (loading === false) {
            if(data){
                console.log(data);
                setTimeout(()=>{navigate('/login')},1500)
            }else{
                swal("ادخل الكود الصحيح")
            }
            // localStorage.setItem('')
        }
    }, [loading])


    return [ otp ,onChangeCode , onSubmit]
}


export default VerifyEmail