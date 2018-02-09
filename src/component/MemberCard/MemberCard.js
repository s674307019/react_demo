import React, {Component} from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './MemberCard.styl';
import Whole from './Whole/Whole';
import Discount from './Discount/Discount';
import Second from './Second/Second';
import Experience from './Experience/Experience';

import {memberCardSearchFn} from "../../store/action"; // action

class MemberCard extends Component {
    constructor(){
        super()

        this.state={
            keyWords:'' // 搜索内容
        }
    }

    // 在完成首次渲染之前调用，此时仍可以修改组件的state
    componentWillMount(){
        // 初始化数据
        this.searchFn()
    }

    // 路由发生变化-触发生命周期函数
    componentWillReceiveProps(){
        let path=this.props.history.location.pathname.split('/')[2] // 当前路由名字
        if(path){
            let {dispatch}=this.props
            dispatch(memberCardSearchFn(path,this.state.keyWords))
        }
    }

    // 搜索文字输入
    searchChange(e){
        this.setState({
            keyWords:e.target.value
        })
    }

    // 搜索
    searchFn(){
        let path=this.props.history.location.pathname.split('/')[2] // 当前路由名字
        console.log('path:',path)
        let {dispatch}=this.props
        dispatch(memberCardSearchFn(path,this.state.keyWords))
    }

    render() {
        return (
            <div className="MemberCard">
                <div className="cardBar">
                    <NavLink replace to="/memberCard/whole">全部</NavLink>
                    <NavLink replace to="/memberCard/discount">折扣卡</NavLink>
                    <NavLink replace to="/memberCard/second">次卡</NavLink>
                    <NavLink replace to="/memberCard/experience">体验卡</NavLink>
                </div>
                <div className="search">
                    <input type="text" maxLength="20" placeholder="输入搜索关键字" onChange={this.searchChange.bind(this)}/>
                    <button onTouchEnd={this.searchFn.bind(this)}>搜索</button>
                </div>
                <Switch>
                    <Route path="/memberCard/whole" component={Whole} />
                    <Route path="/memberCard/discount" component={Discount} />
                    <Route path="/memberCard/second" component={Second} />
                    <Route path="/memberCard/experience" component={Experience} />
                    <Redirect to="/memberCard/whole" />
                </Switch>
            </div>
        )
    }
}

export default connect()(MemberCard);