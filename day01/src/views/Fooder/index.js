import React, { Component } from 'react'
import { Icon, Input } from 'antd';
import Swiper from 'swiper/js/swiper.js'
import "./style.less"
import 'swiper/css/swiper.min.css'
import List from "../../components/List/index"
import LazyLoad from 'react-lazyload';


export default class Fooder extends Component {
    state = {
        arr: [1, 2, 3, 4, 5, 6, 7, 8]
    }

    onScroll = (e) => {
        let scrollNum = e.target.scrollTop
        let heig = this.refs.nav.offsetHeight
        let topNum=this.refs.uls.offsetTop+this.refs.uls.offsetHeight-50;
        console.log(topNum)
        if (scrollNum > heig) {
            this.refs.hea.className = "hea"
        } else {
            this.refs.hea.className = ""
        }
        if(scrollNum>topNum){
            this.refs.ulss.className = "ulss show"
        }else{
            this.refs.ulss.className = "ulss hide"
        }

    }
    goTo = () => {
        this.props.history.go(-1);
    }

    render() {
        let arr = this.state.arr
        return (
            <div className="page-fooder">
                <header ref="hea">
                    <p><Icon type="left" onClick={this.goTo} /></p>
                    <div>
                        <Input
                            placeholder="请输入商家名、品类或者撒大大"
                            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text"
                        />
                    </div>
                    <p><Icon type="robot" style={{ fontSize: ".42rem" }} /></p>
                </header>
                <div className="ulss hide" ref="ulss">
                        <ul className="ul">
                            <li>全部栏目<Icon type="caret-down" /></li>
                            <li>附近商家<Icon type="caret-down" /></li>
                            <li>智能排序<Icon type="caret-down" /></li>
                            <li>筛选<Icon type="caret-down" /></li>
                        </ul>
                    </div>
                <section onScroll={(e) => this.onScroll(e)}>
                    
                    <div className="food-nav" ref="nav">
                        <img src="/3.jpg" alt="" />
                    </div>
                    <div className="home-banner">
                        <div className="swiper-container" ref="swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    {
                                        arr.map(v =>
                                            <dl key={v}>
                                                <dt><img src="/2.jpg" alt="" /></dt>
                                                <dd>火锅</dd>
                                            </dl>
                                        )
                                    }
                                </div>
                                <div className="swiper-slide">
                                    {
                                        arr.map(v =>
                                            <dl key={v}>
                                                <dt><img src="/2.jpg" alt="" /></dt>
                                                <dd>火锅</dd>
                                            </dl>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div className="uls" ref="uls">
                        <ul className="ul">
                            <li>全部栏目<Icon type="caret-down" /></li>
                            <li>附近商家<Icon type="caret-down" /></li>
                            <li>智能排序<Icon type="caret-down" /></li>
                            <li>筛选<Icon type="caret-down" /></li>
                        </ul>
                    </div>

                    <div className="main">
                        <LazyLoad>
                            <List />
                        </LazyLoad>
                    </div>
                </section>
            </div>
        )
    }
    componentDidMount() {
        new Swiper(this.refs.swiper, {
            loop: true,     //循环
            pagination: {
                el: '.swiper-pagination',
                clickable: true,    // 允许点击跳转
            }
        });

    }
}
