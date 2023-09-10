import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f2c2327966661c05147bb646641b69d0~c5_100x100.jpeg?x-expires=1694437200&x-signature=ENz0RaamzPX1smNL4JJWl5ipelQ%3D"
          alt=""
        />
        <Button primary className = {cx('follow-btn')}>Follow</Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>hoanganhdung</strong>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </p>
        <p className={cx("name")}>Hoàng Anh Dũng</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Follower</span>
          <strong className={cx("value")}>456.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
