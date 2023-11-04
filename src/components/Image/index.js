import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import images from '~/assets/images';
import styles from './ImageDefault.module.scss';
function Image(
    {
        src,
        alt,
        fallback: customFallback = images.user_img_default,
        className,
        ...props
    },
    ref,
) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
