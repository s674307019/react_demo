import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SEND_ALERT_STATUS, SEND_CALLBACK_STATUS} from '../../store/action';

import './Member.styl';

class Member extends Component {
    constructor(){
        super()
        this.state={
            title:'' // 会员列表title
            ,memberList:[
                {name:'张三',idCode:'20180001'}
            ]
            ,name:''
            ,idCode:''
        }
    }

    componentWillMount(){
        let params=this.props.location.params
        console.log('获取路由中的参数params:',params)
        if(!params){
            this.props.history.goBack()
        }
    }

    // 姓名输入
    nameChange(e){
        this.setState({
            name:e.target.value
        })
    }
    // ID输入
    idChange(e){
        let id=e.target.value.replace(/[^\d]/g,'')
        this.setState({
            idCode:id
        })
    }

    // 提交表单
    submitFn(){
        let {memberList,name,id}=this.state
        let memberJson={name:name,idCode:id}
        let memberArr=[...memberList,memberJson]
        this.setState({
            memberList:memberArr
            ,name:''
            ,idCode:''
        })

        this.refs.formRest.reset()
    }

    // 路由跳转、传参
    skipFn(){
        let {dispatch}=this.props
        // 1.显示弹窗
        dispatch({type:SEND_ALERT_STATUS,data:{ alertStatus:true, alertText:'确定要跳转页面吗？' }})
        // 2.注入回调
        dispatch({type:SEND_CALLBACK_STATUS,data:{ callback:()=>{
                    this.setState({title:'会员列表'})
                } }})

        // this.props.history.push({
        //     pathname:'/memberCard/whole'
        //     // ,query:{id:201800001}
        //     ,params:{id:201800001}
        // })
        // this.props.history.replace('/memberCard')
    }

    render() {
        let {memberList}=this.state,memberHtml=[]
        memberList.forEach((c,i) => {
            memberHtml.push(<MemberList key={i} name={c.name} idCode={c.idCode} />)
        })
        return (
            <div className="Member">
                <div className="members">
                    {memberHtml}
                </div>
                <div className="form">
                    <h3>{this.state.title}</h3>
                    <form ref="formRest">
                        <section>
                            <input type="text" placeholder="姓名" maxLength="10" onChange={this.nameChange.bind(this)} />
                        </section>
                        <section>
                            <input type="tel" placeholder="ID" maxLength="10" value={this.state.idCode} onChange={this.idChange.bind(this)} />
                        </section>
                        <section>
                            <button type="button" onTouchEnd={this.submitFn.bind(this)}>提交</button>
                        </section>
                        <section>
                            <button type="button" onTouchEnd={this.skipFn.bind(this)}>跳转</button>
                        </section>
                    </form>
                </div>
            </div>
        );
    }
}

// 会员列表
class MemberList extends Component{
    render (){
        return (
            <div className="memberList">
                <h3>{this.props.name}</h3>
                <p>{this.props.idCode}</p>
            </div>
        )
    }
}
export default connect()(Member);