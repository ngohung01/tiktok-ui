import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import {
    faArrowRightFromBracket,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import {
    faBookmark,
    faCircleQuestion,
    faKeyboard,
    faUser,
} from '@fortawesome/free-regular-svg-icons';

import Search from '../Search';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    InBoxIcon,
    MessageIcon,
    UpLoadIcon,
} from '~/components/Icons';

import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

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

const USER_MENU_ITEMS =[
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
    const currentUser = true;
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/* Search */}
                <Search/>
                {/* Action */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload" delay={[0, 100]}>
                                <button className={cx('action-btn')}>
                                    <UpLoadIcon className={cx('action-icon')} />
                                </button>
                            </Tippy>
                            <Tippy content="Messages" delay={[0, 100]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon
                                        className={cx('action-icon')}
                                    />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" delay={[0, 100]}>
                                <button className={cx('action-btn')}>
                                    <InBoxIcon className={cx('action-icon')} />
                                    {/* Badge : huy hiệu */}
                                    <span className={cx('badge')}>10</span>
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
                                <Image
                                    src="shttps://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/eadc8a9fd333365d5973abdf7b9a219a~c5_300x300.webp?x-expires=1698850800&x-signature=Lf3ziMLRUzV%2FIikao4SMdAUrG9M%3D"
                                    alt="anhngoc0411"
                                    className={cx('user-avatar')}
                                    fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/e377f27d3c3ffcc7b180cf2b318c638c~c5_720x720.jpeg?x-expires=1699153200&x-signature=u0Z%2F5lpqDIy9W8DIlPp6dTkpXdU%3D"
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
