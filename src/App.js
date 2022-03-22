import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardHomePage from './Pages/Dashboard/DashboardHomePage/DashboardHomePage';
import AddReview from './Pages/Dashboard/UserPages/AddReview/AddReview';
import Doctors from './Pages/DoctorsRoute/Doctors/Doctors';
import GetAppointment from './Pages/Home/GetAppointment/GetAppointment';
import Homepage from './Pages/Home/Homepage/Homepage';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Registration/Signin/Login';
import Register from './Pages/Registration/SignUp/Register';
import Services from './Pages/ServicesRoute/Services/Services';
import AuthProvider from './Pages/Shared/AuthProvider/AuthProvider';
import AllReviews from './Pages/Dashboard/AdminPages/AllReviews/AllReviews';
import AllAppointments from './Pages/Dashboard/AdminPages/AllAppointments/AllAppointments';
import MyAppointments from './Pages/Dashboard/UserPages/MyAppointments/MyAppointments';
import MainDashboard from './Pages/Dashboard/MainDashboard/MainDashboard';
import MakeAdmin from './Pages/Dashboard/AdminPages/MakeAdmin/MakeAdmin';
import MyReviews from './Pages/Dashboard/UserPages/MyReviews/MyReviews';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/servicePage" element={<Services />}></Route>
          <Route path="/serviceDetail/:id" element={<ServiceDetail />}></Route>

          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/doctors/:id"
            element={
              <PrivateRoute>
                <GetAppointment />

              </PrivateRoute>

            }>

          </Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route
            path="/addReview/:id"
            element={
              <PrivateRoute>
                <AddReview></AddReview>
              </PrivateRoute>

            }
          />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <MainDashboard />
            </PrivateRoute>

          }>

            <Route
              path="/dashboard/makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin></MakeAdmin>

                </AdminRoute>

              }
            />
            <Route
              path="/dashboard/allReviews"
              element={
                <AdminRoute>
                  <AllReviews></AllReviews>

                </AdminRoute>

              }
            />
            <Route
              path="/dashboard/appliedAppointments"
              element={
                <AdminRoute>
                  <AllAppointments></AllAppointments>

                </AdminRoute>

              }
            />
            {/* //All Users Private Routes */}
            <Route
              path="/dashboard/myAppointments"
              element={
                <PrivateRoute>
                  <MyAppointments></MyAppointments>

                </PrivateRoute>

              }
            />
            <Route
              path="/dashboard/myReviews"
              element={
                <PrivateRoute>
                  <MyReviews></MyReviews>

                </PrivateRoute>

              }
            />

          </Route>
        </Routes>
      </BrowserRouter >
    </AuthProvider>
  );
}

export default App;
