import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Navserch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  Addition,
  SearchInfoItem,
  SearchInfoList,
  Button,
  SearchWrapper,
} from './style'  //在style.js中导出的组件 都是css样式


class Header extends Component {
  getListArea (show) {
    let { focused, page, list, mouseIn, totalPage, handleMouseEnter, handleChangePage, handleMouseLeave } = this.props;
    const pageList = [];
    const jsList = list.toJS()

    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }



    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle >
            <span className="iconfont" >&#xe851;</span>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>

              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render () {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition    //让搜索框有动画效果 用css这个标签把Navserch标签包裹起来
              in={focused}  //focused是true的时候执行
              timeout={200} //执行事件
              className="slide" //缓动的类
            >
              <Navserch
                className={focused ? 'focused' : ""}
                style={focused ? { width: "240px" } : {}}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></Navserch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} >&#xe62b;</span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe624;</span>
            写文章
            </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper >
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus (list) {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);