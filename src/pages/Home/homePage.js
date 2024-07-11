import React from 'react'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import OfferCategoryContainer from '../../components/Home/OfferCategoryContainer'
// import MostRented from '../../components/Home/MostRented'
import ProductCardContainer from '../../components/Home/ProductCardContainer'
const homePage = () => {
    return (
        <div style={{paddingTop:"180px"}}>
            <Slider />
            <HomeCategory />
            <OfferCategoryContainer/>
            {/* <MostRented/> */}
            <ProductCardContainer/>
        </div>
    )
}

export default homePage
