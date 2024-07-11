import React, { useEffect, useState } from 'react'
// import SubTitle from '../../components/utility/subTitle'
import { Container, Row } from 'react-bootstrap'
// import MostRented from '../../components/Home/MostRented'
// import ProductCard from '../../components/Cards/ProductCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import EmptyPage from '../../components/utility/EmptyPage'
import OfferCategory from "../../components/Home/OfferCategoryContainer"
import ProductCard from '../../components/Cards/ProductCard'
import EmptyPage from '../../components/utility/EmptyPage'
// import { useDispatch, useSelector } from 'react-redux'
// import { ShowFavouriteItem } from '../../redux/action/FavouriteAction'
import D from '../../components/Cards/ExProductCard'

const ExCategoryCardsDetails = () => {


    const params = useParams();
    const [dataId, setData] = useState([]);


    const ExData = async () => {
        const config = {
            headers: {
                Authorization: `Bearer 527|hMEuhAwGylz1ValG7kYgvOGSWCIDPiwOZx5qH55S`
            }
        }
        const res = await axios.get(`https://api.lepgo.online/api/v1/exchange/categories/${params.id}`, config);
        setData(res.data)
    }

    useEffect(() => { ExData() }, [])





    if (dataId) {
        console.log(dataId.data);
    }



    return (
        <div style={{ minHeight: "768px", paddingTop: "180px" }}>
            <Container>
                <Row className='d-flex'>
                    {
                        dataId.data ? (
                            dataId.data.map((item) => {
                                return (
                                    <D rates={item.total_rate} amount={item.amount} duration={item.duration}   desc={item.desc} title={item.title} img={item.image} id={item.id}/>
                                )
                            })
                        ) : (<EmptyPage />)
                    }
                </Row>
            </Container>
            <OfferCategory />

        </div>
    )
}

export default ExCategoryCardsDetails
