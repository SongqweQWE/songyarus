let Mock = require("mockjs")
let arr = [{
        "title": "中国npm镜像源升级公告",
        "name": "fengmk2",
        "you": 43467,
        "hui": 8
    },
    {
        "title": "望周知，求扩散 淘宝 npm 镜像站喊你切换新域名",
        "name": "atian25",
        "you": 77311,
        "hui": 9

    },
    {
        "title": "node.js 2021 年开发者报告解读：健康稳步的发展中",
        "name": "i5ting",
        "you": 77311,
        "hui": 10

    },
    {
        "title": "请大家遵纪守法，勿发不合格内容",
        "name": "thonatos",
        "you": 77311,
        "hui": 9
    },
    {
        "title": "WebSockts.js",
        "name": "yviscool",
        "you": 77311,
        "hui": 9
    },
    {
        "title": "冒个泡，过完年面试奇虎360",
        "name": "dyjiang",
        "you": 77311,
        "hui": 9
    },
    {
        "title": "Vue + Egg.js+Mysql 的 JS 全栈实践，动态菜单 RBAC权限模型，Web Socket实现站内信",
        "name": "imfdj",
        "you": 77311,
        "hui": 9
    },
    {
        "title": "沉迷造轮子，无法自拔！ 又写了一个通知组件",
        "name": "daGaiGuanYu",
        "you": 77311,
        "hui": 9
    }
]
Mock.mock("/api/WenChild", "get", function (config) {
    console.log(config)
    return arr
})