import React, { Component } from 'react'
import { Icon, Input } from 'antd';
import "./style.less"

export default class Header extends Component {
    render() {
        return (
            <header>
                <p>北京<Icon type="down" style={{ position: "relative", left: "3px", top: "2px" }} /></p>
                <div>
                    <Input
                        placeholder="请输入商家名、品类或者撒大大"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                    />
                </div>
                <p><Icon type="robot" style={{ fontSize: ".42rem" }} /></p>
            </header>
        )
    }
}
