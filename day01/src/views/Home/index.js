import React, { Component } from 'react'
import "./style.less"
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import List from "../../components/List/index"
import Header from "../../components/Header/index"
import LazyLoad from 'react-lazyload';

export default class Home extends Component {
    state = {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    goTo = () => {
        this.props.history.push("/fooder")
        // this.props.history.replace("/fooder")

    }
    render() {
        let { arr } = this.state;
        return (
            <div className="page-home">
                <Header />
                <section>
                    <div className="home-banner">
                        <div className="swiper-container" ref="swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    {
                                        arr.map(v =>
                                            <dl key={v} onClick={v == 1 ? () => this.goTo() : null}>
                                                <dt><img src="/1.png" alt="" /></dt>
                                                <dd>美食</dd>
                                            </dl>
                                        )
                                    }
                                </div>
                                <div className="swiper-slide">
                                    {
                                        arr.map(v =>
                                            <dl key={v}>
                                                <dt><img src="/1.png" alt="" /></dt>
                                                <dd>美食</dd>
                                            </dl>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>

                    <div className="main">
                        <h1>猜你喜欢</h1>
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
