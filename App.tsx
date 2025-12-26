
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">东</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900 truncate">东莞涉外法律服务平台</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
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

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">打开主菜单</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-16 z-40`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={closeMenu}
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-400 hover:bg-gray-50 hover:text-gray-600 border-t border-gray-100 mt-2"
          >
            后台管理系统
          </Link>
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
        <p className="text-sm opacity-70">地址：广东省东莞市南城区天安数码科技城F3座11楼</p>
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
