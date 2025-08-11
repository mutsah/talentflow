import { Routes, Route, useLocation } from 'react-router-dom';

import Signin from './_auth/Signin';
import Signup from './_auth/Signup';
import WebsiteLayout from './_root/website/WebsiteLayout';
import Home from './_root/website/pages/Home';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* main homepage */}
        {/* <Route index element={<Home></Home>}></Route> */}

        {/* website */}
        <Route element={<WebsiteLayout></WebsiteLayout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>

        {/* auth routes */}
        <Route path="sign-in" element={<Signin></Signin>}></Route>
        <Route path="sign-up" element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
