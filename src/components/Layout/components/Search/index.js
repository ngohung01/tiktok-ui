import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

// Import file custom
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWraper } from '~/components/Popper';

// Import custom hook
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

// Function component
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isShowResult, setIsShowResult] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const inRef = useRef();

    const debounceSearch = useDebounce(searchValue,700);

    useEffect(() => {
        let ignore = false;
        if(!debounceSearch.trim()) {
            setSearchResult([])
            return;
        }
        setIsLoading(true);
        async function fetchAPI() {
            await fetch(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounceSearch)}&type=less`,
            )
                .then((response) => response.json())
                .then((response) => {
                    // console.log(response);
                    if(!ignore) {
                        setSearchResult(response.data);
                        setIsLoading(false);
                    }
                });
        }
        fetchAPI()
        return () => {
            ignore = true;
        }
    }, [debounceSearch]);
    
    // Handle events
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inRef.current.focus();
    };

    const handleHideResult = () => {
        setIsShowResult(false);
    };
    return (
        <HeadlessTippy
            // disabled
            // hideOnClick
            interactive
            visible={isShowResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                    <PopperWraper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((data) => (
                            <AccountItem key={data.id} data={data} />
                        ))}
                        {/* <AccountItem />
                        <AccountItem />
                        <AccountItem /> */}
                    </PopperWraper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsShowResult(true)}
                />
                {searchValue && !isLoading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                )}
                {isLoading && (
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
