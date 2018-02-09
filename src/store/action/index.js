// loading状态
const SEND_LOADING_STATUS = 'SEND_LOADING_STATUS';

// 弹窗状态
const SEND_ALERT_STATUS = 'SEND_ALERT_STATUS';
// 关闭、打开弹窗
function alertOperateFn(text,cb){
    return (dispatch, getState)=>{
        let {alertData:{alertStatus},callbackData:{callback}}=getState()
        dispatch({type: SEND_ALERT_STATUS,data:{alertStatus:!alertStatus, alertText:text}}) // 关闭弹窗
        if(cb){
            callback() // 回调
        }
    }
}
// 如果点击确定，要执行回调，先执行callback
const SEND_CALLBACK_STATUS = 'SEND_CALLBACK_STATUS';
function alertCallbackFn(func){
    return (dispatch, getState)=>{
        func() // 回调
    }
}

// 获取登录信息
const SEND_LOGIN_STATUS = 'SEND_LOGIN_STATUS';
function loginFn(){
    return (dispatch, getState)=>{
        // 发送登录请求
        dispatch({type: SEND_LOADING_STATUS,data:{loading:true}})
        window.$http({
            method: 'POST',
            url: `${window.$url}/api/v1/store/login`,
            data: {mobile: '13333333333', verifyCode: '5678'}
        }).then((res) => {
            dispatch({type: SEND_LOADING_STATUS,data:{loading:false}})
            let d = res.data
            console.log('登录返回信息', d)
            if(d.code===0){
                dispatch({type: SEND_LOGIN_STATUS,data:d.data})
            }else{
                dispatch({type: SEND_LOGIN_STATUS,data:{}})
            }
        }).catch((err) => {
            dispatch({type: SEND_LOADING_STATUS,data:{loading:false}})
            console.log(err)
        })
    }
}

// 会员卡搜索
const SEND_MEMBER_CARD_STATUS = 'SEND_MEMBER_CARD_STATUS';
function memberCardSearchFn(type, keyWords){ // 发送登录请求
    return (dispatch, getState)=>{
        let dataList=[]
        if(type==='whole'){
            dataList=['全部会员卡1','全部会员卡2','全部会员卡3','全部会员卡4','全部会员卡5','全部会员卡6']
        }else if(type==='discount'){
            dataList=['折扣卡1','折扣卡2','折扣卡3']
        }else if(type==='second'){
            dataList=['次卡1','次卡2','次卡3','次卡4']
        }else if(type==='experience'){
            dataList=['体验卡1','体验卡2','体验卡3','体验卡4','体验卡5']
        }else{
            dataList=[]
        }
        dispatch({type: SEND_MEMBER_CARD_STATUS,data:{list:dataList}})
    }
}

export {
    SEND_LOADING_STATUS
    ,SEND_ALERT_STATUS
    ,alertOperateFn
    ,SEND_CALLBACK_STATUS
    ,alertCallbackFn
    ,SEND_LOGIN_STATUS
    ,loginFn
    ,SEND_MEMBER_CARD_STATUS
    ,memberCardSearchFn
};