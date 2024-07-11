import {combineReducers} from "redux"
import CategoryReducers from "./categoryReducers"
import ProductReducer from './ProductReducer'
import ExProductReducer from './ExchangeProductsReducer'
import UserReducer from "./Authreducer"
import OfferReducer from "./OfferReducer"
import FavouriteItemReducer from "./FavouriteReducer"
import StoreProductReducer from "./StoreProductReducer"
import UpdateDetails from "./UpdateDetailsReducer"
import GovernmentsReducer from "./GovernmentReducer"
import MyProductsRed from "./GetMyProductsReducer"
import CommentsReducer from "./PostCommentReducer"
import UploadImageProfile from "./UploadImagePrfileReducer"
import CategoryExReducer from "./CategoryExReducer"

export default combineReducers({
    allCategory:CategoryReducers,
    allProducts:ProductReducer,
    ExallProducts:ExProductReducer,
    UserReducer:UserReducer,
    OfferReducer:OfferReducer,
    FavouriteItemReducer:FavouriteItemReducer,
    StoreProductReducer: StoreProductReducer,
    UploadImageProfile: UploadImageProfile,
    updateDetails:UpdateDetails,
    GovernmentsReducer:GovernmentsReducer,
    MyProductsRed : MyProductsRed,
    CommentsReducer:CommentsReducer,
    allExCategory:CategoryExReducer
})