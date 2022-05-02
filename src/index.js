import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  TempleListing,
  PoojariListing,
  TempleDetail,
  PoojariDetail,
  LoginSignup,
  ForgotPassword,
  NewPassword,
  CreateTemple,
  PoojariDashboard,
  Profile,
  Enquiries,
  Transactions,
  Appointments,
  AccountSettings,
  CloseAccount,
  TempleDashboard,
  AddBlog,
  MyBlogList,
  About,
  Contact,
  PrivacyPolicy,
  TermsAndConditions,
  FAQ,
  BlogList,
  BlogDetail,
  PoojaList,
  PoojaDetail,
  CulturalSignificanceList,
  CulturalSignificanceDetail,
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/temple-listing" element={<TempleListing />} />
      <Route path="/poojari-listing" element={<PoojariListing />} />
      <Route path="/temple-detail" element={<TempleDetail />} />
      <Route path="/poojari-detail" element={<PoojariDetail />} />
      <Route path="/signup" element={<LoginSignup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/create-temple" element={<CreateTemple />} />
      <Route path="/poojari-dashboard" element={<PoojariDashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/enquiries" element={<Enquiries />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route path="/close-account" element={<CloseAccount />} />
      <Route path="/temple-dashboard" element={<TempleDashboard />} />
      <Route path="/add-blog" element={<AddBlog />} />
      <Route path="/my-blog-list" element={<MyBlogList />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog-list" element={<BlogList />} />
      <Route path="/blog-detail" element={<BlogDetail />} />
      <Route path="/pooja-list" element={<PoojaList />} />
      <Route path="/pooja-detail" element={<PoojaDetail />} />
      <Route path="/cultural-significance-list" element={<CulturalSignificanceList />} />
      <Route path="/cultural-significance-detail" element={<CulturalSignificanceDetail />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);