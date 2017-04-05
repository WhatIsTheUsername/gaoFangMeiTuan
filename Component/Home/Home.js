/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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

//导入外部组件类
var HomeDetail = require('./HomeDetail');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var TopView = require('./TopView');
var MiddleView = require('./HomeMiddleView');
var MiddleBottomView = require('./HomeMiddleBottomView');
var ShopCenter = require('./HomeShopCenter');
var ShopCenterDetail = require('./HomeShopCenterDetail');
var GeustYouLike = require('./HomeGeustYouLike');

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页的导航条*/}
                {this.renderNavigationBar()}
                {/*首页的主要内容*/}
                <ScrollView>
                    {/*上部*/}
                    <TopView/>
                    {/*中部*/}
                    <MiddleView/>
                    {/*中下部*/}
                    <MiddleBottomView popTopHome={(data)=>this.pushToDetail(data)}/>

                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView={(url)=>{
                            this.pushToShopCenterDetail(url)
                        }}
                    />
                    {/*猜你喜欢*/}
                    <GeustYouLike/>

                </ScrollView>
            </View>
        );
    },

    //首页导航条
    renderNavigationBar(){
        return (
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>{alert('点击了')}}>
                    <Text style={{color:'white'}}>深圳</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder='输入商家 品类 商圈'
                    style={styles.topInputStyle}
                />
                {/*右边*/}
                <View style={styles.rightNavViewStyle}>
                    <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                </View>

            </View>
        )
    },

    //跳转到二级界面
    pushToDetail(data){
        alert(data);
        this.props.navigator.push({
            component: HomeDetail,
            title: '详情页'
        });
    },

    //跳转到购物中心的详情页
    pushToShopCenterDetail(url){

        this.props.navigator.push(
            {
                component: ShopCenterDetail,//要跳转的板块
                passProps:{'url':this.dealWithUrl(url)}
            }
        )
    },

    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=','')
    }


});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    topInputStyle: {
        height:28,
        width:width*0.7,
        backgroundColor:'white',
        marginTop:8,
        borderRadius:13,
        paddingLeft:8,
        justifyContent:'center'
    },
    navRightImgStyle: {
        width:28,
        height:28,

    },
    navBarStyle:{
        height: Platform.OS === 'ios' ? 64: 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:Platform.OS === 'ios' ? 20: 0,
        justifyContent:'space-around'
    },
    rightNavViewStyle:{
        flexDirection:'row'
    }

});


module.exports = Home;

