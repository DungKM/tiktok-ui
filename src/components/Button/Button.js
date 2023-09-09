import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  children,
  disable = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  rounded = false,
  className,
  lefticon = false,
  righticon = false,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
  }
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
    lefticon,
    righticon,
  });
  return (
    <Comp className={classes} {...props}>
      {lefticon && <span className={cx("icon")}>{lefticon}</span>}

      {/* {lefticon && <span className={cx('icon')}>{lefticon}</span>} */}

      <span className={cx("title")}>{children}</span>
      {/* {righticon && <span className={cx('icon')}>{righticon}</span>} */}
    </Comp>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.bool,
  disable: PropTypes.bool,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.string,
  className: PropTypes.string,
  lefticon: PropTypes.node,
  righticon: PropTypes.node,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
