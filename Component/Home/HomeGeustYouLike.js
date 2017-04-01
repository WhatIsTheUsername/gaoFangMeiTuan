/**
 * Created by barry on 2017/3/31.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity

} from 'react-native';



//导入外部组件
var BottomCommonCell = require("./HomeBottomCommonCell");


//导入外部Json数据
var youLikeData = require("../../LocalData/HomeGeustYouLike.json")


var HomeGeustYouLike = React.createClass({
    getDefaultProps() {
        return {
            api_url: 'http://api.meituan.com/group/v1/deal/select/city/1/cate/-1?__skck=3c0cf64e4b039997339ed8fec4cddf05&userid=130146847&__vhost=api.mobile.meituan.com&movieBundleVersion=100&__skua=1dd130e7cbab2bd5a5aefdfe53173937&utm_term=7.5.0&limit=20&ci=1&__skcy=9agqj2sFaqcsQ2r%2BzhCQba9n9P4%3D&__skts=1479644633.061537&sort=defaults&__skno=52C3CA73-D209-409D-ACB1-9A87D3586BBD&ste=_b4&client=iphone&uuid=18A65684F989A27C8ED074524878F40BC91D39E2DCB2CF1B397AFCFD48DD2E88&utm_content=18A65684F989A27C8ED074524878F40BC91D39E2DCB2CF1B397AFCFD48DD2E88&utm_source=AppStore&utm_medium=iphone&mypos=40.029064%2C116.355743&version_name=7.5.0&offset=0&distance=0&__reqTraceID=CFB33B3B-808A-4A10-813B-3EBCDA5E20ED&js_patch_version=9&rn_package_version=0&utm_campaign=AgroupBgroupD300Ghomepage_allcateH0&msid=102E1B9C-F4D5-4F91-9FE4-1B2F6BDCBD842016-11-20-19-52412'
        }
    },

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        return{
            dataSource:ds
        }
    },

    render(){
        return(
            <View style={styles.container}>
                <BottomCommonCell
                    leftIcon = "cnxh"
                    leftTitle = "猜你喜欢"
                />
                
                {/*列表*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    },

    renderRow(rowData){
        return(
            <TouchableOpacity>
                <View style={styles.listViewStyle}>
                    {/*左边*/}
                    <Image source={{uri:this.dealWithImgUrl(rowData.squareimgurl)}} style={styles.imageStyle}/>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        <View style={styles.rightTopViewStyle}>
                            <Text>{rowData.mname}</Text>
                            <Text>{rowData.dt}</Text>
                        </View>
                        <Text style={{color:"gray"}}>{rowData.title}</Text>
                        <View style={styles.rightBottomViewStyle}>
                            <Text style={{color:"red"}}>¥{rowData.pricecalendar[0].price}</Text>
                            <Text style={{color:"gray", foneSize:11}}>门市价:¥{rowData.value}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },

    dealWithImgUrl(url){
        if (url.search(w.h) == -1){
            return url;
        }else {
            return url.replace("w.h", "120.90");
        }
    },

    componentDidMount(){
        this.loadDataFromNet();
    },

    //从网络加载数据
    loadDataFromNet(){
        fetch(this.props.api_url)
            .then((response) => response.json())
            .then((responseData)=>{
                console.log(responseData);
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error) =>{
                console.log(error);
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(youLikeData.data)
                });
            });
    }


});



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F5FCFF",
        marginTop:15
    },
    imageStyle:{
        width:120,
        height:90
    },
    listViewStyle:{
        borderBottomColor:"#e8e8e8",
        backgroundColor:"white",
        padding:10,
        borderBottomWidth:0.5,
        flexDirection:"row"
    },
    rightViewStyle:{
        marginLeft:8,
        width:220,
        justifyContent:"center"
    },
    rightTopViewStyle:{
        flexDirection:"row",
        marginTop:7,
        justifyContent:"space-between"
    },
    rightBottomViewStyle:{
        flexDirection:"row",
        marginTop:7,
        alignItems:"flex-end"
    }

});



module.exports = HomeGeustYouLike;