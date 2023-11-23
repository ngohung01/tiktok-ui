import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import { useContext } from 'react';

import { Header } from '~/layout/components';
import Sidebar from '../components/Sidebar/Sidebar';
import ModalMenuItem from '~/components/ModalMenuItem';
import { ModalContext } from '~/components/ModalProvider';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const modalContext = useContext(ModalContext)

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            {modalContext.isOpen && <ModalMenuItem/>}
        </div>
    );
}


DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;
