公共组件：
    1.弹窗（警告）组件：
        App.js--->Alert
        如果点击确定，需要执行回调函数，则先要注入回调函数，例：
        import {SEND_ALERT_STATUS, SEND_CALLBACK_STATUS} from '../../store/action';
        let {dispatch}=this.props
        // 1.显示弹窗
        dispatch({type:SEND_ALERT_STATUS,data:{ alertStatus:true, alertText:'确定要跳转页面吗？' }})
        // 2.注入回调
        dispatch({type:SEND_CALLBACK_STATUS,data:{ callback:()=>{
                    this.setState({title:'会员列表'})
                } }})
    2.loading组件：
        App.js--->Loading，例：
        import {SEND_LOADING_STATUS} from '../../../store/action';
        dispatch({type: SEND_LOADING_STATUS,data:{loading:true}})
    3.获取Redux数据：
        let {loadingData:{loading}} = this.props
        export default connect(({loadingData})=>{return {loadingData}})(App);