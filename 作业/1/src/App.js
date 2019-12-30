import React from 'react';
import 'antd/dist/antd.css';
// import 'antd-mobile/dist/antd-mobile.css';
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import "./rem"
import "./reset.css"
import "./style.less"
import { Row, Col } from 'antd';


import { Icon, Input } from 'antd';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <p><img src="/logo.jpg" alt="" /></p>
          <p>北京<Icon type="down" /></p>
          <div>
            <Input
              placeholder="日本"
              prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </div>
          <p>我的</p>
          <p>导航<Icon type="down" /></p>
        </header>
        <section>
          <div className="app-banner">
            <div className="swiper-container" ref="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/2.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/2.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/2.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/2.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="app-nav">

            <table className="list-style-4" cellPadding="2px">
              <tbody>
                <tr>
                  <td className="hasImg" rowSpan="2">
                    <span className="word">旅游</span>
                    <img className="category-img" src="https://s.tuniu.net/qn/images/bdddb11795c5b72833bf0d3e7930efb3.gif" alt="" />
                  </td>
                  <td className="hasImg">
                    <span className="word">跟团游</span>

                    <img className="category-img" src="https://s.tuniu.net/qn/images/8fc06848a7ecf5dec60ffa10417680a3.png" alt="" />

                  </td>
                  <td className="hasImg">
                    <span className="word">邮轮游</span>
                    <img className="category-img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/80/BA/Cii-slqeQ3CINPODAAALHCKpEdwAAD7lQN2ixwAAAs0167.png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="hasImg">
                    <span className="word">自由行</span>
                    <img className="category-img" src="https://s.tuniu.net/qn/images/a47fdafc7e6746d23558144192950d5e.png" alt="" />
                  </td>
                  <td className="hasImg">
                    <span className="word">酒+景</span>
                    <img className="category-img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/80/BA/Cii-s1qeQ3-IN2bqAAAH_3gUMw0AAD7lQP_930AAAiD076.png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="hasImg">
                    <span className="word">出境游</span>
                    <img className="category-img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/64/AF/Cii-tFqCiKuILHmAAAAMTgxasnEAADdewC_5vMAAAxm055.png" alt="" />
                  </td>
                  <td className="hasImg">
                    <span className="word">境内游</span>
                    <img className="category-img" src="https://m2.tuniucdn.com/fb2/t1/G5/M00/EB/DC/Cii-tFwcdyeIBe_1AAAJ-Pj2TpsAAR9fQP_9a4AAApS112.png" alt="" />
                  </td>
                  <td className="hasImg">
                    <span className="word">周边游</span>
                    <img className="category-img" src="https://m1.tuniucdn.com/fb2/t1/G5/M00/80/BA/Cii-slqeQ5iIXLTiAAAIxtq8rHcAAD7kwP_9xQAAAjs526.png" alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="list-style-2">
              <tbody><tr>
                <td className="hasImg" rowSpan="2">
                  <span className="word">机票</span>
                  <img className="category-img" src="https://m4.tuniucdn.com/fb2/t1/G5/M00/80/BA/Cii-s1qeQ6qIAUtYAABuPtaWEvQAAD7lgJPKqEAAG5W698.gif" alt="" />
                </td>
                <td className="hasImg">
                  <span className="word">国际机票</span>
                  <img className="category-img" src="https://m4.tuniucdn.com/fb2/t1/G5/M00/80/B8/Cii-slqeQ7CIbg4kAAAH-tE6sk4AAD7jgP_9-0AAAgT891.png" alt="" />
                </td>
                <td className="hasImg">
                  <span className="word">火车票</span>
                  <img className="category-img" src="https://m3.tuniucdn.com/fb2/t1/G5/M00/80/BA/Cii-s1qeQ7aIfJ0lAAAIyUWL2lYAAD7lgOR1WoAAAjh337.png" alt="" />
                </td>
              </tr>
                <tr>
                  <td className="hasImg">
                    <span className="word">汽车票</span>
                    <img className="category-img" src="https://m2.tuniucdn.com/fb2/t1/G5/M00/80/BA/Cii-tFqeQ7uINwhfAAAKLx3xTC4AAD7lgP6Hy8AAApH789.png" alt="" />
                  </td>
                  <td className="hasImg">
                    <span className="word">租车·接送</span>
                    <img className="category-img" src="https://m2.tuniucdn.com/fb2/t1/G5/M00/80/BA/Cii-s1qeQ8GIAx84AAAI4ThGcmIAAD7lgP_8ysAAAj5611.png" alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="list-style-3">
              <tbody><tr>
                <td className="hasImg">
                  <span className="word">酒店</span>
                  <img className="category-img" src="https://m1.tuniucdn.com/fb2/t1/G5/M00/80/BB/Cii-s1qeQ9yIfsxPAAAqCTYW79AAAD7lwGWeBgAACoh719.gif" alt="" />
                </td>
                <td className="hasImg">
                  <span className="word">国际酒店</span>
                  <img className="category-img" src="https://m3.tuniucdn.com/fb2/t1/G5/M00/80/BB/Cii-slqeQ-GIeB-CAAAHzk1QU24AAD7lwGoYzwAAAfm222.png" alt="" />
                </td>
                <td className="hasImg">
                  <span className="word">当地玩乐</span>
                  <img className="category-img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/80/BB/Cii-tFqeQ-aIWJOCAAAIN_pgTpgAAD7lwHre4oAAAhP167.png" alt="" />
                </td>
              </tr>
                <tr>
                </tr>
              </tbody>
            </table>
            <table className="list-style-3">
              <tbody><tr>
                <td className="hasImg">
                  <span className="word">签证</span>
                  <img className="category-img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/80/85/Cii-slqeQ_CIcPfjAAAFVxUm9n8AAD7HQP_-oUAAAV7959.png" alt="" />
                </td>
                <td className="hasImg">
                  <span className="word">门票</span>
                  <img className="category-img" src="https://m1.tuniucdn.com/fb2/t1/G5/M00/7A/7E/Cii-s1qeQ_SISpr9AAADyXOXPpAAADyVQP__B8AAAPh422.png" alt="" />
                </td>
                <td className="hasImg">
                  <span className="word">定制游</span>
                  <img className="category-img" src="https://m3.tuniucdn.com/fb2/t1/G5/M00/80/BB/Cii-s1qeQ_mILC1RAAAHdtXR_vQAAD7lwMTla8AAAeO030.png" alt="" />
                </td>
              </tr>
                <tr>
                  <td className="hasImg">
                    <span className="word">目的地攻略</span>
                    <img className="category-img" src="https://m3.tuniucdn.com/fb2/t1/G5/M00/80/BB/Cii-slqeQ_-IFzVpAAAMD3riqi4AAD7lwNsmbAAAAwn912.png" alt="" />
                  </td>
                  <td className="hasImg">
                    <span className="word">目的地参团</span>
                    <img className="category-img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/80/BD/Cii-slqeRSeIcFJaAAAJ81NoPQ0AAD7mwFXIqcAAAoL968.png" alt="" />
                  </td>
                  <td className="hasImg">
                    <span className="word">途牛金服</span>
                    <img className="category-img" src="https://m1.tuniucdn.com/fb2/t1/G5/M00/1C/7E/Cii-s1ufF5WIBTGMAAALYDvn6kMAAN0EAP_88kAAAw3127.png" alt="" />
                  </td>
                </tr>
              </tbody></table>
          </div>
          <div className="navs">
            <ul>

              <li>
                <img className="navi-thumb" src="https://m.tuniucdn.com/fb2/t1/G2/M00/94/A9/Cii-T1hmH2yIURNDAAAJyfc0kUYAAGMPAP_79EAAAnh702.png" alt="" />
                <h3><span>全球WiFi</span></h3>
              </li>

              <li>
                <img className="navi-thumb" src="https://m3.tuniucdn.com/fb2/t1/G5/M00/BA/32/Cii-slrQDBuIDwW6AAAHDbmII-4AAFiJQJLm-kAAAcl406.png" alt="" />
                <h3><span>一日游</span></h3>
              </li>

              <li>
                <img className="navi-thumb" src="https://m.tuniucdn.com/fb2/t1/G3/M00/32/38/Cii_Llli3baIed2wAAACgMRu23IAADA0wP__WgAAAKY669.png" alt="" />
                <h3><span>婚纱旅拍</span></h3>
              </li>

              <li>
                <img className="navi-thumb" src="https://m3.tuniucdn.com/fb2/t1/G4/M00/2B/43/Cii_J1myMKOIa59DAAAEk3iRAL8AAA1twP_-1UAAASr274.png" alt="" />
                <h3><span>主题游</span></h3>
              </li>

              <li>
                <img className="navi-thumb" src="https://m.tuniucdn.com/fb2/t1/G1/M00/56/A5/Cii-U1iFo6eIaZs0AAAGZNY4WVMAAHINQP_-V8AAAah882.png" alt="" />
                <h3><span>目的地大全</span></h3>
              </li>

              <li>
                <img className="navi-thumb" src="https://m.tuniucdn.com/fb2/t1/G1/M00/84/64/Cii-U1ir_DyIWjOQAAAMzJwlIzUAAHmAQP_8xsAAAzl573.png" alt="" />
                <h3><span>蜜月游</span></h3>
              </li>

              <li>
                <img className="navi-thumb" src="https://m.tuniucdn.com/fb2/t1/G1/M00/56/7D/Cii9EViFfe2IVXYOAAAJ0Vcji84AAHIGQP_9XMAAAqN711.png" alt="" />
                <h3><span>海岛游</span></h3>
              </li>

              <li>
                <img className="navi-thumb" src="https://m4.tuniucdn.com/fb2/t1/G5/M00/B5/4B/Cii-tFrMg4CINw_XAAAFOVqbjXkAAFafgP_-qYAAAVa328.png" alt="" />
                <h3><span>当季热玩</span></h3>
              </li>

              <li>
                <img className="navi-thumb" src="https://m.tuniucdn.com/fb2/t1/G2/M00/F3/1C/Cii-T1iULIKIW6kBAAAFJJmHzD4AAG8NwP_-sIAAAU-443.png" alt="" />
                <h3><span>旅游百货</span></h3>
              </li>

              <li>
                <img className="navi-thumb" src="https://m.tuniucdn.com/fb2/t1/G2/M00/97/DA/Cii-TFhvBHiIWtIQAAAD8MUG7VcAAGNiAP_-_QAAAQM018.png" alt="" />
                <h3><span>更多</span></h3>
              </li>

            </ul>
          </div>
          <div className="app-addr">
            <ul>
              <li className="addr">
                <dl>
                  <dt>
                    <img src="https://m.tuniucdn.com/fb2/t1/G5/M00/33/50/Cii-tFw8HReIRyhTADGQZQFB3g4AATCUwKif4YAMZB9739_w350_h0_c0_t0.jpg" alt="" />
                  </dt>
                  <dd>
                    <h1><span>马尔代夫第六感拉姆岛Six Senses Laamu4晚5或6日自由行</span></h1>
                    <h2>￥<span className="price">23017</span>起</h2>
                    <h3>
                      <span ref="days"></span>:
                          <span ref="hours"></span>:
                          <span ref="minutes"></span>:
                          <span ref="seconds"></span>
                    </h3>
                  </dd>
                </dl>
              </li>
              <li className="addr-items">
                <img src="https://m.tuniucdn.com/fb2/t1/G2/M00/89/23/Cii-T1j5u7CIB2HrAAAY_uEh8pQAAJV_wPqjUUAABkW781_w350_h0_c0_t0.png" alt="" />
              </li>
              <li className="addr-items">
                <img src="https://m.tuniucdn.com/fb2/t1/G1/M00/58/31/Cii9EFiGve6IanopAAA95BPXwDsAAHJBwJ7NbcAAD3819_w350_h0_c0_t0.jpeg" alt="" />
              </li>
            </ul>
          </div>
          <div className="addr-tui">
            <div className="addr-title">
              <s>--</s> <span>目的地推荐</span> <s>--</s>
            </div>
            <ul className="addr-nav">
              <li className="on">热门目的地</li>
              <li>海岛精选</li>
              <li>当季精选</li>
            </ul>
            <div className="addr-main">
              <div className="main-uls">
                <Row gutter={8}>
                  <Col span={8}>
                    <dl>
                      <dt><img src="//m.tuniucdn.com/fb2/t1/G5/M00/73/C7/Cii-s113AbGIN3vbAAIVQHB8A9QAAaTwQB7NpsAAhVY173_w350_h0_c0_t0.jpg" alt="" /></dt>
                      <dd>
                        <h1>日本</h1>
                        <h1>154万人出游</h1>
                      </dd>
                    </dl>
                  </Col>
                  <Col span={8}>
                    <dl>
                      <dt><img src="//m.tuniucdn.com/fb2/t1/G5/M00/73/C7/Cii-s113AbGIN3vbAAIVQHB8A9QAAaTwQB7NpsAAhVY173_w350_h0_c0_t0.jpg" alt="" /></dt>
                      <dd>
                        <h1>日本</h1>
                        <h1>154万人出游</h1>
                      </dd>
                    </dl>
                  </Col><Col span={8}>
                    <dl>
                      <dt><img src="//m.tuniucdn.com/fb2/t1/G5/M00/73/C7/Cii-s113AbGIN3vbAAIVQHB8A9QAAaTwQB7NpsAAhVY173_w350_h0_c0_t0.jpg" alt="" /></dt>
                      <dd>
                        <h1>日本</h1>
                        <h1>154万人出游</h1>
                      </dd>
                    </dl>
                  </Col>
                </Row>

              </div>
              <div className="main-tag">
                <Row gutter={8}>
                  <Col span={8}> <span>新加坡</span> </Col>
                  <Col span={8}> <span>新加坡</span> </Col>
                  <Col span={8}> <span>新加坡</span> </Col>
                  <Col span={8}> <span>新加坡</span> </Col>
                  <Col span={8}> <span>新加坡</span> </Col>
                  <Col span={8}> <span>新加坡</span> </Col>

                </Row>
              </div>
              <div className="recommend-button">
                <div className="img-button">
                  <img src="https://m2.tuniucdn.com/fb2/t1/G4/M00/6E/B0/Cii-VVnMcCKIV70iAAAt8upzLuMAABrzwP_Y08AAC4K132_w640_h0_c0_t0.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="parent">
            <div className="title">
              <s>--</s> <span>热门推荐 放心之选</span> <s>--</s>
            </div>
            <div className="parent-nav">
              <ul>
                <li>
                  <img src="https://m1.tuniucdn.com/fb2/t1/G4/M00/91/EF/Cii_J1ne5feIWfxyAABbeRTPaQ4AACFywC3QukAAFuR40_w350_h0_c0_t0.jpeg" alt="" />
                </li>
                <li>
                  <img src="https://m3.tuniucdn.com/fb2/t1/G4/M00/9F/7B/Cii-VVnmtkKIWJ8aAABSILrFxRoAACTKwP_Dk4AAFI415_w350_h0_c0_t0.jpeg" alt="" />
                </li>
                <li>
                  <img src="https://m2.tuniucdn.com/fb2/t1/G4/M00/91/EF/Cii_J1ne5hCIU4d-AACCnoKjkPIAACFywKROMAAAIK257_w350_h0_c0_t0.jpeg" alt="" />
                </li>
                <li>
                  <img src="https://m4.tuniucdn.com/fb2/t1/G4/M00/91/EF/Cii_J1ne5huIZVHyAABp3149opIAACFywNJh_8AAGn335_w350_h0_c0_t0.jpeg" alt="" />
                </li>
              </ul>
              <ul style={{borderTop:"1px solid #ccc"}}>
                <li>
                  <img src="https://m.tuniucdn.com/fb2/t1/G1/M00/4F/90/Cii9EFiAXxuITUI0AABebj89YwEAAHEUQPJSZoAAF6G83_w350_h0_c0_t0.jpeg" alt="" />
                </li>
                <li>
                  <img src="https://m.tuniucdn.com/fb2/t1/G1/M00/54/8A/Cii9EFiEJKmIelBIAADv9wFO8YsAAHHFgAPU8sAAPAP80_w350_h0_c0_t0.jpeg" alt="" />
                </li>
                <li>
                  <img src="https://m3.tuniucdn.com/fb2/t1/G5/M00/1D/AD/Cii-slsPk-aIQaCPAACZcZOp4DwAAHq1QMzedsAAJmJ427_w350_h0_c0_t0.png" alt="" />
                </li>
                <li>
                  <img src="https://m4.tuniucdn.com/fb2/t1/G4/M00/12/EA/Cii-VVmfsfSIG2kkAABcaNVHAn0AAAZuQLbuS8AAFyA31_w350_h0_c0_t0.jpeg" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="a-find">
              <div className="top">
                <p style={{fontSize:".3rem",fontWeight:"600"}}>发现精彩</p>
                <div>
                      <img  src="https://m.tuniucdn.com/fb2/t1/G4/M00/C2/D0/Cii-VVn9VguIH-BSAABImExVDWgAAC5zwFKT08AAEiw195_w60_h60_c1_t0.png" alt=""/>
                      旅行段视频，直播预告！
                </div>
                <p>
                  <img src="https://m.tuniucdn.com/fb2/t1/G2/M00/2B/AF/Cii-Tli45JeILbCXAAAHD29mPyMAAH2CAP_-NYAAAcq977.png" alt=""/>
                </p>
              </div>
              <div className="clearfix">
                <Row gutter={8}>
                  <Col className="gutter-row" span={6}>
                  <img src="https://m3.tuniucdn.com/fb2/t1/G5/M00/D0/8A/Cii-s1rdUO-IfyYGAALHgIRynxUAAF8ywAzkycAAseY583_w350_h0_c0_t0.png" alt=""/>

                  </Col>
                  <Col className="gutter-row" span={6}>
                  <img src="https://m2.tuniucdn.com/fb2/t1/G5/M00/7B/55/Cii-tFqYxcCIIV5fAALk5Bk2cLIAADzWQN86moAAuT8666_w350_h0_c0_t0.png" alt=""/>

                  </Col>
                  <Col className="gutter-row" span={6}>
                  <img src="https://m3.tuniucdn.com/fb2/t1/G5/M00/7B/55/Cii-s1qYxceIYF1oAAOy9llWcBcAADzWQP0uPEAA7MO651_w350_h0_c0_t0.png" alt=""/>

                  </Col>
                  <Col className="gutter-row" span={6}>
                  <img src="https://m4.tuniucdn.com/fb2/t1/G5/M00/7B/55/Cii-tFqYxc6IT9AZAAKhUslJ2XwAADzWgBlER0AAqFq541_w350_h0_c0_t0.png" alt=""/>
                  </Col>
                </Row>
            </div>
          </div> 
        
          <div id="wus">
            <div className="h1">
              <img src="/5.png" alt=""/>
            </div>
            <div className="cen">
                <h1>为您推荐的当地门市</h1>
                <h2>双井合生汇店</h2>
            </div>
            <div className="p"><Icon type="right" /></div>
          </div>    

          <div className="you-nav">
            <ul>
              <li className="on">为您推荐</li>
              <li>出境游</li>
              <li>境内游</li>
              <li>周边游</li>
            </ul>
            <div className="you-class">
                <Row gutter={8}>
                  <Col className="gutter-row" span={6}>
                    <span className="on">全部</span>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <span>全部</span>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <span>全部</span>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <span>全部</span>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <span>全部</span>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <span>全部</span>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <span>全部</span>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <span>全部</span>
                  </Col>
                </Row>
            </div>
          </div>

        <div className="list">
            <dl>
                <dt>
                  <img src="https://m.tuniucdn.com/fb2/t1/G2/M00/80/9C/Cii-T1fo1mOIJt7IADD_CmMUvbMAACxswCA9a0AMP8i668_w800_h0_c0_t0.jpg" alt=""/>
                  <div className="dt-bot">
                      10.6万人出游 96%满意
                  </div> 
                  <p>
                    ￥2113起
                  </p>
                  <span>
                    自由行 | 北京出发
                  </span>
                </dt>
                <dd>
                    <h1>[春节]海南三亚国光豪生双飞3-8日自由行</h1>
                    <h2>10W人选择，三亚湾国际五星临海酒店，享4500平泳池、室内外儿童乐园，3分钟直达沙滩，99元限量抢网红旅拍</h2>
                    <h3>
                      <span className="label" style={{borderColor:"#cccccc",color:"#999999"}}> 三亚湾临海五星…</span>
                      <span className="label" style={{borderColor:"#cccccc",color:"#999999"}}> 三亚湾临海五星…</span>
                      <span className="label" style={{borderColor:"#cccccc",color:"#999999"}}> 三亚湾临海五星…</span>
                    </h3>
                </dd>
            </dl>
            <h6>
              <img src="https://m.tuniucdn.com/fb2/t1/G2/M00/3B/EA/Cii-T1hDqLqIZk_YAAtftbuSavMAAFHNwIxrigAC1_N601_w60_h60_c1_t0.jpg" alt=""/>
              <p>行程比较愉快，景点景色都特别漂亮，热带雨林负氧离子爆棚，玻璃栈道观景平台确实不错，亚龙湾沙滩景色特别漂亮，蜈支洲海水真的很蓝，出海坐的船有点颠簸，但是下来却特别有感觉，晚上去了送的摩天轮，海昌夜景很美，天涯海角景色很美，导游讲解人文景观也很</p>
            </h6>
            <dl>
                <dt>
                  <img src="https://m.tuniucdn.com/fb2/t1/G2/M00/80/9C/Cii-T1fo1mOIJt7IADD_CmMUvbMAACxswCA9a0AMP8i668_w800_h0_c0_t0.jpg" alt=""/>
                  <div className="dt-bot">
                      10.6万人出游 96%满意
                  </div> 
                  <p>
                    ￥2113起
                  </p>
                  <span>
                    自由行 | 北京出发
                  </span>
                </dt>
                <dd>
                    <h1>[春节]海南三亚国光豪生双飞3-8日自由行</h1>
                    <h2>10W人选择，三亚湾国际五星临海酒店，享4500平泳池、室内外儿童乐园，3分钟直达沙滩，99元限量抢网红旅拍</h2>
                    <h3>
                      <span className="label" style={{borderColor:"#cccccc",color:"#999999"}}> 三亚湾临海五星…</span>
                      <span className="label" style={{borderColor:"#cccccc",color:"#999999"}}> 三亚湾临海五星…</span>
                      <span className="label" style={{borderColor:"#cccccc",color:"#999999"}}> 三亚湾临海五星…</span>
                    </h3>
                </dd>
            </dl>
            <h6>
              <img src="https://m.tuniucdn.com/fb2/t1/G2/M00/3B/EA/Cii-T1hDqLqIZk_YAAtftbuSavMAAFHNwIxrigAC1_N601_w60_h60_c1_t0.jpg" alt=""/>
              <p>行程比较愉快，景点景色都特别漂亮，热带雨林负氧离子爆棚，玻璃栈道观景平台确实不错，亚龙湾沙滩景色特别漂亮，蜈支洲海水真的很蓝，出海坐的船有点颠簸，但是下来却特别有感觉，晚上去了送的摩天轮，海昌夜景很美，天涯海角景色很美，导游讲解人文景观也很</p>
            </h6>
        </div>
        </section>
      </div>
    )
  }
  Time = () => {
    //结束时间
    var endDate = new Date("2020/01/01 00:00:00");
    //当前时间
    var nowDate = new Date();
    //相差的总秒数
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出到页面
    console.log(days, hours, minutes, seconds)
    this.refs.days.innerHTML = addZeor(days);
    this.refs.hours.innerHTML = addZeor(hours);
    this.refs.minutes.innerHTML = addZeor(minutes);
    this.refs.seconds.innerHTML = addZeor(seconds);

    function addZeor(num) {
      return num > 9 ? num : "0" + num;
    }

  }
  componentDidMount() {

    new Swiper(this.refs.swiper, {
      loop: true, centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
    setInterval(this.Time, 1000);
  }
}



export default App;
