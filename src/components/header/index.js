import classes from "./index.scss";
import OverlayGame from "../overlay-game";
import OverlayAccount from "../overlay-account";

export default {
  data() {
    return {
      overlayShow: false,
      dropDownType: "game"
    };
  },
  methods: {
    dropDownGame() {
      if (this.dropDownType !== "game" && this.overlayShow) {
        this.dropDownType = "game";
        this.overlayShow = true;
        return;
      }
      this.dropDownType = "game";
      this.overlayShow = !this.overlayShow;
    },
    dropDownAccount() {
      if (this.dropDownType !== "account" && this.overlayShow) {
        this.dropDownType = "account";
        this.overlayShow = true;
        return;
      }
      this.dropDownType = "account";
      this.overlayShow = !this.overlayShow;
    }
  },
  render(h) {
    return (
      <div class={classes.header}>
        <div class={classes.container}>
          <a class={classes.logo} href="/">
            <svg viewBox="0 0 151.15 68.46">
              <use
                xlinkHref={
                  require("../../assets/svgs/logo.svg") +
                  "#Navbar-logo-blizzard"
                }
              />
            </svg>
          </a>
          <div class={classes.menu}>
            <a class={classes.item} onClick={this.dropDownGame}>
              游戏
              <span
                class={{
                  [classes.arrow]: true,
                  [classes["arrow-down"]]:
                    this.overlayShow && this.dropDownType === "game"
                }}
              >
                <svg viewBox="0 0 151.15 68.46">
                  <use
                    xlinkHref={
                      require("../../assets/svgs/logo.svg") +
                      "#Navbar-arrow-blizzard"
                    }
                  />
                </svg>
              </span>
            </a>
            <a href="/" class={classes.item}>
              商城
            </a>
            <a href="/" class={classes.item}>
              新闻
            </a>
            <a href="/" class={classes.item}>
              电子竞技
            </a>
            <a href="/" class={classes.item}>
              BlizzCon
            </a>
          </div>
          <div class={[classes.profile, classes.menu]}>
            <a href="/" class={classes.item}>
              支持
            </a>
            <a class={classes.item} onClick={this.dropDownAccount}>
              我的账户
              <span
                class={{
                  [classes.arrow]: true,
                  [classes["arrow-down"]]:
                    this.overlayShow && this.dropDownType === "account"
                }}
              >
                <svg viewBox="0 0 151.15 68.46">
                  <use
                    xlinkHref={
                      require("../../assets/svgs/logo.svg") +
                      "#Navbar-arrow-blizzard"
                    }
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        {this.overlayShow ? (
          <div
            class={classes.overlay}
            onClick={e => (this.overlayShow = false)}
          >
            {this.dropDownType === "game" ? (
              <OverlayGame />
            ) : (
              <OverlayAccount />
            )}
          </div>
        ) : null}
      </div>
    );
  },
  components: {
    OverlayGame,
    OverlayAccount
  }
};
