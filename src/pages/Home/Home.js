import classNames from "classnames/bind";

import RandomAccount from "./RandomAccount";

import styles from './Home.module.scss'

const cx= classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('one-column')}>
                <RandomAccount/>
            </div>
        </div>
    )
}

export default Home;
