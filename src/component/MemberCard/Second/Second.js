import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Second.styl';

class Second extends Component {
    render() {
        let {memberCardData:{list}} = this.props
        // console.log('次卡:',list)
        return (
            <div className="Second">
                <div className="card">
                    <p>{list}</p>
                </div>
            </div>
        );
    }
}

export default connect(({memberCardData})=>{return {memberCardData}})(Second);