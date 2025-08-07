import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

const Routes = () => {
  return (
    <Routes>
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
export default Routes