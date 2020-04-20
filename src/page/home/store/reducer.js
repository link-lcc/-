import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  },
  {
    id: 2,
    title: "手绘",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  }
  ],
  articleList: [{
    id: 1,
    title: "《让岁月变成诗》名人语录",
    desc: '梁实秋说：你走，我不送你。你来，无论多大风多大雨，我要去接你。 海明威说：优于别人，并不高贵，真正的高贵应该是优于过去的自己。 顾漫说：一个笑就...',
    imgUrl: "https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",

  },
  {
    id: 2,
    title: "《让岁月变成诗》名人语录",
    desc: '梁实秋说：你走，我不送你。你来，无论多大风多大雨，我要去接你。 海明威说：优于别人，并不高贵，真正的高贵应该是优于过去的自己。 顾漫说：一个笑就...',
    imgUrl: "https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",

  },
  {
    id: 3,
    title: "《让岁月变成诗》名人语录",
    desc: '梁实秋说：你走，我不送你。你来，无论多大风多大雨，我要去接你。 海明威说：优于别人，并不高贵，真正的高贵应该是优于过去的自己。 顾漫说：一个笑就...',
    imgUrl: "https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",

  },
  {
    id: 4,
    title: "《让岁月变成诗》名人语录",
    desc: '梁实秋说：你走，我不送你。你来，无论多大风多大雨，我要去接你。 海明威说：优于别人，并不高贵，真正的高贵应该是优于过去的自己。 顾漫说：一个笑就...',
    imgUrl: "https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",

  },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    },
    {
      id: 2,
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",

    },
  ]
})


export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}
