import React, { Component } from 'react'
import { GlobalStyle } from "./style";
import Header from './common/header'
import store from './store';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './page/home'
import Detail from './page/detail'

class App extends Component {
  render () {
    //<GlobalStyle />是公共用的css样式  <Header />是要加载的子组件
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <Header />
          <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}
export default App;