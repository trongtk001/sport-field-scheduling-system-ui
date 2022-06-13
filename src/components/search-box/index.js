import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import callApi from "../../util/api";
import styles from "./SearchBox.module.scss";
import searchService from "../../Service/searchService";
const cx = classNames.bind(styles);

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const inputRef = useRef();

  return (
    <div className={cx("search-box")}>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.trim())}
        type="text"
        placeholder="Search"
      />

      <Link to="/search" type="submit" onClick={() => searchService(searchValue)} onMouseDown={e => e.preventDefault()}>
        <FontAwesomeIcon
          className={cx("search-icon")}
          icon={faMagnifyingGlass}
        />
      </Link>
    </div>
  );
}

export default SearchBox;
