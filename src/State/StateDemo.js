import React, { Component } from 'react'

export default class StateDemo extends Component {

    //State là một thuộc tính có sẵn của Component chứa các giá trị làm thay đổi giao diện khi người dùng thao tác
    // Lý do bỏ vô state là khi giá trị trong state thay đổi thì nó chạy lại hàm render thì sẽ làm thay đổi UI

    // setState  là phương thức bất đồng bộ, vì nó mất 1 khoảng thời gian tính toán để ra kq trong khi đó log đã ra kq
    state = {
        isLogin: false,


    }
    userName = "na";
    renderUILogin = () => {
        if (this.state.isLogin) {
            return `Hello ${this.userName}`
        }
        return <button onClick={() => {
            this.setState({
                isLogin: true
            }, function () {
                console.log(this.state.isLogin);
            })

            console.log(this.state.isLogin);
        }}>Login</button>

    }

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">CYBERSOFT</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    {/* Cách 1
                                    {this.isLogin === "false" ? "Đăng nhập" : `Hello ${this.userName}`} */}

                                    {this.renderUILogin()}
                                </a>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button onClick={() => {
                                // this.state.isLogin = true
                                // console.log(this.state.isLogin);
                                // Lưu ý: state không thay đổi được bằng cách trên mà phải dùng setState 

                                this.setState({
                                    isLogin: true
                                })
                            }} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
