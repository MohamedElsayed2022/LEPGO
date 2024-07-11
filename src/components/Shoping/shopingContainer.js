import React from 'react'
import FavouriteCard from '../Cards/FavouriteCard'
import { Row } from 'react-bootstrap'
import bmw from "../../images/Group 598.png"
import SubTitle from '../utility/subTitle'
const shopingContainer = () => {
    return (
        <div>
            <SubTitle title="عربة التسوق"/> <span>(6 منتجات)</span>
            <Row className='d-flex justify-content-between align-items-center'>
                <FavouriteCard img={bmw}/>
                <FavouriteCard img={bmw}/>
                <FavouriteCard img={bmw}/>
                <FavouriteCard img={bmw}/>
                <FavouriteCard img={bmw}/>
                <FavouriteCard img={bmw}/>
            </Row>
        </div>
    )
}

export default shopingContainer
