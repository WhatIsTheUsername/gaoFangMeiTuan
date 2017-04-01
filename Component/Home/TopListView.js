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
    ListView,
    TouchableOpacity,
    Platform  //平台区分
} from 'react-native';


var Dimensions = require("Dimensions");
var {width} = Dimensions.get("window");

//全局变量
var cols = 5;
var cellWH = Platform.OS == "ios"? 70 :50;
var vMargin = (width - cellWH * cols) / (cols + 1);

var TopListView = React.createClass({

    getDefaultProps(){
        return{
            dataArr:[]
        }
    },

    getInitialState(){
        //创建数据源
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) =>{
                r1 !== r2
            }
        });
        return{
            dataSource:ds.cloneWithRows(this.props.dataArr)
        }
    },

    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },

    //具体cell
    renderRow(rowData){
        return(
            <View style={styles.cellStyle}>
                <TouchableOpacity onPress={()=>{
                    alert(rowData.title);
                }}>
                    <View style={styles.cellInnerViewStyle}>
                        <Image source={{uri:rowData.image}} style={{width:52, height:52}}/>
                        <Text style={{color:"gray", fontSize:13}}>{rowData.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

});


const styles = StyleSheet.create({

    contentViewStyle:{
        flexDirection:'row',
        //多个cell在同一行显示
        flexWrap:"wrap",
        width:width
    },

    //cell中第一层view的样式
    cellStyle:{
        justifyContent:"center",
        alignItems :"center",
        width:cellWH,
        height:cellWH,
        marginTop:10,
        marginLeft:vMargin
    },

    //cell中第二个view的样式
    cellInnerViewStyle:{
        justifyContent:"center",
        alignItems:"center",
        marginLeft:vMargin
    }
});



module.exports = TopListView;
