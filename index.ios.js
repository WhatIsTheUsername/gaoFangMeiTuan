/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//导入Main组件
var Main = require("./Component/Main/Main");

class gaoFangMeiTuan extends Component{
  render(){
    return(
        <Main/>
    );
  }
}


AppRegistry.registerComponent('gaoFangMeiTuan', () => gaoFangMeiTuan);
