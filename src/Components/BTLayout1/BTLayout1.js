import React, { Component } from 'react'
import BT1Carousel from './BT1Carousel'
import BT1Footer from './BT1Footer'
import BT1Header from './BT1Header'
import BT1LaptopList from './BT1LaptopList'
import BT1PhoneList from './BT1PhoneList'

export default class BTLayout1 extends Component {
    render() {
        return (
            <div>
                <BT1Header />
                <BT1Carousel />
                <BT1PhoneList />
                <BT1LaptopList />
                <BT1Footer />

            </div>
        )
    }
}
