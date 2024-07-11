import React, { useEffect, useState } from 'react'
import SubTitle from "../utility/subTitle.js"
import OfferCard from '../Cards/OfferCard.js'
import { Container, Row, Spinner } from 'react-bootstrap'
import rangeRover from "../../images/range-rover-1806931.png"
import bicycle from "../../images/bicycles-737190@2x.png"
import { useDispatch, useSelector } from "react-redux"
import { GetAllOffersShow } from '../../redux/action/OfferAction.js'

const OfferCategoryContainer = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        dispatch(GetAllOffersShow())
    }, [loading])

    const data = useSelector(state => state.OfferReducer.offers)


    return (
        <Container className='mt-5'>
            <SubTitle title="العروض المتاحه" TitleMore="جميع العروض" pathText="/allOffers" />
            <Row className="d-flex  justify-content-between">
                {
                    data.most_offers ? (
                        data.most_offers.map((offer) => {
                            return (
                                <OfferCard img={offer.image} discount={offer.discount} title={offer.title
                                } />
                            )
                        })
                    ) : (<Spinner/>)
                }
            </Row>
        </Container>
    )
}

export default OfferCategoryContainer
