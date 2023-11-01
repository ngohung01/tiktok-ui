import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function AccountItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/eadc8a9fd333365d5973abdf7b9a219a~c5_300x300.webp?x-expires=1698850800&x-signature=Lf3ziMLRUzV%2FIikao4SMdAUrG9M%3D"
                alt="Ngoc"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>anhngocc0411</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ng đẹp gây thương nhớ</span>
            </div>
        </div>
    );
}

export default AccountItem;
