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

var Dimensions = require("Dimensions");
var {width} = Dimensions.get("window");


var HomeMiddleCommonView = React.createClass({

    getDefaultProps(){
        return{
            title:"",
            subTitle:"",
            rightImage:"",
            titleColor:"",
            detailUrl:"", //这个view点击后需要跳转的URL
            callBackClickFunc:null  //点击后的回调事件,由外部传入
        }
    },



    render(){
        return(
          <TouchableOpacity
              onPress={()=>this.clickCell(this.props.detailUrl)}
              style={{width:width*0.5, height:60}}
          >
              <View style={styles.container}>
                  {/*左边*/}
                  <View>
                      <Text style={[{color:this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
                      <Text style={styles.subtitleStyle}>{this.props.subTitle}</Text>
                  </View>
                  {/*右边*/}
                  <Image source={{uri:this.props.rightImage}} style={{width:64, height:43, resizeMode:"contain"}}/>
              </View>

          </TouchableOpacity>
        );
    },


    //点击后调用
    clickCell(data){

        if(this.props.callBackClickFunc == null){   //回调方法不存在
            return;
        }else {
            this.props.callBackClickFunc(data);  //回调方法存在
        }
    }

});




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width: width*0.5 -1,
        height:59,
        flexDirection:"row",
        marginBottom:1,
        marginLeft:0.5,
        marginRight:0.5,
    },

    titleStyle:{
        fontSize:18,
        fontWeight:"bold"
    },

    subTitleStyle:{
        color:"gray"
    }

});

module.exports = HomeMiddleCommonView;


