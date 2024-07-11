
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImageGallery from "../../components/ProductComponents/ImageGallery.js"
import DetailsProduct from "../../components/ProductComponents/DetailsProduct.js"
import { useParams } from 'react-router-dom'
import baseURL from '../../Api/baseUrl.js'
import PostRate from './PostRate.js'
import RateItem from './RateItem.js'
import ProductCard from '../../components/Cards/ProductCard.js'
import SubTitle from "../../components/utility/subTitle.js"
import { useDispatch, useSelector } from 'react-redux'
import { ShowFavouriteItem } from '../../redux/action/FavouriteAction.js'

const SpecificProduct = () => {
    let params = useParams();

    // console.log(params);

    const [dataId, setDataId] = useState([])

    const fetchFilmbyId = async () => {

        const detailFilmById = await baseURL.get(`https://api.lepgo.online/api/v1/products/${params.id}`);
        // console.log(detailFilmById.data);
        setDataId(detailFilmById.data)
    }

    let text = "";
    let description = ""
    let conditions = ""
    let place = "";
    let price = "";
    let duration = "";
    let imageOne = null
    let imageTwo = null
    let imageThee = null
    let imageFour = null
    if (dataId.data) {
        text = dataId.data.title
        description = dataId.data.desc
        conditions = dataId.data.conditions
        place = dataId.data.city
        price = dataId.data.price
        duration=dataId.data.duration


        // console.log(dataId.data.duration);

        for (let i = 0; i < dataId.data.images.length; i++) {
            for (let j = 0; j < 1; j++) {
                if (i === 0) {
                    imageOne = dataId.data.images[i].image;
                } else if (i === 1) {
                    imageTwo = dataId.data.images[i].image;
                } else if (i === 2) {
                    imageThee = dataId.data.images[i].image;
                } else if (i === 3) {
                    imageFour = dataId.data.images[i].image;
                }
            }
        }
    }
    useEffect(() => {
        fetchFilmbyId()
    }, [])


    // const favProd = [];
    const dispatch = useDispatch();
    const [FavProducts, setFavProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(ShowFavouriteItem());
            setLoading(false)
        }
        get();
    }, [])

    const res = useSelector(state => state.FavouriteItemReducer.getFavouriteItems)
    useEffect(() => {
        if (loading === false && localStorage.getItem('user')) {
            if (res.data) {
                // console.log(res.data); 
                setFavProducts(res.data.map(item => item.product_id))
            }
        }
    }, [loading])



    return (
        <div style={{ minHeight: "768px", paddingTop: "200px" }}>
            <Container>
                <Row className="py-3">
                    <Col xs="12" sm="12" md="12" lg="4" className="">
                        <ImageGallery imageOne={imageOne} imageTwo={imageTwo} imageThree={imageThee} imageFour={imageFour} />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="8" className="">
                        <DetailsProduct duration={duration} title={text} desc={description} conditions={conditions} place={place} price={price}/>
                        <PostRate />
                        {
                            dataId.data ? (
                                dataId.data.reviews.map((item) => {
                                    return (
                                        <RateItem Identifier={params.id} comment={item.comment} rateUs={item.rate} user={item.user} id={item.id} />
                                    )
                                })
                            ) : null
                        }
                    </Col>
                </Row>


                <div className='mt-5'>
                    <SubTitle title="منتجات قد تعجبك" />
                    <Row className='mt-2 d-flex'>
                        {
                            dataId.data ? (
                                dataId.data.related_products.map((item) => {
                                    return (
                                        <ProductCard  favProd={FavProducts} title={item.title} desc={item.desc} img={item.image}
                                            duration={item.duration} rates={item.total_rate} city={item.city} amount={item.amount} id={item.id} move={true}/>
                                    )
                                })
                            ) : null
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default SpecificProduct
