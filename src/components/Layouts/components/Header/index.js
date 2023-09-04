import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMessage,
  faSearch,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { PropperWrapper } from "~/components/Propper";
import { useEffect, useState } from "react";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Propper/Menu";
import MenuItem from "~/components/Propper/Menu/MenuItem";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "Language",
          code: "en",
          title: "English",
        },
        {
          type: "Language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => setSearchResult([]), 0);
  }, []);
  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;
      default:
    }
  };
  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Logout",
      to: "/logout",
      separate : true
    },
  ]
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />
        <HeadlessTippy
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
        </HeadlessTippy>
        <div className={cx("action")}>
          {currentUser ? (
            <>
            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">

              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faCloudUpload} />
              </button>
            </Tippy>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              {/* <Button primary lefticon={ <FontAwesomeIcon icon={faSignIn} />}>Log in</Button> */}

              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu :  MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                alt="Hoang Anh Dung"
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/f380dc95682d4a49aff9396b638edee1~c5_300x300.webp?x-expires=1693699200&x-signature=ErudhL5SPLFRjQvkuZNjRgC%2FWvo%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
