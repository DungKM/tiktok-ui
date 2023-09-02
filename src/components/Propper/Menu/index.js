import Tippy from "@tippyjs/react/headless";
import { PropperWrapper } from "~/components/Propper";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive
      // visible
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PropperWrapper className={cx("menu-propper")}>
            {renderItems()}
          </PropperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;