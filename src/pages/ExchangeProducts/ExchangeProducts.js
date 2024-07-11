import React from 'react'
// import Homepage from "../Home/homePage"
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import OfferCategoryContainer from '../../components/Home/OfferCategoryContainer'
import ExproductContainer from '../../components/ExchangeProducts/ExproductContainer'
import ExchangeCategory from '../../components/ExchangeProducts/ExchangeCategory'


const ExchangeProducts = () => {
    return (
        <div style={{ paddingTop: "180px" }}>
            <Slider />
            <ExchangeCategory />
            {/* <OfferCategoryContainer/> */}
            <ExproductContainer/>
        </div>
    )
}

export default ExchangeProducts
