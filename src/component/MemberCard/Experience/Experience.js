import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Experience.styl';

class Experience extends Component {
    render() {
        let {memberCardData:{list}} = this.props
        // console.log('体验卡:',list)
        return (
            <div className="Experience">
                <div className="card">
                    <p>{list}</p>
                </div>
            </div>
        );
    }
}

export default connect(({memberCardData})=>{return {memberCardData}})(Experience);