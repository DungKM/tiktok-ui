import Header from "~/layouts/components/Header";
import SideBar from "../components/SideBar";
import styles from "./DefaultLayout.modul.scss";
import classNames from "classnames/bind";
import PropTypes from 'prop-types'
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <SideBar />
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DefaultLayout;
