import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import styles from './FollowingAccount.module.scss';

const cx = classNames.bind(styles);
function FollowingAccount({ title }) {
    const data = {
        nickname: 'anhngocc',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/eadc8a9fd333365d5973abdf7b9a219a~c5_300x300.webp?x-expires=1699333200&x-signature=uOnPJBOXZyFSCyccTWYaUHZC8wg%3D',
        full_name: 'anhngocc0411',
        tick: true,
    };
    return (
        <section className={cx('following-accounts')}>
            <div className={cx('title')}>Following accounts</div>
            <AccountItem className={cx('account-item')} data={data} />
            <AccountItem className={cx('account-item')} data={data} />
            <AccountItem className={cx('account-item')} data={data} />
            <AccountItem className={cx('account-item')} data={data} />
        </section>
    );
}

FollowingAccount.propTypes = {
    title: PropTypes.string.isRequired,
};
export default FollowingAccount;
