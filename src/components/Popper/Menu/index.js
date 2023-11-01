import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWraper } from '~/components/Popper';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function Menu({ items = [], children }) {
    const renderItems = () => {
        return items.map((item, i) => {
            return (
                <MenuItem
                    key={`item-${i}`}
                    className={cx('menu-item')}
                    data={item}
                />
            );
        });
    };
    return (
        <Tippy
            // disabled
            // hideOnClick
            placement="bottom-end"
            interactive
            visible
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWraper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWraper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
