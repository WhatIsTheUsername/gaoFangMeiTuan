/**
 * Created by barry on 2017/3/30.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

var CommonMyCell = React.createClass({
    getDefaultProps(){
        return{
            leftIconName:"",
            leftTitle:"",
            rightTitle:"",
            rightIconName:"",
        }
    },

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIconName}} style={styles.leftImageStyle} />
                    <Text style={styles.leftTitleStyle} >{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    {this.rightSubView()}
                </View>
            </View>
            </TouchableOpacity>
        )
    },


    rightSubView(){
        return(
            <View style={{flexDirection:"row", alignItems:"center"}}>
                {this.renderRightContent()}
                <Image source={{uri:"icon_cell_rightArrow"}} style={{width:8, height: 13, marginRight: 8, marginLeft:5}} />
            </View>
        )
    },


    //右边具体返回的值
    renderRightContent(){
        if(this.props.rightIconName.length == 0){
            return(
                <Text style={{color:"gray"}}>{this.props.rightTitle}</Text>
            )
        }else{
            return(
                <Image source={{uri:"me_new"}} style={{width:24, height:13}}/>
            )
        }
    }

});



const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height:44,
        borderBottomColor:"#e8e8e8",
        borderBottomWidth:0.5
    },
    leftViewStyle:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:8
    },
    rightViewStyle:{

    },
    leftImageStyle:{
        width:24,
        height:24,
        marginRight:6,
        borderRadius:12
    },
    leftTitleStyle:{
        fontSize:16
    }
    
});

module.exports = CommonMyCell;
