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
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import Search from './pages/Search';
// import AdminSignin from './pages/Admin.Signin';
// import AdminSignup from './pages/Admin.Signup';
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'





export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} /> */}
          <Route path='/sign-in' element={currentUser ? <Navigate to="/" /> : <SignIn />} />
          <Route path='/sign-up' element={currentUser ? <Navigate to="/" /> : <SignUp />} />
          <Route path='/search' element={<Search />} />

          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post/:postId' element={<UpdatePost />} />
          </Route>

          <Route path='/projects' element={<Projects />} />
          <Route path='/post/:postSlug' element={<PostPage />} />
          {/* <Route path='/admin-signin' element={<AdminSignin />} />
          <Route path='/admin-signup' element={<AdminSignup />} /> */}
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </div >
  )
}
