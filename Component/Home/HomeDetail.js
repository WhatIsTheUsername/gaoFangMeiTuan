/**
 * Created by barry on 2017/3/30.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

 var HomeDetail = React.createClass({
     render() {
         return (
             <View style={styles.container}>
                 <TouchableOpacity onPress={()=>{this.popToHome()}}>
                     <Text style={styles.welcome}>
                         返回上层
                     </Text>
                 </TouchableOpacity>

             </View>
         );
     },

     //返回上一层
     popToHome(){
         this.props.navigator.pop();
     }

 })



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

//输出组件类
module.exports = HomeDetail;