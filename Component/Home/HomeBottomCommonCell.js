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
var {width} = Dimensions.get("window");



var HomeBottomCommonCell = React.createClass({
    getDefaultProps(){
        return{
            leftIcon:"",
            leftTitle:"",
            rightTitle:"",
        }
    },


    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIcon}} style={{width:22, height:22, marginRight:5}}/>
                    <Text style={{fontSize: 17}}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text style={{color:"gray"}}>{this.props.rightTitle}</Text>
                    <Image source={{uri:"icon_cell_rightArrow"}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
                </View>

            </View>
        );
    }



});



const styles = StyleSheet.create({
    container: {
        width:width,
        flexDirection:"row",
        height:44,
        backgroundColor:"white",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth:0.5,
        borderBottomColor:"#e8e8e8"
    },

    leftViewStyle:{
        flexDirection:"row",
        height:44,
        marginLeft:8,
        alignItems:"center"
    },

    rightViewStyle:{
        flexDirection:"row",
        height:44,
        alignItems:"center"
    }
});

//输出组件类
module.exports = HomeBottomCommonCell;