import React, { Component } from 'react'
import "./style.less"
import { Icon, Input, Carousel, Row, Col } from "antd"
import { getBanner, getClass, getReo,getList } from "../../api/index"

export default class Home extends Component {
    state = {
        bannerArr: [],
        navArr: [],
        goodsLevel: [],
        listArr:[]
    }
    render() {
        let { bannerArr, navArr, goodsLevel,listArr } = this.state;
        return (
            <div className="page-home">
                <header>
                    <p><Icon type="unordered-list" /></p>
                    <div>
                        <Input
                            placeholder="输入喜欢的宝贝的名称"
                            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />
                    </div>
                    <p>登陆</p>
                </header>
                <section>
                    <div className="home-banner">
                        <Carousel autoplay>
                            {
                                bannerArr.map((v, i) => {
                                    return (
                                        <div key={i}><img src={v.image} alt={v.title} /></div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div className="home-nav">
                        <dl>
                            <dt><img data-v-829d77c6="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MDc3ODhlOS04ZTI2LTQxMmEtYTU0Zi04NGExMzQwMDk4MDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg0RjAyQUYyREVBMTFFNkE3QUJCNDUwMDREOTQ1OUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg0RjAyQUUyREVBMTFFNkE3QUJCNDUwMDREOTQ1OUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjZiOWEyYS1mMjcwLTQwNTctOTQ4NC05NGE1MTcwMDM5NTkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjOGZjMTQ0Ni02ODVhLTExNzktYmFjNC1iNDM4ZmU5OWI3NzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47sOP6AAAFa0lEQVR42uydX0hkVRzHf3dm1HJcF2wlNSQhsCKEFiaEXZBwwXkwelv2LaStaMmX0Ld6FSKMJRB2a0s2evQllvVBwViCgkDYYGApH1rLUGG26M/O+ifH6fvr/kbv6NyZe8+cce7cOV/4cq+M93juZ87f3z33aFENlbsTfRqHBDwA98N9cDfcCceP/HoGTsMb8Cq8AqfgZevl7C+1ugfrhIGdxuEVOAlfgHs0Jb0OL8EL8G0A/Ss0AAGtCYdX4TF4BG6u8p/chRfhm/AtwPy3LgEC3BM4vA2Pw101qmGb8Ax8HSB/rwuAUk3fhSeLtGO1Eref0/BV3dXb0ggugsNleEo6gSCKO6H34M8Bcj8wAAHvORw+g89Tfehb+A1A/LGmAAGOr78CfwQ/RvWlbXgCvgaQuRMHCHhtOMzCF6m+NQe/DogPTwwg4PXiMC8D4DCIB+SjgLhWdYCANyAD1m4Kl3iGkwTEVNUAAt5ZGaSeoXDqAQ/2AfGudoBS8r4OMTwnxGGvJdHyCI/bvO9DWG1LVedBL21ixGNvO99A8EjudV7uXR2gjPNmQ9Tb+hHf86wwUC6BV0IwzqtEF4WB/zZQpmd363CGUY0Zy1m3aZ9VIjDwje+5bayDqBezoxYNzeXaNFHmnn3+FArBqZcqT3MHfcMaZp17f6jMnYeKBSBiLhdcVgoMPP8lUUdS02Diq0OAbQmiJ1/Tk27bi5h3jPq96rwwuVG2DZR43pRS5toHg18h1fM4JWzKdiIcDFWM51nBB6iex05h4w5QwvCTZOSmSWHkWgL5GUbccHJVXBgdByhPz8YNo7IaF1bHSiA/euwyfMqqS1gdAzgWrLbe8fg4txM0iGMFAKV7HglUFiOth+fZraABHMkPafIlkJdbNJva6VnNwuwAYNIw8a2kE+AFw8O3/mcWkSVmPYaHb/UwOy6BCcNCWQkGOGA4KGuAAfYHMmsRRxx3fyuoAPsZYF/wAe4GFWAfA+w2NVFZ3Qyw03BQVieH9PWFrzIpougpnhwS7ZVYCJrLYnr2T4nPUWUf3Tv8+eEPRJtfOKr0tm037WfgPZfPtnUCjFsYy+RMQaqgqTYIKlNMa2otvUSWfCfRdpxb7t9brN09HauJaPs+0dbP9s+tz9o++LwFSTzufn20tTAcVtA87BCtf6IVYEZbO5hAWxU7rSdn998n+vUD+7xjlOiZD/Wky22zPoAZLi7pQNaNgoDqXlBrcJoBbpiWTFkbDHDVcFDWKgNcMRyUtcIAU4aDslIMcNlwUNZyRF5WXjcsfGud2eVnIkvBG+I7lidn/w4iwCXnVG4hePmLOsaB+0EEuOAEeJvsN72NvGlXmNkA5SXkRcPFsxbzL247ozE3DRfPOmDlBHiL7D0GjEprU1gVApTdLWYMn7Kace4EcjSgep3s8JZRcWWEERUFKFuDTCsnr/P5rTOumP1TX7qV5XH66PYpxUL6V0k1Rvjbxxq/7Cqt+FfPY1rYlM9l7k70TRw+VfozHHpv1rBSeBdt9aOf7POmM0TxF/Sm6V9vofTd8ApQ7VWv8Mr1VS/zsmF5lXzZ0PWxplwwYQofTZTaoKfcc+FrZO+r0qiaEwbqXZ289v4dNd46Qo7Unyu3IY/ZdKK49G06Ie0hJ8Sr0h80ADy+x6TXXYw8r42RfVRGQg4xv/GO5wdtvhYXyY4+wxTOh/F8T8N+di3yDdBREgcpXI9DU9Lm+b4npeVt0j6cC8kQZ0562zWVi5XXB0r3fgl+R0br9TjD4LxfUt07UFvIo5G3ANWyQlUyMsQRCwrqcjlbacnjkA542krgkdJotkHWBNJsxK0JpNkKXnP1Nv+MQCPQuv93GP8JMACzeqsv7FoIaQAAAABJRU5ErkJggg==" /></dt>
                            <dd>分类</dd>
                        </dl>
                        {
                            navArr.map((v, i) =>
                                <dl key={i}>
                                    <dt><img src={v.image} alt="" /></dt>
                                    <dd>{v.title}</dd>
                                </dl>
                            )
                        }
                    </div>
                    <div className="home-reo">
                        {
                            goodsLevel.map((v, i) =>
                                <div className="reo-items" key={i}>
                                    <h1> <s>---</s> {v.title} <s>---</s></h1>
                                    <div className="list">
                                       
                                                {
                                                    v.items.length === 6 ? (
                                                        <React.Fragment>
                                                        <Row>
                                                            <Col span={12}>
                                                                <div>
                                                                    <div className="title">
                                                                        <h1>{v.items[0].title}</h1>
                                                                        <h2 style={{textAlign:"center",color:"#ccc"}}><span style={{color:"#ccc"}}>火爆开售</span>
                                                                        </h2>
                                                                    </div>
                                                                    <div className="img">
                                                                        <img src={v.items[0].image} alt="" style={{width:"1.4rem",height:"1.4rem",margin:"auto"}}/>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col span={12}>
                                                            <div>
                                                                <div className="title">
                                                                    <div>
                                                                        <h1>{v.items[1].title}</h1>
                                                                        <h2 style={{textAlign:"center",color:"#ccc"}}>火爆开售</h2>
                                                                    </div>
                                                                    </div>
                                                                    <div className="img">
                                                                        <img src={v.items[1].image} alt="" style={{width:"1.4rem",height:"1.4rem",margin:"auto"}}/>
                                                                    </div>
                                                                </div>
                                                                
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                        {

                                                            v.items.map((vs,is)=>{
                                                                return is >1 ? (
                                                                    <Col span={6} key={is}>
                                                                <div>
                                                                    <div className="title">
                                                                        <h1>{vs.title}</h1>
                                                                    </div>
                                                                    <div className="img">
                                                                        <img src={vs.image} alt="" style={{height:"1.4rem"}}/>
                                                                    </div>
                                                                    <div className="price-box">
                                                                        <h1>￥{vs.price}</h1>
                                                                        <p><s>￥{vs.price*1+50}</s></p>
                                                                    </div>
                                                                </div>
                                                                </Col>
                                                                ) : null
                                                            })
                                                        }
                                                            
                                                        </Row>
                                                        </React.Fragment>
                                                    )
                                                     : (
                                                        <React.Fragment>
                                                        <Row>
                                                            <Col span={12}>
                                                                <div>
                                                                    <div className="title">
                                                                        <h1>{v.items[0].title}</h1>
                                                                        <h2><span>精品打折</span>
                                                                            <span className="price">{v.items[0].price}</span>
                                                                        </h2>
                                                                    </div>
                                                                    <div className="img">
                                                                        <img src={v.items[0].image} alt="" style={{height:'2.1rem'}}/>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col span={12}>
                                                            <div  className="heng">
                                                                <div className="title">
                                                                    <div>
                                                                        <h1>{v.items[1].title}</h1>
                                                                        <h2>品质精选</h2>
                                                                    </div>
                                                                    </div>
                                                                    <div className="img">
                                                                        <img src={v.items[1].image} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="heng">
                                                                    <div className="title">
                                                                            <div>
                                                                                <h1>{v.items[2].title}</h1>
                                                                                <h2>品质精挑4折起</h2>
                                                                            </div>
                                                                        </div>
                                                                        <div className="img">
                                                                            <img src={v.items[2].image} alt="" />
                                                                        </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                        {

                                                            v.items.map((vs,is)=>{
                                                                return is >2 ? (
                                                                    <Col span={6} key={is}>
                                                                <div>
                                                                    <div className="title">
                                                                        <h1>{vs.title}</h1>
                                                                    </div>
                                                                    <div className="img">
                                                                        <img src={vs.image} alt="" style={{height:"1.4rem"}}/>
                                                                    </div>
                                                                    <div className="price-box">
                                                                        <h1>￥{vs.price}</h1>
                                                                        <p><s>￥{vs.price*1+50}</s></p>
                                                                    </div>
                                                                </div>
                                                                </Col>
                                                                ) : null
                                                            })
                                                        }
                                                            
                                                        </Row>
                                                        </React.Fragment>
                                                    )

                                                }
                                    </div>
                                </div>
                            )
                        }

                    </div>
               
                    <div className="home-list">
                        <h1><s>----</s> <span><Icon type="heart" theme="twoTone" />为您推荐</span> <s>----</s></h1>
                        <Row gutter={8}>
                            {
                                listArr.map((v,i)=>
                                    <Col span={12} key={i}>
                                        <dl>
                                            <dt><img src={v.image} alt=""/></dt>
                                            <dd>
                                                <h1>{v.title}</h1>
                                                <h2>${v.price}元</h2>
                                            </dd>
                                        </dl>
                                    </Col>
                                )  
                            }
                        </Row>
                    </div>
                    
                </section>
                <footer>
                    <dl>
                        <dt><Icon type="home" /></dt>
                        <dd>首页</dd>
                    </dl>
                    <dl>
                        <dt><Icon type="shopping-cart" /></dt>
                        <dd>购物车</dd>
                    </dl>
                    <dl>
                        <dt><Icon type="user" /></dt>
                        <dd>我的</dd>
                    </dl>
                </footer>
            </div>
        )
    }
    componentDidMount() {
        getBanner().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    bannerArr: res.data.data
                })
            }
        })
        getClass().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    navArr: res.data.data
                })
            }
        })
        getReo().then(res => {
            if (res.data.code === 200) {

                this.setState({
                    goodsLevel: res.data.data
                })
            }
        })
        getList().then(res=>{
            console.log(res)
            if(res.data.code===200){
                this.setState({
                    listArr:res.data.data
                })
            }
        })

    }

}
