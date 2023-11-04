//Pages
import {
    HomePage,
    FollowingPage,
    ProfilePage,
    UploadPage,
    SearchPage,
} from '~/pages';

//Layouts
import { OnlyHeader } from '~/components/Layout';

// Route Public -- dành cho Customer không cần đăng nhập tài khoản vẫn có thể xem
const publicRouter = [
    { path: '/', component: <HomePage /> },
    { path: '/following', component: <FollowingPage /> },
    { path: '/:nickname', component: <ProfilePage /> },
    { path: '/upload', component: <UploadPage /> , layout: OnlyHeader },
    { path: '/search', component: <SearchPage />, layout: null },
];

// Route Private -- dành cho User  cần đăng nhập tài khoản mới có thể xem
const privateRouter = [];

export { publicRouter, privateRouter };
