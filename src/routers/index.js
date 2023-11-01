//Pages
import { HomePage,FollowingPage,ProfilePage,UploadPage,SearchPage } from "~/pages";

//Layouts
import { OnlyHeader } from "~/components/Layout";

// Route Public -- dành cho Customer không cần đăng nhập tài khoản vẫn có thể xem
const publicRouter = [
    { path: '/', ReactElement: <HomePage /> },
    { path: '/following', ReactElement: <FollowingPage /> },
    { path: '/profile', ReactElement: <ProfilePage /> },
    { path: '/upload', ReactElement: <UploadPage />, layout : OnlyHeader },
    { path: '/search', ReactElement: <SearchPage />, layout : null },


];

// Route Private -- dành cho User  cần đăng nhập tài khoản mới có thể xem
const privateRouter = [];

export { publicRouter, privateRouter };
