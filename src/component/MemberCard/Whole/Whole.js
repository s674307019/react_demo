import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SEND_LOADING_STATUS} from '../../../store/action';

import './Whole.styl';

class Whole extends Component {
    constructor() {
        super()

        this.state={
            address: ''
            ,num:10
            ,numStatus:true
        }
    }

    componentWillMount(){
        // console.log('获取路由中的参数query:',this.props.location)
        // console.log('获取路由中的参数query:',this.props.location.query)
        // console.log('获取路由中的参数params:',this.props.location.params)
    }

    componentDidMount(){
        this.getData();
    }

    // 获取数据
    getData(){
        let {dispatch} = this.props
        dispatch({type: SEND_LOADING_STATUS,data:{loading:true}})
        const _this=this
        window.$http({
            methods:'GET',
            url:`${window.$url}/api/v1/baidu/map/address?location=30.572269,104.066541&pois=0`
        }).then((res)=>{
            dispatch({type: SEND_LOADING_STATUS,data:{loading:false}})
            let d=res.data
            if(d){
                console.log('baidu/map:',d)
                let data=JSON.parse(d)
                if(data.status===0){
                    _this.setState({
                        address:data.result.formatted_address
                    })
                }
            }
        }).catch((err)=>{
            dispatch({type: SEND_LOADING_STATUS,data:{loading:false}})
            console.log('Error:',err.toString())
        });
    }

    addFn(){
        this.setState({num: this.state.num+1})
    }
    minusFn(){
        let status=this.state.num-1
        if(status%2===0){
            this.setState({
                num: status
                ,numStatus:true
            })
        }else{
            this.setState({
                num: status
                ,numStatus:false
            })
        }
    }

    render() {
        // let {loadingData:{loading},loginData} = this.props
        // console.log('redux得到的数据:',loading)
        // console.log('redux得到的数据:',loginData)
        let {memberCardData:{list}} = this.props
        // console.log('全部卡:',list)
        return (
            <div className="Whole">
                <div className="card">
                    <p>{list}</p>
                </div>
                <p>{this.state.address}</p>
                <p style={{color:'white',backgroundColor:'green'}}>{this.state.num}</p>
                <p className={`num ${this.state.numStatus?'numStatus':''}`}>{this.state.num}</p>
                <button onClick={this.addFn.bind(this)}>按钮+</button>
                <button onClick={this.minusFn.bind(this)}>按钮-</button>
            </div>
        );
    }
}

export default connect(({loadingData, loginData, memberCardData})=>{return {loadingData, loginData, memberCardData}})(Whole);
