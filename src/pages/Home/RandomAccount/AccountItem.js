import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import VideoItem from '~/components/VideoItem';

import styles from './RandomAccount.module.scss';
import CommonLink from './CommonLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Link to="/tom_and_jerry287" className={cx('account-avt')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b83015f34e14ce7735c2d8c3bda97755~c5_100x100.jpeg?x-expires=1699668000&x-signature=eyOnkPA%2FODpy2lU3DYhMW8mjTOk%3D"
                    alt="tom_and_jerry287"
                />
            </Link>
            <div className={cx('content')}>
                <div className={cx('header-content')}>
                    <div className={cx('account-info')}>
                        <div>
                            <Link className={cx('author-text')}>
                                <h3 className={cx('nick-name')}>
                                    tom_and_jerry287
                                </h3>
                                <h4 className={cx('full-name')}>
                                    tom_and_jerry287
                                </h4>
                            </Link>
                        </div>
                        <div className={cx('style-links')}>
                            <CommonLink title="#foodie" />
                            <CommonLink title="#foodies" />
                            <CommonLink title="#foodietokph" />
                            <CommonLink title="#foodieph" />
                            <CommonLink title="#foodietiktok" />
                            <CommonLink title="#foodietok" />
                        </div>
                        <Link
                            to={`music/original-sound-7290399805107489566`}
                            className={cx('music-wrapper')}
                        >
                            <FontAwesomeIcon
                                icon={faMusic}
                                className={cx('music-icon', 'icon')}
                            />
                            <p className={cx('music-text')}>
                                original sound - Audra Higbie
                            </p>
                        </Link>
                        <Link
                            to={`place/Sphere-Event-venue-22535865216393649`}
                            className={cx('anchor-wrapper')}
                        >
                            <FontAwesomeIcon
                                icon={faAnchor}
                                className={cx('anchor-icon', 'icon')}
                            />
                            <p className={cx('anchor-text')}>
                                Sphere Event venue · Las Vegas
                            </p>
                        </Link>
                    </div>
                    <Button outline>Follow</Button>
                </div>

                {/* Video Item */}
                <VideoItem/>
                {/* <div className={cx('video-wrapper')}>
                    <div className={cx('video-card')}>
                        <video
                            width={'100%'}
                            height={'100%'}
                            preload="auto"
                            src='https://files.fullstack.edu.vn/f8-tiktok/videos/3177-654b9e6dc23d4.mp4'
                            // controls
                        >
                        </video>

                    </div>
                </div> */}
            </div>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
