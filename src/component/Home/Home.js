import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Home.styl'

// icon
import card from '../../assets/icon/icon_merchant_card@2x.png'
import vip from '../../assets/icon/icon_merchant_vip@2x.png'
import count from '../../assets/icon/icon_merchant_count@2x.png'
import goods from '../../assets/icon/icon_merchant_goods@2x.png'
import mms from '../../assets/icon/icon_merchant_mms@2x.png'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="top">
                    <p>今日营业额</p>
                    <h3>￥125.50</h3>
                    <section className="btn">
                        <button>收银</button>
                    </section>
                </div>
                <div className="suDoKu">
                    <div className="row">
                        <Link to="/memberCard">
                            <img src={card} alt=""/>
                            <p>会员卡管理</p>
                        </Link>
                        <Link to={{pathname:'/member',search: 'name',params:{name:'Tom'}}}>
                            <img src={vip} alt=""/>
                            <p>会员管理</p>
                        </Link>
                        <a>
                            <img src={count} alt=""/>
                            <p>统计分析</p>
                        </a>
                    </div>
                    <div className="row">
                        <a>
                            <img src={goods} alt=""/>
                            <p>商品管理</p>
                        </a>
                        <a>
                            <img src={mms} alt=""/>
                            <p>发送消息</p>
                        </a>
                        <a>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;