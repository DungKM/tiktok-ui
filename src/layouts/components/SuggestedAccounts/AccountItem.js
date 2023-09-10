import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { PropperWrapper } from "~/components/Propper";
import AccountPreview from "./AccountPreview";
const cx = classNames.bind(styles);
const renderPreview = (props) => {
  return (
    <div className={cx("preview")} tabIndex="-1" {...props}>
      <PropperWrapper>
        <AccountPreview />
  
      </PropperWrapper>
    </div>
  );
};
function AccountItem() {
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        render={renderPreview}
        placement="bottom"
        offset={[-20, 0]}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f2c2327966661c05147bb646641b69d0~c5_100x100.jpeg?x-expires=1694437200&x-signature=ENz0RaamzPX1smNL4JJWl5ipelQ%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>hoanganhdung</strong>
              <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
            </p>
            <p className={cx("name")}>Hoàng Anh Dũng</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {
  label: PropTypes.string.isRequired,
};
export default AccountItem;
