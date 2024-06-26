import { Random } from 'mockjs';

import { resultPageSuccess } from '../_utils';

import type { MockMethod } from 'vite-plugin-mock';

const getPhone = () => {
  const prefixList = [135, 136, 137, 138, 139, 155, 158, 183, 185, 189];
  const randomNum = Math.floor(Math.random() * 10);
  const phoneStr = prefixList[randomNum] + Math.random().toString().slice(-8);
  return Number(phoneStr);
};

const getEducation = () => {
  const educationList = ['小学', '初中', '高中', '专科', '本科', '研究生'];
  const randomNum = Math.floor(Math.random() * educationList.length);
  return educationList[randomNum];
};

const getMarried = () => {
  return Math.floor(Math.random() * 4);
};

const getHobby = () => {
  const list: any[] = [];
  const hobbyList = ['羽毛球', '乒乓球', '篮球', '排球', '网球', '游泳', '滑雪', '跳高', '滑翔', '潜水'];
  const len = [3, 4][Number(Random.boolean())];
  for (let key = 0; key < len; key++) {
    const randomNum = Math.floor(Math.random() * 10);
    list.push(hobbyList[randomNum]);
  }
  return list;
};

const genList = () => {
  const list: any[] = [];
  for (let index = 0; index < 100; index++) {
    const num = index < 10 ? `0${index}` : index;
    list.push({
      id: Number(`10${num}`) + 1,
      name: Random.cname(),
      sex: ['男', '女'][Number(Random.boolean())],
      phone: getPhone(),
      education: getEducation(),
      married: getMarried(),
      forbid: Random.boolean(),
      hobby: getHobby(),
    });
  }
  return list;
};

const articleListData = [
  {
    article_id: '7303048156967026714',
    user_id: '2682464101469480',
    category_id: '6809637767543259144',
    tag_ids: [6809640407484334000, 6809640419505209000, 6809640793381274000],
    visible_level: 0,
    link_url: '',
    cover_image:
      'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84274f1176744240b47471a79d920a2f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1276&h=638&s=1250001&e=gif&f=46&b=d3d9dc',
    is_gfw: 0,
    title: '3D数字孪生 - 智能仓储管理平台-开源啦💐',
    brief_content:
      ' 截止目前，相信你在社区上很难找到开源且真正对前期的你学习有帮助的案例和文章，之所以做这类分享，纯粹的是用爱发电，新的领域学习，让我痛苦的度过了好多个夜晚，值得庆幸自己的思路和计划都能按照设想的方案实',
    is_english: 0,
    is_original: 1,
    user_index: 0,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1700465692',
    mtime: '1700532628',
    rtime: '-62135596800',
    draft_id: '7302787905043693577',
    view_count: 397,
    collect_count: 25,
    digg_count: 20,
    comment_count: 0,
    hot_index: 26,
    is_hot: 0,
    rank_index: 1.2e-7,
    status: 1,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 4,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 1012,
    read_time: '3分钟',
  },
  {
    article_id: '7299709109879324691',
    user_id: '2682464101469480',
    category_id: '6809637776263217160',
    tag_ids: [6809640407484334000, 6809640402103042000, 6809640419505209000],
    visible_level: 0,
    link_url: '',
    cover_image:
      'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/941af6d2401c4600b2867fc314dbbeaf~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1886&h=1186&s=505219&e=png&b=260947',
    is_gfw: 0,
    title: '仿mac系统交互设计的车载Pad操作系统',
    brief_content:
      '时隔100天，我又来水文了！3D数字孪生的系列好多小伙伴都感兴趣，项目在10月就已经完结了，后续我会将继续补充如何完整的做完一个3D数字孪生项目',
    is_english: 0,
    is_original: 1,
    user_index: 11.437480020762536,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1699636366',
    mtime: '1699778058',
    rtime: '1699778058',
    draft_id: '7299506825875226661',
    view_count: 2077,
    collect_count: 30,
    digg_count: 37,
    comment_count: 2,
    hot_index: 120,
    is_hot: 0,
    rank_index: 0.01209184,
    status: 2,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 2,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 1841,
    read_time: '6分钟',
  },
  {
    article_id: '7256964915133694008',
    user_id: '2682464101469480',
    category_id: '6809637767543259144',
    tag_ids: [6809640407484334000, 6809640404791591000],
    visible_level: 0,
    link_url: '',
    cover_image:
      'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5542f51a3274f8791ce1d8257dc4039~tplv-k3u1fbpfcp-watermark.image?',
    is_gfw: 0,
    title: '制造业领域，我是如何被逼到做顶级架构设计的',
    brief_content:
      '什么是顶级？还是澄清下吧； 这里的顶级并非说“最牛&”、最高档次，而指的是在开发一个复杂系统或软件时的最高层次设计的过程。 接下来，我要介绍的是，我是如何被逼到从单业务系统到系统与系统层面的顶级设计。',
    is_english: 0,
    is_original: 1,
    user_index: 10.070339420019154,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1689652100',
    mtime: '1689668573',
    rtime: '1689668573',
    draft_id: '7255491496831631416',
    view_count: 1404,
    collect_count: 41,
    digg_count: 21,
    comment_count: 6,
    hot_index: 95,
    is_hot: 0,
    rank_index: 0.00212567,
    status: 2,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 2,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 2360,
    read_time: '8分钟',
  },
  {
    article_id: '7250318500882432057',
    user_id: '2682464101469480',
    category_id: '6809637767543259144',
    tag_ids: [6809640793381274000, 6809640525595935000],
    visible_level: 0,
    link_url: '',
    cover_image:
      'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3727534baa6a478e9bbcb30d7472d40f~tplv-k3u1fbpfcp-watermark.image?',
    is_gfw: 0,
    title: '3D数字孪生 - Three.js 项目实战之相机控制器（五）',
    brief_content:
      '机器学习 oz@0xozram 9号在twitter上发了这样的一个短视频： 当然，这属于机器学习领域的内容，也就是大名鼎鼎的 google 在2015开源的 tensorflow，TensorFlo',
    is_english: 0,
    is_original: 1,
    user_index: 9.463944942479607,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1688108878',
    mtime: '1688831884',
    rtime: '1688831884',
    draft_id: '7249765949742530597',
    view_count: 2280,
    collect_count: 34,
    digg_count: 28,
    comment_count: 5,
    hot_index: 135,
    is_hot: 0,
    rank_index: 0.0027185,
    status: 2,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 1,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 1808,
    read_time: '6分钟',
  },
  {
    article_id: '7248545082130169893',
    user_id: '2682464101469480',
    category_id: '6809637767543259144',
    tag_ids: [6809640793381274000, 6809640497393435000],
    visible_level: 0,
    link_url: '',
    cover_image:
      'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05bba1c501124628a6bd11dc7f93a96a~tplv-k3u1fbpfcp-watermark.image?',
    is_gfw: 0,
    title: '3D数字孪生 - Three.js 项目实战之相机（四）',
    brief_content:
      '承上 在第一篇# 3D数字孪生 - Three.js 项目介绍与基础环境搭建（一）有介绍，在使用 three/filber 的Canvas组件时，默认情况下，会自动添加初始化一个透视相机（Perspe',
    is_english: 0,
    is_original: 1,
    user_index: 9.01959424539129,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1687694967',
    mtime: '1687748103',
    rtime: '1687748103',
    draft_id: '7248466120364343333',
    view_count: 1752,
    collect_count: 52,
    digg_count: 39,
    comment_count: 1,
    hot_index: 110,
    is_hot: 0,
    rank_index: 0.0020533,
    status: 2,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 1,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 1576,
    read_time: '5分钟',
  },
  {
    article_id: '7246657502842945597',
    user_id: '2682464101469480',
    category_id: '6809637767543259144',
    tag_ids: [6809640793381274000],
    visible_level: 0,
    link_url: '',
    cover_image:
      'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1465296be96f41f58e9a2c9a35551736~tplv-k3u1fbpfcp-watermark.image?',
    is_gfw: 0,
    title: '3D数字孪生 - Three.js 项目实战之场景材质（三）',
    brief_content:
      '接上文# 3D数字孪生 - Three.js 场景光源（二）最后的问题: “为何已关闭场景中所有光源，仍然有些面是亮的呢？” 我们不妨近距离的观察一下，打开场景中的方向光 DirectionalLig',
    is_english: 0,
    is_original: 1,
    user_index: 8.52173105363898,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1687251948',
    mtime: '1687335742',
    rtime: '1687335742',
    draft_id: '7246564869222580282',
    view_count: 1869,
    collect_count: 34,
    digg_count: 27,
    comment_count: 0,
    hot_index: 106,
    is_hot: 0,
    rank_index: 0.00191366,
    status: 2,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 4,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 1284,
    read_time: '4分钟',
  },
  {
    article_id: '7246316652048269373',
    user_id: '2682464101469480',
    category_id: '6809637767543259144',
    tag_ids: [6809640793381274000],
    visible_level: 0,
    link_url: '',
    cover_image:
      'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/638de6b1ba4b48bab0229b70095e718e~tplv-k3u1fbpfcp-watermark.image?',
    is_gfw: 0,
    title: '3D数字孪生 - Three.js 项目实战之场景光源（二）',
    brief_content:
      '前言 接下来的项目实战讲解过程中，有必要多花几个篇幅介绍一下项目中用到的两个库。 "@react-three/drei": "^9.70.3", "@react-three/fiber": "^8.1',
    is_english: 0,
    is_original: 1,
    user_index: 9.158795645897236,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1687179552',
    mtime: '1687331693',
    rtime: '1687239614',
    draft_id: '7246311040267370556',
    view_count: 1414,
    collect_count: 29,
    digg_count: 17,
    comment_count: 2,
    hot_index: 82,
    is_hot: 0,
    rank_index: 0.00151119,
    status: 2,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 2,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 1143,
    read_time: '4分钟',
  },
  {
    article_id: '7244894506305536057',
    user_id: '2682464101469480',
    category_id: '6809637767543259144',
    tag_ids: [6809640793381274000, 6809640357354013000, 6809640407484334000],
    visible_level: 0,
    link_url: '',
    cover_image:
      'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6dac5e4b92d048409629828852b2d79d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1919&h=959&s=1380008&e=png&b=e0dede',
    is_gfw: 0,
    title: '3D数字孪生 - Three.js 项目介绍与基础环境搭建（一）',
    brief_content:
      '3D数字孪生，生成3D可视化仓库地图，实时监控仓库库位坐标、调度任务状态、车辆位置等信息。 根据调度信息，动态展现小车任务状态',
    is_english: 0,
    is_original: 1,
    user_index: 8.905619350311529,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1686886155',
    mtime: '1702997867',
    rtime: '1686908640',
    draft_id: '7244785030567886907',
    view_count: 9415,
    collect_count: 386,
    digg_count: 145,
    comment_count: 33,
    hot_index: 589,
    is_hot: 0,
    rank_index: 0.00966501,
    status: 2,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 10,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 1859,
    read_time: '6分钟',
  },
  {
    article_id: '7235027795393462333',
    user_id: '2682464101469480',
    category_id: '6809637767543259144',
    tag_ids: [6809640497393435000],
    visible_level: 0,
    link_url: '',
    cover_image: '',
    is_gfw: 0,
    title: 'konva绘制图像标定',
    brief_content: '视频流标定工具，矩形与多边形绘制。仓库地图动态标注摄像机位置。konva.js konva-react实战',
    is_english: 0,
    is_original: 1,
    user_index: 0,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1684553355',
    mtime: '1684571408',
    rtime: '1684571408',
    draft_id: '7234887157000454202',
    view_count: 1418,
    collect_count: 49,
    digg_count: 2,
    comment_count: 2,
    hot_index: 74,
    is_hot: 0,
    rank_index: 0.00101618,
    status: 2,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 3,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 1222,
    read_time: '4分钟',
  },
  {
    article_id: '7235027795393462333',
    user_id: '2682464101469480',
    category_id: '6809637767543259144',
    tag_ids: [6809640497393435000],
    visible_level: 0,
    link_url: '',
    cover_image: '',
    is_gfw: 0,
    title: 'konva绘制图像标定',
    brief_content: '视频流标定工具，矩形与多边形绘制。仓库地图动态标注摄像机位置。konva.js konva-react实战',
    is_english: 0,
    is_original: 1,
    user_index: 0,
    original_type: 0,
    original_author: '',
    content: '',
    ctime: '1684553355',
    mtime: '1684571408',
    rtime: '1684571408',
    draft_id: '7234887157000454202',
    view_count: 1418,
    collect_count: 91,
    digg_count: 2,
    comment_count: 2,
    hot_index: 74,
    is_hot: 0,
    rank_index: 0.00101618,
    status: 2,
    verify_status: 1,
    audit_status: 2,
    mark_content: '',
    display_count: 0,
    is_markdown: 1,
    app_html_content: '',
    version: 3,
    web_html_content: null,
    meta_info: null,
    catalog: null,
    homepage_top_time: -62135596800,
    homepage_top_status: 0,
    content_count: 1222,
    read_time: '4分钟',
  },
];

export default [
  {
    url: '/api/table/getTableList',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { current = 1, pageSize = 10 } = query;
      return resultPageSuccess(current, pageSize, genList());
    },
  },
  {
    url: '/api/article/queryList',
    timeout: 200,
    method: 'post',
    response: ({ body, headers, query }) => {
      console.log('body', body);
      const { current = 1, pageSize = 10 } = body;
      return resultPageSuccess(current, pageSize, articleListData);
    },
  },
] as MockMethod[];
