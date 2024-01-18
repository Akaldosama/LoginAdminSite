import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "./Auth";
import Admin from "./Admin";
import SuperAdmin from "./SuperAdmin";
import "./App.css";

import SiteThings from "./SiteThings/SiteThings";
import Works from "./SiteThings/Works";
import Blog from "./SiteThings/Blog";
import Contact from "./SiteThings/Contact";

export default function App() {
  return (
    <div>
      <nav>
        <p className="logo fs-4 fw-bold">
          <Link to='/' className='link'>Home</Link>
        </p>
        <ul className="d-flex gap-4">
          <li>
            <Link to="/works" className="link">
              Works
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/auth" className="btn btn-primary fs-5">
              Log in
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<SiteThings />}></Route>
        <Route path="works" element={<Works />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="auth" element={<Auth />}></Route>
        <Route path="admin" element={<Admin />}></Route>
        <Route path="super_admin" element={<SuperAdmin />}></Route>
      </Routes>

      <hr />

      <footer>
        <ul className="d-flex gap-4 fs-3">
          <li>
            <i class="fa-brands fa-square-facebook"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i class="fa-brands fa-linkedin"></i>
          </li>
        </ul>
        <p>Copyright ©2020 All rights reserved</p>
      </footer>
    </div>
  );
}
