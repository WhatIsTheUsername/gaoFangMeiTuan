/**
 * Created by barry on 2017/3/31.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


var Dimensions = require("Dimensions");
var {ScreenW} = Dimensions.get("window");
var MiddleCommonView = require("./HomeMiddleCommonView");

var TopMiddleData = require("../../LocalData/HomeTopMiddleLeft.json");





var HomeMiddleView = React.createClass({

    render(){
        return(
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },

    renderLeftView(){
        var data = TopMiddleData.dataLeft[0];
        return(
            <TouchableOpacity>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:data.img1}} style={styles.leftImageStyle} />
                    <Image source={{uri:data.img2}} style={styles.leftImageStyle} />
                    <Text style={{color:"gray"}} >{data.title}</Text>
                    <View style={{flexDirection:"row", marginTop:5}}>
                        <Text style={{color:"blue", marginRight:5}}>{data.price}</Text>
                        <Text style={{color:"orange", backgroundColor:"yellow"}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },

    renderRightView(){
        //组件数组
        var itemArr = [];
        var rightData = TopMiddleData.dataRight;
        //遍历
        for(var i =0 ; i<rightData.length; i++){
            var data = rightData[i];
            itemArr.push(
                <MiddleCommonView
                    key = {i}
                    title={data.title}
                    subtitle={data.subTitle}
                    rightImage = {data.rightImage}
                    titleColor={data.titleColor}
                />
            );
        }
        return itemArr;

    }


});


const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        marginTop:15
    },

    leftViewStyle:{
        width:ScreenW * 0.5,
        height:119,
        backgroundColor:"white",
        marginRight:0.5,
        alignItems:"center",
        justifyContent:"center"
    },
    leftImageStyle:{
        width:120,
        height:30,
        //图片展示模式
        resizeMode:"contain"
    }

});

module.exports = HomeMiddleView;