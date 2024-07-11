import baseURL from '../../Api/baseUrl'
import { GetAllProducts, Get_Errors } from '../type'
import swal from 'sweetalert';
const getAllProducts = () => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`
    //     }
    // }
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/products')
            dispatch({ type: GetAllProducts, payload: res.data })
        } catch (e) {
            dispatch({ type: Get_Errors, payload: "Error through Loadin Data" + e })
        }
    }
}

const getAllProductsPage = (page) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get(`/api/v1/products?page=${page}`)

            dispatch({ type: GetAllProducts, payload: res.data })
        } catch (e) {
            dispatch({ type: 'Get_Errors', payload: "Error through Loadin Data" + e })
        }
    }
}
const DeleteProduct = (id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    return async (dispatch) => {
        try {
            let res = await baseURL.delete(`/api/v1/products/${id}` ,config)

            dispatch({ type: "deleteProduct", payload: res.data })
            if(res.status === 200){
                swal("تم حذف المنتج")
            }else{
                swal('هناك خطاا في الحذف')
            }
        } catch (e) {
            dispatch({ type: 'deleteProduct', payload: "Error through Loadin Data" + e })
        }
    }
}

export { getAllProducts, getAllProductsPage, DeleteProduct }