
import baseURL from '../../Api/baseUrl'
import swal from 'sweetalert';

const UpdateDetails = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.put('/api/v1/users/update_details' ,data , config )

            dispatch({ type: 'updateDetails', payload: res })
        } catch (e) {
            dispatch({ type: 'updateDetails', payload: e.res })
            console.log(e.message);
            if(e.message === "Request failed with status code 500"){
                swal('هناك خطا في اختيار البيانات')
            }
        }
    }
}



export {UpdateDetails}