import React, { useEffect, useState } from 'react'
// import SubTitle from '../../components/utility/subTitle'
import { Container, Row } from 'react-bootstrap'
import MostRented from '../../components/Home/MostRented'
import ProductCard from '../../components/Cards/ProductCard'
// import { useDispatch, useSelector } from "react-redux"
// import { getAllProducts } from '../../redux/action/ProductAction'
// import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom'
// import baseURL from '../../Api/baseUrl'
import axios from 'axios'
import EmptyPage from '../../components/utility/EmptyPage'
import OfferCategory from "../../components/Home/OfferCategoryContainer"
import { useDispatch, useSelector } from 'react-redux'
import { ShowFavouriteItem } from '../../redux/action/FavouriteAction'
const CategoryCardsDetails = () => {
    const params = useParams();
    const [dataId , setData] = useState([]);

    
    const FetchProductCaategory =async()=>{
        const res = await axios.get(`https://api.lepgo.online/api/v1/categories/${params.id}`);
        setData(res.data)
    }

    useEffect(()=>{FetchProductCaategory()},[])



const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    const [loading , setLoading] = useState(true)

    const [FavProducts , setFavProducts] = useState([]);

useEffect(()=>{
    const get = async()=>{
        setLoading(true)
        await dispatch(ShowFavouriteItem());
        setLoading(false)
    }
    get();
} , [])


const res = useSelector(state => state.FavouriteItemReducer.getFavouriteItems)

// if(res){
//     console.log(res);
// }

useEffect(()=>{
    if(loading === false && localStorage.getItem('user')){
        if(res.data){
            // console.log(res.data); 
            setFavProducts(res.data.map(item=>item.product_id))
        }
    }
} , [loading])

// console.log(dataId);



    return (
        <div style={{ minHeight: "768px", paddingTop: "180px" }}>
            <Container>
                <Row className='d-flex'>
                    {
                        dataId.data ? (
                            dataId.data.map((item)=>{
                                return (
                                    <ProductCard favProd={FavProducts} rates={item.total_rate} amount={item.amount} duration={item.duration}   desc={item.desc} title={item.title} img={item.image} id={item.id}/>
                                )
                            })
                        ):(<EmptyPage/>)
                    }
                </Row>
            </Container>
            <OfferCategory />
            
        </div>
    )
}

export default CategoryCardsDetails
