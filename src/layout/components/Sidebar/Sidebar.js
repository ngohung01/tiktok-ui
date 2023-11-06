import classNames from 'classnames/bind';

import { routes } from '~/configs';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    HomeActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import FollowingAccount from './FollowingAccount';

const cx = classNames.bind(styles);

function Sidebar() {
   

    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={routes.root}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>

            {/* Following Accounts */}
            <FollowingAccount title={'Following accounts'}/>
        </div>
    );
}

export default Sidebar;
