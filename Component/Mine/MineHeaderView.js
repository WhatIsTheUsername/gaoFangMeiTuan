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
    Platform
} from 'react-native';


var Dimensions = require("Dimensions");
var {ScreenW} = Dimensions.get("window");

var MineHeaderView = React.createClass({
    render(){
        return(
            <View styles={styles.container}>
                {/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                {this.renderBottomView()}
            </View>
        );
    },

    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri:"see"}} style={styles.leftIconStyle}/>
                <View style={styles.centerViewStyle}>
                    <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>吃货在此</Text>
                    <Image source={{uri:"avatar_vip"}} style={{width:17, height:17}}/>
                </View>
                {/*右边的箭头*/}
                <Image source={{uri:"icon_cell_rightArrow"}} style={{width:8, height:13, marginRight:8}}/>
            </View>
        );
    },

    renderBottomView(){
        <View style={styles.bottomViewStyle}>
            {this.renderBottomItem()}
        </View>
    },

    renderBottomItem(){
        var itemArr = [];
        var data = [{"number":"100", "title":"优惠券"},{"number":12, "title":"评价"},{"number":"50","title":"收藏"}];
        for(var i=0; i<data.length; i++){
            var item = data[i];
            itemArr.push(
                <TouchableOpacity key={i}>
                      <View style={styles.bottomInnerViewStyle}>
                            <Text style={{color:"white"}}>{item.number}</Text>
                            <Text style={{color:"white"}}>{item.title}</Text>
                      </View>  
                </TouchableOpacity>
            )
        }
        return itemArr;
    }

});





const styles = StyleSheet.create({
    container: {
        height:Platform.OS === "ios"? 400 : 200,
        backgroundColor:"rgba(255,96,0,1.0)",
    },
    centerViewStyle:{
        flexDirection:"row",
        width:ScreenW * 0.72
    },
    topViewStyle:{
        flexDirection:"row",
        marginTop:Platform.OS === "ios" ? 280: 80,
        //设置侧轴的对齐方式
        alignItems:"center",
        //设置主轴的对齐方式
        justifyContent:"space-around"
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:"rgba(0,0,0,0.2)",
    },
    bottomViewStyle:{
        flexDirection:"row",
        position:"absolute",
        bottom:0
    },
    bottomInnerViewStyle:{
        width: ScreenW/3.0+1,
        height:40,
        backgroundColor:"rgba(255,255,255,0.4)",
        alignItems:"center",
        justifyContent:"center",
        borderRightWidth:1,
        borderRightColor:"white"
    }
   
});


module.exports = MineHeaderView;





