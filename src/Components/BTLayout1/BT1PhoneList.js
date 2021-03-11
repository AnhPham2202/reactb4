import React, { Component } from 'react'
import BT1Phone from './BT1 Phone/BT1Phone'

export default class BT1PhoneList extends Component {
    render() {
        return (
            <div className="bg-dark">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row container-fluid">
                    <div className="col-md-3 p-5">
                        <BT1Phone />
                    </div>
                    <div className="col-md-3  p-5">
                        <BT1Phone />
                    </div>
                    <div className="col-md-3  p-5">
                        <BT1Phone />
                    </div>
                    <div className="col-md-3  p-5">
                        <BT1Phone />
                    </div>
                </div>

            </div>
        )
    }
}
