import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Discount.styl';

class Discount extends Component {
    render() {
        let {memberCardData:{list}} = this.props
        // console.log('折扣卡:',list)
        return (
            <div className="Discount">
                <div className="card">
                    <p>{list}</p>
                </div>
            </div>
        );
    }
}

export default connect(({memberCardData})=>{return {memberCardData}})(Discount);