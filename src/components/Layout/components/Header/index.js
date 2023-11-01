import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {
    faEarthAsia,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import images from '~/assets/images';

import { Wrapper as PopperWraper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts',
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/* Search */}
                <Tippy
                    // disabled
                    // hideOnClick
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <PopperWraper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWraper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        ></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                {/* Action */}
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>

                    <Menu
                        items={MENU_ITEMS}
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>

                </div>
            </div>
        </div>
    );
}

export default Header;
