import classes from "./index.scss";

export default {
  data() {
    return {};
  },
  methods: {},
  render(h) {
    return (
      <div class={classes.footer}>
        <div class={classes.container}>
          <div class={classes.logo}>
            <a href="/">
              <svg viewBox="0 0 124 66">
                <use
                  xlinkHref={
                    require("../../assets/svgs/logo.svg") +
                    "#NavbarFooter-blizzard-upper"
                  }
                />
              </svg>
              <svg viewBox="0 0 124 66" class={classes.bottomLogo}>
                <use
                  xlinkHref={
                    require("../../assets/svgs/logo.svg") +
                    "#NavbarFooter-blizzard-lower"
                  }
                />
              </svg>
            </a>
          </div>
          <div class={classes.bottomNav}>
            <a href="/">工作机会</a>
            <span>|</span>
            <a href="/">关于</a>
            <span>|</span>
            <a href="/">支持</a>
            <span>|</span>
            <a href="/">媒体中心</a>
            <span>|</span>
            <a href="/">API</a>
            <span>|</span>
            <a href="/">安全中心</a>
          </div>
          <div class={classes.copyright}>©2018版权所有。</div>
        </div>
      </div>
    );
  }
};
