import React, { Component } from 'react'
// Cách 1: import đuognừ dẫn css từ file component sẽ bị ảnh hưởng toàn ứng dụng 
// import "./styles.css";
//Cách 2: import css tại component cách này thì không ảnh huognwr toàn ứng dụng chỉ ảnh hưởng file import nó nhưng cách xài class thì dùng databinding 
import style from "./styles.module.css"
// Cách 3: css trên thẻ bằng databinding trong databinding nhận vào 1 object trong object key là các thuộc tính css (không có dấu -) và value
export default class Styles extends Component {
    render() {
        return (
            <div className={`${style.textGreen} ${style.bgBlack} display-4`}>
                123

                <section style={{
                    backgroundColor: "black",
                    color: "red"
                }}>alo</section>
            </div>
        )
    }
}
