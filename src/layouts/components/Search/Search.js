import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { PropperWrapper } from "~/components/Propper";
import { useEffect, useState, useRef } from "react";
import AccountItem from "~/components/AccountItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { SearchIcon } from "~/components/Icon";
import { useDebounce } from "~/hooks";
import * as searchServices from "~/services/searchService";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(searchValue, 500);
  const inputRef = useRef();
  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debouncedValue);
      console.log(result);
      setSearchResult(result);

      setLoading(false);
    };
    fetchApi();
  }, [debouncedValue]);
  const handleSearchValue = () => {
    setSearchValue("");
    inputRef.current.focus();
    setSearchResult([]);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PropperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PropperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and video"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleSearchValue}>
            {/* *Clear */}
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        {/**Loading */}
        <button className={cx("search-btn")}>
          <SearchIcon />
          {/* Search */}
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
