import React, { useEffect, useState } from 'react'
import OfferCard from '../../components/Cards/OfferCard'
import { Row, Spinner } from 'react-bootstrap'
import bicycle from "../../images/range-rover-1806931.png"
import SubTitle from '../../components/utility/subTitle'
import { Container } from "react-bootstrap"
import OfferCategoryContainer from '../../components/Home/OfferCategoryContainer'
import { useDispatch, useSelector } from "react-redux"
import { GetAllOffersShow } from '../../redux/action/OfferAction.js'
const GetAllOffers = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        dispatch(GetAllOffersShow())
    }, [loading])

    const data = useSelector(state => state.OfferReducer.offers)

    if (data && data.offers) {
        console.log(data);
        console.log(data.most_offers);
        console.log(data.offers.data);
    }




    return (
        <Container style={{ minHeight: "770px", paddingTop: "180px" }}>
            <SubTitle title="العروض المتاحه"/>
            <Row >
                {
                    data.most_offers ? (
                        data.most_offers.map((offer) => {
                            return (
                                <OfferCard img={offer.image} discount={offer.discount} title={offer.title} />
                            )
                        })
                    ) : (<Spinner />)
                }
                {
                    data.offers ?(
                        data.offers.data.map((offer) => {
                            return (
                                <OfferCard img={offer.image} discount={offer.discount} title={offer.title} />
                            )
                        })
                    ) : (null)
                }
            </Row>
        </Container>
    )
}

export default GetAllOffers
