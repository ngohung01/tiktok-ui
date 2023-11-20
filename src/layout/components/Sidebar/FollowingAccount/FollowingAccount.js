import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import AccountItem from './AccountItem';
import styles from './FollowingAccount.module.scss';

// service
import { getSuggested } from '~/services';

const cx = classNames.bind(styles);

const PER_PAGE = 5;

function FollowingAccount({ title }) {
    const [followingUsers, setFollowingUsers] = useState([]);
    const [pageFollowing, setPageFollowing] = useState(1);


    useEffect(() => {
        const fetchApi = async () => {
            const res = await getSuggested({ page: pageFollowing, perpage: PER_PAGE });
            setFollowingUsers([...followingUsers,...res.data]);
        };
        fetchApi();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageFollowing]);
    // const data = {
    //     nickname: 'anhngocc',
    //     avatar: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/eadc8a9fd333365d5973abdf7b9a219a~c5_300x300.webp?x-expires=1699333200&x-signature=uOnPJBOXZyFSCyccTWYaUHZC8wg%3D',
    //     full_name: 'anhngocc0411',
    //     tick: true,
    // };

    // Handle events
    const handleSeeMore = () => {
       setPageFollowing(pageFollowing+1)
    }
    // console.log(followingUsers)
    return (
        <section className={cx('following-accounts')}>
            <div className={cx('title')}>Following accounts</div>
            {
                followingUsers.length > 0  && followingUsers.map(f =>( 
                    <AccountItem key={f.id} className={cx('account-item')} data={f} />
                ))
            }
            <p className={cx('more-btn')} onClick={handleSeeMore}>See more</p>
        </section>
    );
}

FollowingAccount.propTypes = {
    title: PropTypes.string.isRequired,
};
export default FollowingAccount;
