
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './views/Home';
import Information from './views/Information';
import TalentPool from './views/TalentPool';
import Institutions from './views/Institutions';
import Laws from './views/Laws';
import ServiceGuide from './views/ServiceGuide';
import About from './views/About';
import AdminDashboard from './views/AdminDashboard';
import Consultation from './views/Consultation';

const Navbar = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return null;

  const navItems = [
    { name: '首页', path: '/' },
    { name: '资讯', path: '/info' },
    { name: '涉外人才', path: '/talent' },
    { name: '涉外机构', path: '/institutions' },
    { name: '法规政策', path: '/laws' },
    { name: '服务指引', path: '/guide' },
    { name: '关于我们', path: '/about' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">东</span>
              </div>
              <span className="text-xl font-bold text-gray-900">东莞涉外法律服务平台</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium ${
                  location.pathname === item.path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'
                } py-5 px-1`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/admin" className="text-sm font-medium text-gray-400 hover:text-gray-600 border border-gray-200 rounded-md px-3 py-1">
              后台管理
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-bold mb-2">东莞涉外法律服务平台</p>
        <p className="text-sm mb-4">主办单位：东莞市律师协会</p>
        <p className="text-sm opacity-70">地址：广东省东莞市某某路123号 邮编：523000</p>
        <p className="text-sm mt-4 opacity-50">© 2024 东莞涉外法律服务平台. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Information />} />
            <Route path="/talent" element={<TalentPool />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/laws" element={<Laws />} />
            <Route path="/guide" element={<ServiceGuide />} />
            <Route path="/about" element={<About />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
