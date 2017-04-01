/**
 * Created by barry on 2017/3/30.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';




//引入外部组件
var HomeDetail = require("./HomeDetail");
var TopView = require("./TopView");
var MiddleView = require("./HomeMiddleView");
var MiddleBottomView = require("./HomeMiddleBottomView");
var ShopCenter = require("./HomeShopCenter");
var ShopCenterDetail = require("./HomeShopCenterDetail");
var GeustYouLike = require("./HomeGeustYouLike");

var Dimensions = require("Dimensions");
var {ScreenW, ScreenH} = Dimensions.get("window");



var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航栏*/}
                {/*{this.renderNavBar()}*/}
                {/*首页的主要内容*/}
               


            </View>
        );
    },



    // 首页的导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                  <Text style={{color:'white'}}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                 <TextInput
                  placeholder="输入商家,品类,商圈"
                  style={styles.topInputStyle}
                />
                {/*右边*/}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    //跳转到二级界面
    pushToDetail(data){
        alert(data);
        this.props.navigator.push({
            component:HomeDetail,
            title:"详情页"
        });
    },

    //跳转到购物中心的详情页
    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                component:ShopCenterDetail, //需要跳转的模块
                passProps:{"url":this.dealWithUrl(url)}
            }
        )
    },

    dealWithUrl(url){
        return url.replace("imeituan://www.meituan.com/web/?url=','")
    }
    

});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    
    topInputStyle:{
        height:28,
        width:ScreenW * 0.7,
        backgroundColor:"white",
        marginTop:8,
        borderRadius:13,
        paddingLeft:8,
        justifyContent:"center"
    },
    navRightImgStyle:{
        width:28,
        height:28
    },
    navBarStyle:{
        height:Platform.OS === "ios" ? 64 : 44,
        backgroundColor:"rgba(255,96,0,1.0)",
        flexDirection:"row",
        alignItems:"center",
        paddingTop:Platform.OS = "ios" ? 20 : 0,
        justifyContent:"space-around"
    },
    rightNavViewStyle:{
        flexDirection:"row"
    }
});



module.exports = Home;
