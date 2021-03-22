import React, { Component } from 'react'

export default class BTDoiKinh extends Component {
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];
    state = {
        kinh: this.arrProduct[0]
    }

    doiKinh = (index) => {
        this.setState({ kinh: this.arrProduct[index] })
    }

    renderKinh = () => {
        return this.arrProduct.map((kinh, index) => {
            return (
                <button onClick={() => { this.doiKinh(index) }} className="btn"><img height="50" src={kinh.url}></img></button>
            )
        })
    }
    render() {
        return (
            <div className="" style={{ backgroundImage: "url('./img/glassesImage/background.jpg')", }}>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{ backgroundImage: "url('./img/glassesImage/model.jpg')", height: "500px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                            <img style={{ opacity: "0.75", margin: "auto", display: "block", width: "300px", paddingTop: "110px" }} src={this.state.kinh.url}></img>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{ backgroundImage: "url('./img/glassesImage/model.jpg')", height: "500px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                            <img style={{ opacity: "0.75", margin: "auto", display: "block", width: "300px", paddingTop: "110px" }} src={this.state.kinh.url}></img>

                        </div>
                    </div>
                    <div className="container bg-dark text-white" >
                        <p>{this.state.kinh.name}</p>
                        <p>{this.state.kinh.desc}</p>
                    </div>
                </div>
                <div className="row">
                    {this.renderKinh()}

                </div>
            </div>
        )
    }
}
