import Tippy from "@tippyjs/react/headless";
import { PropperWrapper } from "~/components/Propper";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data : items}]);
  const current = history[history.length - 1]
console.log(current);

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children
      return <MenuItem key={index} data={item} onClick={() => {
        if(isParent){
          setHistory((prev) => [...prev, item.children])
        }else{
          onChange(item)
        }
      }} />
    });
  };
  return (
    <Tippy
      interactive
      visible
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PropperWrapper className={cx("menu-propper")}>
            {history.length > 1 && <Header title="Language"  onBack={()=> {
              setHistory(prev => prev.slice(0, prev.length - 1))
            }}/>}
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
