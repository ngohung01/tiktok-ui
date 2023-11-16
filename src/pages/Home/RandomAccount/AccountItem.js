import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faMusic } from '@fortawesome/free-solid-svg-icons';

import CommonLink from './CommonLink';
import Image from '~/components/Image';
import Button from '~/components/Button';
import VideoItem from '~/components/VideoItem';

import styles from './RandomAccount.module.scss';

const cx = classNames.bind(styles);

function AccountItem({data}) {
    console.log(data)
    const musicAuthor = data.popular_video.music;
    const videoDesc = data.popular_video.description;
    return (
        <div className={cx('account-item')}>
            <Link to={`/${data.nickname}`} className={cx('account-avt')}>
                <Image
                    // src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b83015f34e14ce7735c2d8c3bda97755~c5_100x100.jpeg?x-expires=1699668000&x-signature=eyOnkPA%2FODpy2lU3DYhMW8mjTOk%3D"
                    src={data.avatar}
                    alt={data.nickname}
                />
            </Link>
            <div className={cx('content')}>
                <div className={cx('header-content')}>
                    <div className={cx('account-info')}>
                        <div>
                            <Link className={cx('author-text')}>
                                <h3 className={cx('nick-name')}>
                                   {data.nickname}
                                </h3>
                                <h4 className={cx('full-name')}>
                                    {`${data.first_name} ${data.last_name}`}
                                </h4>
                            </Link>
                        </div>
                        {/* Description */}
                        {videoDesc &&  <div className={cx('video-desc')}>{ videoDesc}</div>}
                        {/*  */}
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
                                {musicAuthor || 'original-sound'}
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
                <VideoItem data={data.popular_video.file_url}/>
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
