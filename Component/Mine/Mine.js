/**
 * Created by barry on 2017/3/30.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var CommonMyCell = require("./CommonMyCell.js");
var MineHeaderView = require("./MineHeaderView.js");
var MineMiddleView = require("./MineMiddleView.js");


var Mine = React.createClass({
    render(){
        return(
            <ScrollView
                style={styles.scrollviewStyle}
                contentInset = {{top:-200}}
                contentOffset = {{y:200}}
            >
                <MineHeaderView/>

                <View style={{marginTop:10}} >
                    <CommonMyCell 
                        leftIconName = "card"
                        leftTitle = "我的订单"
                        rightTitle = "查看全部订单"
                    />
                    <MineMiddleView/>
                </View>

                <View style={{marginTop:10}} >
                    <CommonMyCell 
                        leftIconName = "draft"
                        leftTitle = "钱包"
                        rightTitle = "账户余额 $200"
                    />
                    <CommonMyCell 
                        leftIconName = "like"
                        leftTitle = "抵用券"
                        rightTitle = "10张"
                    />
                </View>

                <View style={{marginTop:10}} >
                    <CommonMyCell 
                        leftIconName = "card"
                        leftTitle = "积分商城"
                    />
                </View>

                <View style={{marginTop:10}} >
                    <CommonMyCell 
                        leftIconName = "new_friend"
                        leftTitle = "今日推荐"
                        rightTitle = "me_new"
                    />
                </View>

                <View style={{marginTop:10}} >
                    <CommonMyCell 
                        leftIconName = "pay"
                        leftTitle = "我要合作"
                        rightTitle = "轻松开店 招财进宝"
                    />
                </View>

               

            </ScrollView>
        )
    }
})



const styles = StyleSheet.create({
    scrollviewStyle:{
        backgroundColor:"#e8e8e8"
    }
});

module.exports = Mine;
