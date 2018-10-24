import classes from "./index.scss";

export default {
  data() {
    return {};
  },
  methods: {},
  render(h) {
    return (
      <div class={classes["overlay-game"]} onClick={e => e.stopPropagation()}>
        <div class={classes.tri}>
          <div class={classes.inner} />
        </div>
        <div class={classes.top}>
          <div class={classes.container}>
            <a class={classes.item} href="/">
              <img src={require("../../assets/images/game-1.jpg")} />
            </a>
            <a class={classes.item} href="/">
              <img src={require("../../assets/images/game-2.jpg")} />
            </a>
            <a class={classes.item} href="/">
              <img src={require("../../assets/images/game-3.jpg")} />
            </a>
            <a class={classes.item} href="/">
              <img src={require("../../assets/images/game-4.jpg")} />
            </a>
            <a class={classes.item} href="/">
              <img src={require("../../assets/images/game-5.jpg")} />
            </a>
            <a class={classes.item} href="/">
              <img src={require("../../assets/images/game-6.jpg")} />
            </a>
            <a class={classes.item} href="/">
              <img src={require("../../assets/images/game-7.jpg")} />
            </a>
          </div>
        </div>
        <div class={classes.bottom}>
          <div class={classes.container}>
            <a href="/" class={classes.item}>
              <div class={classes.icon}>
                <svg viewBox="0 0 64 64">
                  <use
                    xlinkHref={
                      require("../../assets/svgs/logo.svg") +
                      "#Navbar-icon-grid9"
                    }
                  />
                </svg>
              </div>
              <div class={classes.text}>更多游戏</div>
            </a>
            <a href="/" class={classes.item}>
              <div class={classes.icon}>
                <svg viewBox="0 0 64 64">
                  <use
                    xlinkHref={
                      require("../../assets/svgs/logo.svg") +
                      "#Navbar-icon-bnet"
                    }
                  />
                </svg>
              </div>
              <div class={classes.text}>战网应用</div>
            </a>
            <a href="/" class={classes.item}>
              <div class={classes.icon}>
                <svg viewBox="0 0 64 64">
                  <use
                    xlinkHref={
                      require("../../assets/svgs/logo.svg") +
                      "#Navbar-icon-download"
                    }
                  />
                </svg>
              </div>
              <div class={classes.text}>下载</div>
            </a>
            <a href="/" class={classes.item}>
              <div class={classes.icon}>
                <svg viewBox="0 0 64 64">
                  <use
                    xlinkHref={
                      require("../../assets/svgs/logo.svg") +
                      "#Navbar-icon-chat"
                    }
                  />
                </svg>
              </div>
              <div class={classes.text}>游戏论坛</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
};
