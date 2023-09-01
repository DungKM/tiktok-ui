import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { PropperWrapper } from "~/components/Propper";
import { useEffect, useState } from "react";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => setSearchResult([1, 2, 3]), 0);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy
        interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PropperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PropperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
