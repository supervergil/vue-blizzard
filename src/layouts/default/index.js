import classes from "./index.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default {
  data() {
    return {};
  },
  render(h) {
    return (
      <div class={classes.default}>
        <Header />
        <router-view />
        <Footer />
      </div>
    );
  },
  components: {
    Header,
    Footer
  }
};
