import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { alertOperateFn } from './store/action'; // action

import './App.styl';

import loading from './assets/icon/loading.gif';

import Mine from "./component/Mine/Mine";
import Home from "./component/Home/Home";
import Member from "./component/Member/Member";
import MemberCard from "./component/MemberCard/MemberCard";

class App extends Component {
  constructor(props) {
      super(props)

      this.state={
          navigateShow: true
          ,loadingShow: false
      }
  }

  // 在完成首次渲染之前调用，此时仍可以修改组件的state
  componentWillMount(){
      let path=this.props.history.location.pathname // 当前路由名字
      this.checkPathFn(path)
  }

  // 真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()访问到真实的DOM元素。此时已可以使用其他类库来操作这个DOM
  componentDidMount(){
  }

  // 路由发生变化-触发生命周期函数
  componentWillReceiveProps(){
      let path=this.props.history.location.pathname // 当前路由名字
      this.checkPathFn(path)
  }

  /**
   * 路由变化判断路由是否是'/' || '/mine'
   */
  checkPathFn(p){
      if(p==='/' || p==='/mine'){
          this.setState({
              navigateShow:true
          })
      }else{
          this.setState({
              navigateShow:false
          })
      }
  }

  /**
   * loading组件是否显示
   */
  loadingShowFn(){
      let {loadingData:{loading}} = this.props;
      if(loading)
          return <Loading />
  }

  /**
   * 弹窗组件是否显示
   */
  alertShowFn(){
      let {alertData:{alertStatus,alertText}, dispatch}=this.props
      if(alertStatus)
          return <Alert alertText={alertText} dispatch={dispatch} />
  }

  /**
   * 底部导航组件是否显示
   */
  navigateShowFn(){
      if(this.state.navigateShow)
          return <Navigate />
  }

  render() {
    return (
      <div className="App">
          {
              /*loading组件*/
              this.loadingShowFn()
          }
          {
              /*导航组件*/
              this.navigateShowFn()
          }
          {
              /*弹窗组件*/
              this.alertShowFn()
          }
          {/*路由组件*/}
          <Switch>
              {/*首页*/}
              <Route exact path="/" component={Home} />
              {/*我的*/}
              <Route path="/mine" component={Mine} />

              {/*会员卡管理*/}
              <Route path="/memberCard" component={MemberCard} />
              {/*会员管理*/}
              <Route path="/member" component={Member} />
          </Switch>
      </div>
    );
  }
}

// 导航
class Navigate extends Component {
    render() {
        return (
            <div className="Navigate">
                <div className="nav">
                    <NavLink exact to="/" className="bar">
                        <p>首页</p>
                    </NavLink>
                    <NavLink to="/mine" className="bar">
                        <p>我的</p>
                    </NavLink>
                </div>
            </div>
        )
    }
}

// loading
class Loading extends Component {
    render() {
        return (
            <div className="Loading">
                <section><img src={loading} alt="loading"/></section>
            </div>
        );
    }
}

// alert
class Alert extends Component {
    render() {
        const operateCancelFn=(e) => {
            e.preventDefault()
            this.props.dispatch(alertOperateFn(''))
        }
        const operateConfirmFn=(e) => {
            e.preventDefault()
            this.props.dispatch(alertOperateFn('',true))
        }
        return (
            <div className="Alert">
                <div className="content">
                    <h3>提示</h3>
                    <section>{this.props.alertText}</section>
                    <div className="btn">
                        <p className="cancel" onTouchEnd={operateCancelFn}>取消</p>
                        <p className="confirm" onTouchEnd={operateConfirmFn}>好的</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(({loadingData, alertData})=>{return {loadingData, alertData}})(App);