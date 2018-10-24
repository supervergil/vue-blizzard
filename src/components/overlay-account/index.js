import classes from "./index.scss";

export default {
  data() {
    return {};
  },
  methods: {},
  render(h) {
    return (
      <div
        class={classes["overlay-account"]}
        onClick={e => e.stopPropagation()}
      >
        <div class={classes.tri}>
          <div class={classes.inner} />
        </div>
        <div class={classes.container}>
          <div class={classes.login}>
            <a href="/">登录</a>
          </div>
          <a class={classes.account} href="/">
            <div class={classes.icon}>
              <svg viewBox="0 0 64 64">
                <use
                  xlinkHref={
                    require("../../assets/svgs/logo.svg") +
                    "#Navbar-icon-settings"
                  }
                />
              </svg>
            </div>
            <div class={classes.text}>账户</div>
          </a>
          <a class={classes.register} href="/">
          <div class={classes.icon}>
              <svg viewBox="0 0 64 64">
                <use
                  xlinkHref={
                    require("../../assets/svgs/logo.svg") +
                    "#Navbar-icon-account-add"
                  }
                />
              </svg>
            </div>
            <div class={classes.text}>免费注册</div>
          </a>
        </div>
      </div>
    );
  }
};
