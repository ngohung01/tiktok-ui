import classNames from "classnames/bind";

import AccountItem from "./AccountItem";

import styles from './RandomAccount.module.scss'

const cx= classNames.bind(styles)

function RandomAccounts() {
    return ( 
        <div className={cx('wrapper')}>
            <AccountItem/>
        </div>
     );
}

export default RandomAccounts;