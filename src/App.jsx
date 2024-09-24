import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Footer from "./components/Footer.jsx/Footer.jsx";
import Project from "./pages/project/Project.jsx";
import ContactUs from "./pages/contactus/ContactUs.jsx";
import SinglePropertyPage from "./pages/singlepropertypage/SinglePropertyPage.jsx";
import AboutUs from "./pages/aboutus/AboutUs.jsx";
import Disclaimer from "./pages/disclaimer/Disclaimer.jsx";
import Faqs from "./pages/faqs/Faqs.jsx";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy.jsx";
import TermConditions from "./pages/termscondition/TermConditions.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Blog from "./pages/blog/Blog.jsx";
import SingleBlog from "./pages/blog/SingleBlog/SingleBlog.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import Dashboard from "./dashboardPages/dashboard/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword.jsx";
import ResetPassword from "./pages/resetpassword/ResetPassword.jsx";
import SideBar from "./dashboardPages/sidebar/SideBar.jsx";
import AddAbout from "./dashboardPages/addabout/AddAbout.jsx";
import AddTestimonial from "./dashboardPages/testimonial/AddTestimonial.jsx";
import AddBlog from "./dashboardPages/addblog/AddBlog.jsx";
import AllBlogs from "./dashboardPages/allblogs/AllBlogs.jsx";
import EditBlog from "./dashboardPages/editblog/EditBlog.jsx";
import PostProperty from "./dashboardPages/postproperty/PostProperty.jsx";
import AllProperty from "./dashboardPages/allproperty/AllProperty.jsx";
import EditProperty from "./dashboardPages/EditProperty/EditProperty.jsx";

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const AdminLayout = () => (
  <>
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideBar />
      <main className="flex-1 items-start gap-4 p-4 sm:ml-52 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <Outlet />
      </main>
    </div>
  </>
);

const AuthLayout = () => <Outlet />;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main website routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
          <Route path="/projects/:slug" element={<SinglePropertyPage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermConditions />} />
        </Route>

        {/* Admin panel routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/testimonial" element={<AddTestimonial />} />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/allblogs" element={<AllBlogs />} />
            <Route path="/editblog/:id" element={<EditBlog />} />
            <Route path="/postproperty" element={<PostProperty />} />
            <Route path="/editproperty/:id" element={<EditProperty />} />
            <Route path="/allproperty" element={<AllProperty />} />
            <Route path="/addabout" element={<AddAbout />} />
            {/* Add more admin routes here */}
          </Route>
        </Route>

        {/* Authentication routes */}
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
        </Route>

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
