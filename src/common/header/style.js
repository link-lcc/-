import styled from 'styled-components'   //在这个包里引用一个函数
import logoPic from '../../statics/logo.png'; //引用静态资源 图片

export const HeaderWrapper = styled.div`  //通过styled创建一个高亮,也就是一个div   HeaderWrapper会当成组件在APP里  
  position:relative;      //绝对定位   
  height:58px;
  border-bottom:1px solid #f0f0f0; //上边一条横线
`;

export const Logo = styled.a.attrs({  //再通过这个函数创建一个Logo组件 styled后面的是什么 导出组件就是什么 这就是个a标签   这里边所有的设置都是为a标签设置
  href: "/"          //attrs是跳转到首页的写法  "/"根路径
})`
position:absolute;  //相对父元素定位
top:0;     //有absolute就得有top：0,否则无法定位
left:0;     //有absolute就得有left：0,否则无法定位
display:block; //因为a标签是行内元素 所有把它变成块,里面放图片
height:56px;  
width:100px;
background:#0909;
background:url(${logoPic});  //这个就是上面引入的图片 通过这种写法导入
background-size:contain;  //设置背景图片居中
`;

export const Nav = styled.div`
  width:960px;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
  margin:0 auto;
`;

export const NavItem = styled.div`  
  line-height:56px;   //这个div的公共样式
  padding:0 15px;
  font-size:17px;
  color:#333;

  &.left{            //&.left和&.right的意思是,如果NavItem上有left这个className,那么就左浮动,
    float:left;
  }
  &.right{           //如果NavItem上有right这个className,那么就右浮动,
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:26px;
    border-radius:15px;
    text-align:center;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`;

export const Navserch = styled.input.attrs({   //attrs是跳转的功能 也是input的属性
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  padding:0 30px 0px 20px;
  box-sizing:border-box;     //设置了左右的padding,这个标签会被左右撑开,设置了这个属性就不会被撑开了
  margin-top:9px;
  margin-left:20px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#666;
  &::placeholder{    // &::设置这个组件下的placeholder内容   
    color:#999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{   //css动画效果  设置入场时候的样式   类
    transition: all  .2s ease-out;   //动画运动几秒,动画运动类型
  }
  &.slide-enter-active{   //css动画效果  设置正在入场时候的样式   类
    width:240px;        //出场的的时候把宽变成240px;
  }
  &.slide-exit{          //css动画效果  设置出场时候的样式   类
    transition:all .2s ease-out;
  }
  &.slide-exit-active{      //css动画效果  设置正在出场时候的样式   类
    width:160px;           //出场的的时候把宽变成160px;
  }
`;

export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background:#fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
`;

export const SearchInfoList = styled.div`
  overflow:hiddle;
`;

export const SearchInfoItem = styled.a`
  dispatch:block;
  float:left;
  font-size:12px;
  padding:0 5px ;
  line-height:20px;
  color:#787878;
  border:1px solid #ddd;
  border-radius:3px;
  margin-right:10px;
  margin-bottom:15px;
`;

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0px;
  height:56px;
`;

export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0px 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`;
