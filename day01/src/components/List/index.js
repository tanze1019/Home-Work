import React, { Component } from 'react'
import { Rate } from "antd"
import { getList } from "../../api/index"
import "./style.less"


export default class List extends Component {
    state = {
        arr: []
    }
    render() {
        let arr = this.state.arr ? this.state.arr : [];
        console.log(arr)
        return (
            <div className="com-list">
                {
                    arr.map((v, i) =>
                        <dl key={i} >
                        <dt><img src={v.photos[0].url} alt="" /></dt>
                            <dd >
                                <h1>{v.name}</h1>
                                <h2><Rate allowHalf defaultValue={v.biz_ext.rating * 1} style={{ fontSize:8 }}/> 673条评论  人均<span style={{ color: "red", fontWight: "500" }}>${v.biz_ext.cost}</span>元</h2>
                                <h3><span>{v.type.split(";")[0] + "..."}</span> <span>{v.address.substr(0, 2) + "..."}</span></h3>
                                <h4>
                                    {
                                        v.type.split(";").map((v, i) =>
                                            <span key={i}>{v}</span>
                                        )
                                    }
                                </h4>
                            </dd>
                        </dl>
                    )
                }
            </div>
        )
    }
    componentDidMount() {
        const data = {
            key: "02becfdf31a794ebe06478f6c8296122",
            location: `${116.306771},${40.047299}`,
            radius: "3000",
            page: 1,
            keywords: "美食"
        }
        getList(data).then(res => {
            console.log(res.data.pois)
            this.setState({
                arr: res.data.pois
            })
        })
    }

}
