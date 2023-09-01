import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "~/components/AccountItem/AccountItem.module.scss";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        alt="Dũng"
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/f380dc95682d4a49aff9396b638edee1~c5_300x300.webp?x-expires=1693699200&x-signature=ErudhL5SPLFRjQvkuZNjRgC%2FWvo%3D"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Hoàng Anh Dũng</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>hoanganhdung</span>
      </div>
    </div>
  );
}

export default AccountItem;
