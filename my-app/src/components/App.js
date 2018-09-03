import React, { Component } from 'react';
import GetData from '../containers/GetData';
import HandleData from '../containers/HandleData';

const App = () => (
  <div>
    <h2>数据处理</h2>
    <GetData/>
    <HandleData/>
  </div>
)

export default App;
