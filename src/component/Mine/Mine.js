import React, {Component} from 'react';
import './Mine.styl';

import header from '../../assets/image/header.jpg'

class Mine extends Component {
    render() {
        return (
            <div className="Mine">
                <div className="header">
                    <img className="bgImg" src={header} alt=""/>
                    <section className="info">
                        <img src={header} alt=""/>
                        <h3>夕阳西下</h3>
                    </section>
                </div>
                <div className="lists">
                    <section className="list">
                        <span>会员卡订单</span>
                    </section>
                    <section className="list">
                        <span>项目订单</span>
                    </section>
                    <section className="list">
                        <span>我的钱包</span>
                    </section>
                    <section className="list">
                        <span>消费清单</span>
                    </section>
                    <section className="list">
                        <span>设置</span>
                    </section>
                </div>
            </div>
        );
    }
}

export default Mine;