import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './VideoItem.module.scss';
import { PlayIcon, PauseIcon, VolumeIcon, MuteIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoItem() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const [progess, setProgess] = useState(0);
    const translateControlCircleY = progess * 36; // controls circle có thể tịnh tiến max là 36px

    const videoRef = useRef(null);
    const baretRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        videoRef.current.volume = progess ;
    }, [progess]);
    const handlePlayVideo = () => {
        setIsPlaying(!isPlaying);
    };
    const handleMute = () => {
        setIsMute(!isMute);
    };

    const handleControlVolume = (e) => {
        const infoRect = e.target.getBoundingClientRect();

        const progessCal = () => {
            const subtraction = infoRect.bottom - e.clientY;
            if (subtraction >= 48) {
                return 1;
            } else if (subtraction > 0 && subtraction < 48)
                return subtraction / 48;
        };

        const newProgess = progessCal();
        console.log(e.target,infoRect,newProgess);
        setProgess(newProgess);
        // console.log(e.target,infoRect);
    };
    return (
        <div className={cx('video-wrapper')}>
            <div className={cx('video-card')}>
                <video
                    ref={videoRef}
                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/3177-654b9e6dc23d4.mp4"
                    
                    // controls
                ></video>
                <div className={cx('controls')} tabIndex={0}>
                    <span
                        className={cx('control-play')}
                        onClick={handlePlayVideo}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </span>
                    <div className={cx('voice-control')}>
                        <div className={cx('volume-control')}>
                            <div
                                className={cx('control-progess')}
                                onClick={(e) => handleControlVolume(e)}
                            ></div>
                            <div
                                ref={baretRef}
                                className={cx('control-baret')}
                                style={{
                                    transform: `scaleY(${progess})`,
                                }}
                                onClick={(e) => {
                                    handleControlVolume(e);
                                }}
                            ></div>
                            <div
                                className={cx('control-circle')}
                                style={{
                                    transform: `translateY(-${translateControlCircleY}px)`,
                                }}
                            ></div>
                        </div>
                        <div className={cx('video-sound')} onClick={handleMute}>
                            {isMute ? <MuteIcon /> : <VolumeIcon />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
