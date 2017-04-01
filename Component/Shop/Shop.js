/**
 * Created by barry on 2017/3/30.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    WebView
} from 'react-native';

var Shop = React.createClass({

    getInitialState(){
        return {
            detailUrl: 'http://i.meituan.com/brunch/around?uuid=18A65684F989A27C8ED074524878F40BC91D39E2DCB2CF1B397AFCFD48DD2E88&utm_term=7.5.0&utm_source=AppStore&utm_content=18A65684F989A27C8ED074524878F40BC91D39E2DCB2CF1B397AFCFD48DD2E88&rn_package_version=0&userid=130146847&utm_medium=iphone&version_name=7.5.0&lat=40.028939&utm_campaign=AgroupBgroupD300GmerchantH0&token=XoMC1CEHhZHhlva6krkhwcP5-EsAAAAAhgIAABIAdap3h0odqxA9xnArMFVDcHAcpYjVO7IollYmVyF_8jU2tnulAIJjkBjmo1xYqg&regionid=&lng=116.355864&f=iphone&js_patch_version=9&ci=1&msid=102E1B9C-F4D5-4F91-9FE4-1B2F6BDCBD842016-11-20-19-52412'
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
               <WebView
                    automaticallyAdjustContentInsets={false}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    },

    renderNavBar(){
        return(
            <View style= {styles.navOutViewStyle}>
                <Text style={styles.textStyle}>
                    附近
                </Text>
            </View>
        )
    },

    popToHome(){
        this.props.navigator.pop();
    }

});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    
       navRightImgStyle: {
        width: 28,
        height: 28,
    },
    navLeftImgStyle: {
        width: 28,
        height: 28,
    },
    navOutViewStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    rightViewStyle: {
        position: 'absolute',
        right: 10,
        paddingTop: 10
    },
    leftViewStyle: {
        position: 'absolute',
        left: 10,
        paddingTop: 10
    }

});



module.exports = Shop;
