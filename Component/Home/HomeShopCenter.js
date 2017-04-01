/**
 * Created by barry on 2017/3/31.
 */

import React, {component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";

var BottomCommonCell = require("./HomeBottomCommonCell");
var Home_D5 = require("../../LocalData/XMG_Home_D5.json");

var HomeShopCenter = React.createClass({
    getDefaultProps(){
        //回调函数
        return{
            popToHomeView:null
        }
    },

    render(){
        return(
            <View style={styles.container}>
                <BottomCommonCell
                    leftIcon = "gw"
                    leftTitle = "购物中心"
                    rightTitle = {Home_D5.tips}
                />

                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>

            </View>

        )
    },

    
    //返回下部分所有的item
    renderAllItem(){
        //定义组件数组
        var itemArr = [];
        //取出数据
        var shopData = Home_D5.data;
        for (var i = 0 ; i<shopData.length; i++){
            var data = shopData[i];
            itemArr.push(
                <ShopCenterItem
                    key={i}
                    shopImage = {data.img}
                    shopSale={data.showText.text}
                    shopName = {data.name}
                    detailurl = {data.detailurl}
                    popToShopCenter={
                        (url) => {this.popToHome(url);}
                    }
                />
            )
        }
        return itemArr;
    },

    popToHome(url){
        //判断
        if(this.props.popToHomeView == url) return;
        //执行回调函数
        this.props.popToHomeView(url);
    }


});


var ShopCenterItem = React.createClass({
    getDefaultProps(){
        return{
            shopImage:"",
            shopSale:"",
            shopName:"",
            detailurl:"",
            popToShopCenter:null
        }
    },
    
    render(){
        return(
            <TouchableOpacity onPress={
                ()=>{this.clickItem(this.props.detailurl)}
            }>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        )
    },

    clickItem(url){
        //判断
        if (this.props.detailurl == null) return;
        //执行回调函数
        this.props.popToShopCenter(url);
    }
    
});

const styles = StyleSheet.create({
    container:{
        marginTop:15
    },
    
    imageStyle:{
        width:120,
        height:100,
        borderRadius:8
    },
    scrollviewstyle:{
        flexDirection:"row",
        backgroundColor:"white",
        padding:10
    },
    itemViewStyle:{
        margin:8
    },
    shopSaleStyle:{
        //绝对定位
        position:"absolute",
        left:0,
        bottom:30,
        backgroundColor:"orange",
        color:"white",
        padding:3,
        borderTopRightRadius:8
    },
    shopNameStyle:{
        textAlign:"center",
        marginTop:5
    }
    
});



module.exports = HomeShopCenter;
