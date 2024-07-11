import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllExProductsPage, getAllExchangeProducts } from '../../redux/action/ExchangeProductsAction'
import ExProductCard from '../Cards/ExProductCard'
import { Container, Row } from 'react-bootstrap'
import PaginationCompontent from '../utility/Pagination'
import SubTitle from '../utility/subTitle'
const ExproductContainer = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllExProductsPage())
    }, [])

    const ExProducts = useSelector(state => state.ExallProducts.Exproduct)

    if (ExProducts) {
        console.log(ExProducts);
    }


    let pageCount = 0;

    if (ExProducts.meta) {
        pageCount = ExProducts.meta.last_page;
        console.log(pageCount);
    }

    const getPaged = (page) => {
        dispatch(getAllExProductsPage(page))
    }



    return (
        <div>
            <SubTitle title="منتجات للتبديل" />
            <Container>
                <Row>
                    {
                        ExProducts.data ? (
                            ExProducts.data.map((item) => {
                                return (
                                    <ExProductCard desc={item.desc} img={item.image} title={item.title} id={item.id} rates={item.total_rate} city={item.city} />
                                )
                            })
                        ) : null
                    }
                </Row>
                <PaginationCompontent CountPage={pageCount} onPress={getPaged}/>
            </Container>
        </div>
    )
}

export default ExproductContainer
