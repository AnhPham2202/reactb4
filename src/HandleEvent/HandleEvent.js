import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = () => {
        alert("hi Bitch!!")
    }
    showMess = (name) => {
        alert(`Hello ${name}`)
    }

    render() {
        let name = "na"
        return (
            <div>
                <button id="btnClick" onClick={this.handleClick}>Click me</button>
                <button id="btnClick2" onClick={() => {
                    alert("Hi again, Bitch!!!")
                }}>Click me</button>
                <button id="btnClick" onClick={this.showMess.bind(this, name)}>Click me</button>
                <button id="btnClick" onClick={() => {
                    this.showMess("nanaa")
                }}>Click me</button>


            </div>
        )
    }
}
