import React, { Component } from 'react'

export default class DemoClass extends Component {




    //Phương thức render sẽ tự kích hoạt  khi kiichs hoạt khi mình sử dụng thẻ component
    render() {
        return (
            <div className="container bg-dark p-5 text-white">
                <p className="display-4 pt-2">Title</p>
                <p>Content</p>
            </div>
        )
    }
}// react class component (rcc)
