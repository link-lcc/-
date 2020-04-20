import styled from 'styled-components';

export const HomeWrapper = styled.div`
overflow:hidden;
width:960px;
margin:0 auto;
` ;

export const HomeLeft = styled.div`
margin-left:15px;
padding-top:30px;
width:625px;
float:left;
.banner-img{
  width:625px;
  height:270px;
}
` ;

export const HomeRight = styled.div`
width:280px;
float:right;
` ;

export const TopicWrapper = styled.div`
overflow:hidden;
padding:20px 0 10px 0px;
margin-left:-10px;
border-bottom:1px solid #dcdcdc 
`;

export const TopicItem = styled.div`
float:left;
background:#0909;
height:32px;
padding-right:10px;
line-height:32px;
font-size:14px;
color:#000;
margin-bottom:18px;
border:1px solid #dcdcdc;
border-radius:4px;
margin-left:54px;
.topic-pic{
  width:32px;
  height:32px;
  float:left;
  display:block;
  margin-right:10px;
  margin-bottom:18px;
}
`;


export const ListItem = styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;

.pic{
  width:125px;
  height:100px;

  flot:right;
  border-radius:10px;
  background:#0909;
}
`;


export const ListInfo = styled.div`
width:500px;
float:left;
.title{
  font-size:18px;
  line-height:27px;
  font-weight:bold;
  color:#333
}
.desc{
  font-size:13px;
  line-height:24px;
  color:#999;
}
`;

export const RecommendWrapper = styled.div`
  margin:30px 0px;
  width:280px; 
`;

export const RecommendItem = styled.div`
  margin:30px 0px;
  height:50px;
  background:url(${(props) => props.imgUrl});
  background-size:contain;
  `;

export const WriterWrapper = styled.div`
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
line-height:278px;
text-align:center;

`;