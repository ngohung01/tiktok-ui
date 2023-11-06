import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './FollowingAccount.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ className, data }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('account-item', className)}>
            <img
                src={data.avatar}
                alt={data.full_name}
                className={cx('account-avt')}
            />
            <div className={cx('account-info')}>
                <h4 className={cx('full-name')}>
                    {data.full_name}
                    <span className={cx('account-tick')}>
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                    </span>
                </h4>
                <p className={cx('nick-name')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    classNames: PropTypes.string,
    data: PropTypes.object.isRequired,
};
export default AccountItem;
