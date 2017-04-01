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
    Platform,
    Navigator
} from 'react-native';


//导入外部的组件类
import TabNavigator from "react-native-tab-navigator";

var Mine = require("../Mine/Mine");
var Home = require("../Home/Home");
var More = require("../More/More");
var Shop = require("../Shop/Shop");


var Main = React.createClass({
   //初始化函数
    getInitialState(){
        return{
            selectedPage:"home" //初始化时默认选中home页面
        }
    },
    
    render(){
        return(
            <TabNavigator style={{flex: 1}}>
                {/*--首页--*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home', '首页', Home)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', '商家', Shop)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', '我的', Mine)}
                {/*--更多--*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', '更多', More)}
            </TabNavigator>
        );
    },
    
     // 每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>} // 图标
                renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}   // 选中的图标
                onPress={()=>{this.setState({selectedPage:selectedTab})}}
                selected={this.state.selectedPage === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText = {badgeText}
            >
                
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                    renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                />
               
            </TabNavigator.Item>
        )
    }

    
});


const styles = StyleSheet.create({
  iconStyle:{
      width:Platform.OS === "ios"? 30 : 25,
      height:Platform.OS === "ios"? 30 : 25
  },
   
  selectedTitleStyle:{
      color:"orange"
  }  
});



module.exports = Main;
