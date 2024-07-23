import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import 'flowbite/dist/flowbite.css';
import FooterCom from './components/Footer'
import PrivateRoute from './components/PrivateRoute';
// import AdminSignin from './pages/Admin.Signin';
// import AdminSignup from './pages/Admin.Signup';




export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />

          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>

          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/admin-signin' element={<AdminSignin />} />
          <Route path='/admin-signup' element={<AdminSignup />} /> */}
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </div >
  )
}
