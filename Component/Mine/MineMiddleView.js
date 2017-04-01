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
    TouchableOpacity
} from 'react-native';

var MiddleData = require("./MiddleData.json");


var MineMiddleView = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {this.renderAllItem}
            </View>
        );
    },

    renderAllItem(){
        var itemArr = [];
        for(var i=0; i<MiddleData.length; i++){
            var data = MiddleData[i];
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}/>
            )
        }
        return itemArr;
    }
});

var InnerView = React.createClass({
    getDefaultProps(){
        return{
            iconName:"",
            title:""
        }
    },
    render(){
        return(
            <View style={styles.innerViewStyle}>
                <Image source={{uri:this.props.iconName}} style={{width:40, height:30, marginBottom:3}}/>
                <Text style={{color:"gray"}}>{this.props.title}</Text>
            </View>
        )
    }
});




const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        height:60
    },
    innerViewStyle:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
});


module.exports = MineMiddleView;
