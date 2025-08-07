import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './_auth/Signin';
import Signup from './_auth/Signup';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* main homepage */}
        <Route index element={<Home></Home>}></Route>

        {/* auth routes */}
        <Route path="sign-in" element={<Signin></Signin>}></Route>
        <Route path="sign-up" element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
