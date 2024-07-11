import baseURL from '../../Api/baseUrl'
// import { AllCategory ,Get_Errors} from '../type'


const FavouriteItem = (body) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    return async (dispatch) => {
        try {
            let res = await baseURL.post('/api/v1/favorites/store' ,body ,config) 
            dispatch({ type: "PostFavouriteItem", payload: res.data })
        } catch (e) {
            dispatch({ type: "PostFavouriteItem", payload: "Error through Loadin Data" + e })
        }
    }
}



const DeleteFavouriteItem = (prodId) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    return async (dispatch) => {
        try {
            let res = await baseURL.delete(`/api/v1/favorites/${prodId}`, config) 
            dispatch({ type: "DeleteFavITem", payload: res.data })
        } catch (e) {
            dispatch({ type: "DeleteFavITem", payload: "Error through Loadin Data" + e })
        }
    }
}


const ShowFavouriteItem = () => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/favorites' , config) 
            dispatch({ type: "getFavouriteItems", payload: res.data })
        } catch (e) {
            dispatch({ type: "getFavouriteItems", payload: "Error through Loadin Data" + e })
        }
    }
}

export {FavouriteItem , ShowFavouriteItem , DeleteFavouriteItem}