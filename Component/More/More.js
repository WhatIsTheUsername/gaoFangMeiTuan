/**
 * Created by barry on 2017/3/30.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

//引入外部组件
var CommonCell = require("./CommonCell");

var Dimensions = require("Dimensions");
var {width} = Dimensions.get("window");

var More = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                
                {/*导航条*/}
                {this.renderNavBar()}
                
                <ScrollView style={{width:width}}>
                    <View style={{marginTop: 20}}>
                        <CommonCell title='扫一扫'/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <CommonCell title='省流量模式' isSwitch={true}/>
                    </View>
                    <View >
                        <CommonCell title='消息提醒'/>
                    </View>
                    <View >
                        <CommonCell title='余额'/>
                    </View>
                    <View >
                        <CommonCell title='抵用券'/>
                    </View>
                    <View >
                        <CommonCell title='会员卡'/>
                    </View>
                    <View >
                        <CommonCell title='清空缓存' rightTitle='1.5M'/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <CommonCell title='好友去哪'/>
                    </View>
                    <View >
                        <CommonCell title='我的评价'/>
                    </View>
                    <View >
                        <CommonCell title='我的收藏'/>
                    </View>
                    <View >
                        <CommonCell title='会员中心'/>
                    </View>
                    <View >
                        <CommonCell title='积分商城'/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <CommonCell title='客服中心'/>
                    </View>
                    <View >
                        <CommonCell title='关于美团'/>
                    </View>
                </ScrollView>
            </View>
        );
    },

    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={styles.textStyle}>更多</Text>
                <TouchableOpacity onPress={()=>{
                    alert("点击了more")
                }} style={styles.rightViewStyle}>
                    <Image soure={{uri:"icon_mine_setting"}} style={styles.navRightImgStyle}/>
                </TouchableOpacity>
            </View>
        );
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    navRightImgStyle:{
        width:28,
        height:28
    },

    navOutViewStyle:{
        height:Platform.OS === "ios" ? 64 : 44,
        backgroundColor:"rgba(255,96,0,1.0)",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:width

    },

    textStyle:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
    },
    rightViewStyle:{
        position:"absolute",
        right:10,
        paddingTop:10
    }
    
});

module.exports = More;