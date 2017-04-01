/**
 * Created by barry on 2017/3/30.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


var Main = require("./Main")


var LaunchImage = React.createClass({
    render(){
        return(
            <Image source={{uri:"lauchimage"}} style={styles.launchImageStyle}/>
        );
    },

    componentDidMount(){
        //定时:隔2秒切换到Main
        setTimeout(
            ()=>{
                this.props.navigator.replace({
                    component:Main
                });
            }
        )
    }
});


const styles = StyleSheet.create({
    launchImageStyle:{
        flex:1
    }
});


module.exports = LaunchImage;
