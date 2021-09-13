import React from "react";

import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
    return (
        <form class="search-container my-2- my-lg-0-">
            <input
                id="search-box"
                className="search-box form-control- mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />

            <label class="search-icon-container" for="search-box">
                <span class="search-icon">

                    <FaSearch />
                </span>
            </label>

            <button
                class="search-btn btn- btn-outline-success- my-2- my-sm-0-"
                type="submit"
            >
                Search movie...
            </button>
        </form>
    );
};

export default SearchBar;
