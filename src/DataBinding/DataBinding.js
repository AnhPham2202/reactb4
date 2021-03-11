import React, { Component } from 'react'

export default class DataBinding extends Component {
    sinhVien = {
        ma: 1,
        ten: "Nguyễn Văn Tèo"
    }

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: "na",
            hinhAnh: "https://picsum.photos/100/100"
        };

        return <div className="card text-left">
            <img className="card-img-top" src={sinhVien.hinhAnh} alt={sinhVien.hinhAnh} />
            <div className="card-body">
                <h4 className="card-title">{sinhVien.ma}</h4>
                <p className="card-text">{sinhVien.ten}</p>
            </div>
        </div>

    }



    render() {
        let name = "na";
        let product = {
            name: "IphoneX",
            price: 1000,
            img: "https://picsum.photos/1000/1000"
        }
        let renderProduct = () => {
            //khi nội dung return là component thì phải được bao phủ bởi 1 thẻ
            return <div>
                <p>{product.name}</p>
            </div>
        }




        return (
            <div className="container">
                <ul>
                    <li>Mã Số sinh viên : {this.sinhVien.ma}</li>
                    <li>Tên sinh viên : {this.sinhVien.ten}</li>
                </ul>
                <p id="title">{name}</p><br />
                <div className="card text-left w-25">
                    <img className="card-img-top" src={product.img} alt={product.img} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
                {renderProduct()}
                {this.renderSinhVien()}
            </div>
        )
    }
}
