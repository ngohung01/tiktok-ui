import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {
    faArrowRightFromBracket,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faMagnifyingGlass,
    faSpinner,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import images from '~/assets/images';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWraper } from '~/components/Popper';
import {
    faBookmark,
    faCircleQuestion,
    faKeyboard,
    faMessage,
    faUser,
} from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Languages 1',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'English 1',
                            },
                            {
                                type: 'language',
                                code: 'vi',
                                title: 'Tiếng Việt 1',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
        children: {
            title: 'Keyboard',
            data: [
                {
                    type: 'keyboard',
                    title: 'faChevronLeft',
                },
                {
                    type: 'keyboard',
                    title: 'faChevronRight',
                },
            ],
        },
    },
];

const USER_MENU_ITEMS = currentUser && [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '@anhngoc',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: 'settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: 'logout',
        separate: true,
    },
];

// Handle events
function handleChangeMenu(menuItem) {
    switch (menuItem.type) {
        case 'language':
            // console.log('language')
            break;
        default:
            break;
    }
    console.log(menuItem);
}
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
                <HeadlessTippy
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
                </HeadlessTippy>
                {/* Action */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload" delay={[0, 100]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon
                                        className={cx('action-icon')}
                                        icon={faCloudUpload}
                                    />
                                </button>
                            </Tippy>
                            <Tippy content="Message" delay={[0, 100]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon
                                        className={cx('action-icon')}
                                        icon={faMessage}
                                    />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    {currentUser ? (
                        <>
                            <Menu
                                items={USER_MENU_ITEMS}
                                isUser
                                onChange={handleChangeMenu}
                            >
                                <img
                                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/eadc8a9fd333365d5973abdf7b9a219a~c5_300x300.webp?x-expires=1698850800&x-signature=Lf3ziMLRUzV%2FIikao4SMdAUrG9M%3D"
                                    alt="anhngoc0411"
                                    className={cx('user-avatar')}
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Menu
                                items={MENU_ITEMS}
                                onChange={handleChangeMenu}
                            >
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
