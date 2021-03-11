import React, { Component } from 'react'

export default class BT extends Component {
    color = "black";
    state = {
        src: `./img/car/products/${this.color}-car.jpg`
    }
    changeColor = (color) => {
        this.setState({
            src: `./img/car/products/${color}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={this.state.src} className="w-100" />
                    </div>
                    <div className="col-md-6">
                        <button onClick={() => this.changeColor("red")} style={{ backgroundColor: "red", cursor: "pointer" }}>red</button>
                        <button onClick={() => this.changeColor("steel")} style={{ backgroundColor: "gray", cursor: "pointer" }}>gray</button>
                        <button onClick={() => this.changeColor("silver")} style={{ backgroundColor: "silver", cursor: "pointer" }}>silver</button>
                    </div>

                </div>
            </div >
        )
    }
}
