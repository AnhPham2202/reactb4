import React, { Component } from 'react'

export default class CardProduct extends Component {
    render() {
        return (
            <div className="">
                <div className="card text-left">
                    <img className="card-img-top" src="http://picsum.photos/180/180" alt="aklsd" />
                    <div className="card-body">
                        <h4 className="card-title">IP10</h4>
                        <p className="card-text">1000</p>
                    </div>
                </div>
            </div>
        )
    }
}
