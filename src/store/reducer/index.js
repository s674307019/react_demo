import {
    SEND_LOADING_STATUS
    ,SEND_ALERT_STATUS
    ,SEND_CALLBACK_STATUS
    ,SEND_LOGIN_STATUS
    ,SEND_MEMBER_CARD_STATUS
} from '../action';

const loadingStatus = { loading:false };
export function loadingData(loadingData = loadingStatus, action) {
    switch (action.type) {
        case SEND_LOADING_STATUS:
            return Object.assign({},loadingData,action.data);
        default:
            return loadingData;
    }
}

const alertStatus = { alertStatus:false, alertText:'提示内容' };
export function alertData(alertData = alertStatus, action) {
    switch (action.type) {
        case SEND_ALERT_STATUS:
            return Object.assign({},alertData,action.data);
        default:
            return alertData;
    }
}
const callbackStatus = { callback:()=>{console.warn('Please inject the callback function.')} };
export function callbackData(callbackData = callbackStatus, action) {
    switch (action.type) {
        case SEND_CALLBACK_STATUS:
            return Object.assign({},callbackData,action.data);
        default:
            return callbackData;
    }
}

const loginStatus = {};
export function loginData(loginData = loginStatus, action) {
    switch (action.type) {
        case SEND_LOGIN_STATUS:
            return Object.assign({},loginData,action.data);
        default:
            return loginData;
    }
}

const memberCardStatus = {list:[]};
export function memberCardData(memberCardData = memberCardStatus, action) {
    switch (action.type) {
        case SEND_MEMBER_CARD_STATUS:
            return Object.assign({},memberCardData,action.data);
        default:
            return memberCardData;
    }
}