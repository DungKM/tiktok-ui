import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />
        <div className={cx("search")}>
          <input placeholder="Search accounts and video" spellCheck={false} />
          <button className={cx("clear")}>
            {/**Clear */}
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
          {/**Loading */}
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faSearch} />

            {/* Search */}
          </button>
        </div>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
