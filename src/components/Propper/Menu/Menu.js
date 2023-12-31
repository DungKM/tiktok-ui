import Tippy from "@tippyjs/react/headless";
import { PropperWrapper } from "~/components/Propper";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({
  children,
  items = [],
  onChange = defaultFn,
  hideOnClick = false,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  // Reset to first page
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
  const handleBackMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PropperWrapper className={cx("menu-propper")}>
        {history.length > 1 && (
          <Header title={current.title} onBack={handleBackMenu} />
        )}
        {renderItems()}
      </PropperWrapper>
    </div>
  );
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={renderResult}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
};
export default Menu;
