import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ForgetPass } from '../../redux/action/AuthAction';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ForgetPassHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);


    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const validationTest = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !regex.test(email)) {
            swal('ادخل الايميل وبطريقه صحيحه');
            return
        }
    }


    const onSubmit = async (event) => {
        event.preventDefault();
        validationTest();
        setLoading(true)
        await dispatch(ForgetPass({
            email,
        }))
        setLoading(false)
    }
    const result = useSelector(state => state.UserReducer.forgetpass)
    useEffect(() => {
        if (loading === false) {
            if (result === undefined) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (email === "" || !regex.test(email)) {
                    swal('ادخل الايميل بطريقه ضحيحه')
                    return
                } else {
                    swal('هذا الايميل غير مسجل  ')
                    return
                }
            } else {
                console.log(result);
                swal(`لقد ارسلنا لك ايميل `);
            }
        }
    }, [loading])



    return [email, onChangeEmail, onSubmit]
}

export default ForgetPassHook
