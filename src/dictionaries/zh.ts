import type { Dictionary } from "./en";

export const zh: Dictionary = {
  metadata: {
    title: "Dogether — 轻轻地，一起做计划",
    description:
      "本地优先的 iPhone / iPad 共享计划应用。离线可用，邀请别人时通过 iCloud 同步。没有账号，也没有开发者服务器。",
  },
  nav: {
    features: "功能",
    how: "怎么用",
    privacy: "隐私",
    support: "支持",
    download: "下载",
  },
  hero: {
    eyebrow: "本地优先 · 邀请时才走 iCloud",
    title: "共享计划，",
    accent: "轻轻地。",
    body: "买菜、旅行、搬家、复习周——把计划放在一个安静的地方，而不是散落在聊天记录里。离线可用，通过 iCloud 同步。",
    download: "App Store",
    downloadNote: "即将上架",
    how: "怎么用",
    chips: ["不需要账号", "通过 iCloud 私下分享", "离线可用"],
  },
  features: {
    kicker: "它做什么",
    title: "一份清单。需要它的人。",
    items: [
      { title: "计划和任务", body: "从模板或空白清单开始，做完就勾掉。" },
      { title: "想分享时再分享", body: "计划先留在你的设备上。分享走 iCloud，不需要 Dogether 账号。" },
      { title: "主屏幕小组件", body: "不用打开 App，也能看到正在进行的事。" },
      { title: "提醒留在本机", body: "通知在设备上安排，后面没有推送服务器。" },
    ],
  },
  how: {
    kicker: "怎么用",
    title: "邀请一个人。设置就这些。",
    steps: [
      { n: "01", title: "做一份计划", body: "选模板或从空白开始，加上任务。" },
      { n: "02", title: "发出分享", body: "iCloud 生成私密分享。对方在 Dogether 里接受。" },
      { n: "03", title: "离线也能继续", body: "修改先存在设备上，iCloud 可用时再跟上。" },
    ],
  },
  gallery: {
    kicker: "界面",
    title: "截图",
    note: "正式截图会放在这里。这一格是占位。",
    caption: "占位",
  },
  download: {
    title: "即将上架 App Store",
    body: "商店页面还没上线。在有正式链接之前，下载按钮是占位。",
    button: "在 App Store 下载",
  },
  footer: {
    blurb: "本地优先的共享计划应用。离线可用，邀请别人时通过 iCloud 同步。",
    product: "产品",
    support: "支持",
    privacy: "隐私政策",
    supportLink: "支持",
    copyright: "© 2026 Dogether",
  },
  privacy: {
    title: "隐私政策",
    updated: "最近更新：2026 年 10 月 2 日",
    sections: [
      {
        h: "适用范围",
        p: "本政策说明 Dogether 的 iOS / iPadOS App 以及这个网站。Dogether 没有自己的账号系统，也没有内容服务器。",
      },
      {
        h: "留在你设备上的内容",
        p: "计划、任务和相关设置保存在你的设备上。分享计划时，Apple iCloud（CloudKit）在你的 iCloud 账号以及被邀请人的账号里保存并同步这些数据。Dogether 不会在开发者服务器上收到一份副本。",
      },
      {
        h: "我们不收集的内容",
        p: "App 不含分析、广告或追踪 SDK，也不要求创建 Dogether 账号。我们不出售个人信息。",
      },
      {
        h: "通知",
        p: "提醒在本机安排。App 不会用远程推送服务读取你的计划。",
      },
      {
        h: "你可以做什么",
        p: "你可以在 App 里查看和删除计划，也可以停止分享。删除 App 会去掉设备上的副本；iCloud 中的数据遵循 Apple 对你账号的 iCloud 控制。",
      },
      {
        h: "这个网站",
        p: "这些页面是静态的。不设置分析 Cookie，也不要求登录。",
      },
      {
        h: "联系",
        p: "关于本政策的问题，请看支持页面。",
      },
    ],
  },
  support: {
    title: "支持",
    intro: "Dogether 是本地优先的共享清单。常见问题在分享和同步，不在账号。",
    items: [
      {
        h: "没有登录",
        p: "没有 Dogether 账号。分享使用设备上已经登录的 Apple ID / iCloud。",
      },
      {
        h: "分享没收到",
        p: "双方都需要安装 Dogether 并登录 iCloud。在要加入计划的那台设备上打开邀请。",
      },
      {
        h: "离线",
        p: "没有网络也可以继续改。设备再次连上 iCloud 后会同步。",
      },
      {
        h: "隐私问题",
        p: "请阅读隐私政策。App 里的链接指向同一页。",
      },
    ],
    contact: "App Store 链接还没上线。产品问题可以先通过开发者的 GitHub：mammut001/dogether。",
  },
};
