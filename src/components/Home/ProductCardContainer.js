import React, { useEffect, useState } from 'react'
import ProductCard from '../Cards/ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utility/subTitle'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getAllProductsPage } from '../../redux/action/ProductAction'
import Spinner from 'react-bootstrap/Spinner';
import PaginationCompontent from '../utility/Pagination'
import { ShowFavouriteItem } from '../../redux/action/FavouriteAction'
import { createRef } from 'react';
const ProductCardContainer = () => {

    const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    const [loading , setLoading] = useState(true)

    const [FavProducts , setFavProducts] = useState([]);

    useEffect(() => {
        dispatch(getAllProductsPage())
    }, [])
    const Products = useSelector(state => state.allProducts.product)

    // const loading = useSelector(state => state.allProducts.loading)



    useEffect(() => {
        dispatch(getAllProductsPage())
    }, [])

    // const Products = useSelector(state => state.allProducts.category);

    let pageCount = 0;

    if (Products.meta) {
        pageCount = Products.meta.last_page;
    }


    const getPage = (page) => {
        dispatch(getAllProductsPage(page))

        myRef.current.scrollIntoView({
            behavior: "smooth"
        })

    }



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


    // console.log(FavProducts);
    // if(Products.data){
    //     console.log(Products.data);
    // }

    // if(Products){
    //     console.log(Products);
    //     if(res){
    //         console.log(res);
    //     }
    // }
    const myRef = createRef();
    setTimeout(()=>{console.log(myRef.current);} , 500)

    return (
        <div className='ProductContainer mt-5'>
            <Container id="cont" ref={myRef}>
                <SubTitle title="منتجات قد تعجبك" />
                <Row className='d-flex'>
                    {
                        Products.data ? (
                            Products.data.map((product , index) => {
                                return (<ProductCard favProd={FavProducts} title={product.title} key={index} id={product.id} duration={product.duration} img={product.image} rates={product.total_rate} amount={product.amount} desc = {product.desc}
                                city={product.city}
                                />)
                            })
                        ) : (<Spinner />)
                    }
                </Row>
                <PaginationCompontent CountPage={pageCount} onPress={getPage} />
            </Container>
        </div>
    )
}

export default ProductCardContainer
