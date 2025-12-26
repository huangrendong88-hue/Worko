
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const menuGroups = [
    {
      title: '会员管理',
      items: [
        { name: '涉外法治人才库维护', path: '/admin/talent' },
        { name: '涉外法律服务机构维护', path: '/admin/institutions' },
        { name: '涉外法律服务中心人员维护', path: '/admin/staff' },
      ]
    },
    {
      title: '办公管理',
      items: [
        { name: '涉外法律在线咨询后台管理', path: '/admin/consultations' },
      ]
    },
    {
      title: '系统管理',
      items: [
        { name: '资讯管理', path: '/admin/info' },
        { name: '通知公告管理', path: '/admin/notices' },
        { name: '法规政策管理', path: '/admin/laws' },
        { name: '培训、活动信息发布管理', path: '/admin/events' },
        { name: '服务指引管理', path: '/admin/guides' },
        { name: '关于我们管理', path: '/admin/about' },
      ]
    }
  ];

  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-900 min-h-screen text-white shrink-0">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-lg font-bold">后台管理系统</h1>
      </div>
      <nav className="p-4 space-y-8">
        {menuGroups.map((group, idx) => (
          <div key={idx}>
            <h2 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4 px-2">{group.title}</h2>
            <ul className="space-y-1">
              {group.items.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-sm transition ${
                      location.pathname === item.path ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="pt-8 px-2">
            <Link to="/" className="text-sm text-gray-500 hover:text-white flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                回到前台
            </Link>
        </div>
      </nav>
    </aside>
  );
};

const AdminOverview = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">管理概览</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { label: '人才总数', val: '1,284', color: 'bg-blue-500' },
        { label: '机构总数', val: '156', color: 'bg-green-500' },
        { label: '今日咨询', val: '42', color: 'bg-yellow-500' },
        { label: '待处理', val: '12', color: 'bg-red-500' },
      ].map((s, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-2">{s.label}</div>
          <div className="text-3xl font-bold">{s.val}</div>
        </div>
      ))}
    </div>
    
    <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold mb-4">最近咨询记录</h3>
        <table className="w-full text-left">
            <thead>
                <tr className="border-b text-gray-400 text-sm">
                    <th className="py-2">时间</th>
                    <th className="py-2">用户</th>
                    <th className="py-2">咨询领域</th>
                    <th className="py-2">状态</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {[1,2,3,4,5].map(i => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="py-3 text-gray-500">2024-05-22 10:2{i}</td>
                        <td className="py-3 font-medium">用户_{i}88</td>
                        <td className="py-3">国际贸易/RCEP</td>
                        <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">已回复</span></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  </div>
);

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <AdminSidebar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<AdminOverview />} />
          <Route path="/talent" element={<div className="p-8"><h2 className="text-2xl font-bold">人才库管理</h2><p className="mt-4 text-gray-500">这里是人才库增删改查页面...</p></div>} />
          <Route path="/consultations" element={<div className="p-8"><h2 className="text-2xl font-bold">咨询后台管理</h2><p className="mt-4 text-gray-500">在这里管理和回复用户的在线咨询...</p></div>} />
          {/* Add more admin routes as needed based on architecture */}
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
