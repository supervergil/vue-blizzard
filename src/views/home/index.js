import classes from "./index.scss";
export default {
  data() {
    return {};
  },
  render(h) {
    return (
      <div class={classes.home}>
        <div class={classes.top}>
          <div class={classes.container}>
            <h1 class={classes.title}>
              <a href="/" />
            </h1>
            <h2 class={classes.description}>
              <a href="/">
                同数以百万计的玩家一同参与线上活动，共同感受最为精彩的游戏体验！
                <span>了解更多内容</span>
              </a>
            </h2>
            <a class={classes.register} href="/">注册战网通行证</a>
            <a class={classes.login} href="/">登录</a>
            <a class={classes.download} href="/">
              <span>获取暴雪战网桌面应用</span>
            </a>
          </div>
        </div>
        <div class={classes.bottom}>
          <div class={classes.container}>
            <a href="/" class={[classes.item, classes["item-1"]]}>
              <div class={classes.tip}>《魔兽世界》</div>
            </a>
            <a href="/" class={[classes.item, classes["item-2"]]}>
              <div class={classes.tip}>《暗黑破坏神III》</div>
            </a>
            <a href="/" class={[classes.item, classes["item-3"]]}>
              <div class={classes.tip}>《星际争霸II》</div>
            </a>
            <a href="/" class={[classes.item, classes["item-4"]]}>
              <div class={classes.tip}>《星际争霸：重制版》</div>
            </a>
            <a href="/" class={[classes.item, classes["item-5"]]}>
              <div class={classes.tip}>《风暴英雄》</div>
            </a>
            <a href="/" class={[classes.item, classes["item-6"]]}>
              <div class={classes.tip}>《炉石传说》</div>
            </a>
            <a href="/" class={[classes.item, classes["item-7"]]}>
              <div class={classes.tip}>《守望先锋》</div>
            </a>
          </div>
        </div>
      </div>
    );
  },
  components: {}
};
