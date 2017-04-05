/**
 * Created by barry on 2017/3/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var MiddleCommonView = require("./HomeMiddleCommonView");
var Dimensions = require("Dimensions");
var {width} = Dimensions.get("window");

//导入外部Json数据
var Home_D4 = require("../../LocalData/XMG_Home_D4.json");

var HomeMiddleBottomView = React.createClass({
    getDefaultProps(){
        return{
            //回调函数
            TapFunc:null
        }
    },

    render(){
        return(
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>

                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },

    //下部分的所有子组件
    renderBottomItem(){
        //组件数组
        var itemsArr = [];
        //拿到对应的数据
        var dataArr = Home_D4.data;
        for(var i=0; i<dataArr.length; i++){
            //取出单独的数据
            var itemData = dataArr[i];
            //创建组件
            itemsArr.push(
              <MiddleCommonView
                key={i}
                title={itemData.maintitle}
                subTitle={itemData.deputytitle}
                rightImage={this.dealWithImgUrl(itemData.imageurl)}
                titleColor={itemData.typeface_color}
                detailUrl={itemData.tplurl}
                callBackClickCell={(data)=>this.props.TapFunc(data)}
              />
            );
        }

        //返回组件数组
        return itemsArr;
    },

    //继续往父级界面传递数据
    // popToTopView(data){
    //     //继续执行回调函数
    //     this.props.tapFunc(data)
    // },

    dealWithImgUrl(url){
        if(url.search("w.h") == -1){
            return url;
        }else {
            return url.replace("w.h", "120.90");
        }
    }


});

const styles = StyleSheet.create({
    container: {
        marginTop:15
    },
    bottomViewStyle: {
        flexDirection:"row",
        flexWrap:"wrap",
        width:width
    }
});

module.exports = HomeMiddleBottomView;
