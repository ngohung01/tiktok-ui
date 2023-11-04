import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';

import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem({ children, data }) {
    const linkAvtDefault =
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/eadc8a9fd333365d5973abdf7b9a219a~c5_300x300.webp?x-expires=1698850800&x-signature=Lf3ziMLRUzV%2FIikao4SMdAUrG9M%3D';
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar || linkAvtDefault}
                alt={data.full_name || 'Ngoc'}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name || 'anhngocc0411'}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <span className={cx('username')}>
                    {data.nickname || 'ng đẹp gây thương nhớ'}
                </span>
            </div>
        </Link>
    );
}

export default AccountItem;
