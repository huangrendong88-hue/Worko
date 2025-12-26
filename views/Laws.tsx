
import React from 'react';

const Laws: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-blue-600 rounded-2xl p-8 mb-12 text-white">
        <h1 className="text-3xl font-bold mb-4">法规政策库</h1>
        <p className="opacity-90 max-w-2xl mb-8">收录涉外法治领域核心法律、国际条约及地区政策。提供智能检索与原文下载服务。</p>
        <div className="relative max-w-xl">
           <input type="text" placeholder="输入法规关键词或文号..." className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none" />
           <button className="absolute right-2 top-2 bg-blue-700 px-4 py-1 rounded text-sm hover:bg-blue-800">检索</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">分类检索</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer flex justify-between"><span>国内法律法规</span><span className="text-gray-300">1.2k</span></li>
              <li className="hover:text-blue-600 cursor-pointer flex justify-between"><span>国际条约协议</span><span className="text-gray-300">450</span></li>
              <li className="hover:text-blue-600 cursor-pointer flex justify-between"><span>典型案例汇编</span><span className="text-gray-300">89</span></li>
              <li className="hover:text-blue-600 cursor-pointer flex justify-between"><span>地方性涉外政策</span><span className="text-gray-300">126</span></li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-4">
          {[
            { title: '《中华人民共和国外商投资法》及其实施条例', type: '法律', date: '2020-01-01' },
            { title: '《区域全面经济伙伴关系协定》(RCEP) 原文', type: '国际条约', date: '2022-01-01' },
            { title: '东莞市关于进一步支持外资企业高质量发展的若干政策措施', type: '地方政策', date: '2023-11-15' },
            { title: '中国企业赴美投资合规指引（2024版）', type: '合规指引', date: '2024-03-20' },
            { title: '关于跨境电子商务零售进口税收政策的通知', type: '部门规章', date: '2018-11-29' },
          ].map((law, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-gray-100 flex items-center justify-between hover:border-blue-200 transition">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-1">{law.title}</h4>
                   <div className="flex items-center space-x-3 text-xs text-gray-400">
                     <span>发布日期：{law.date}</span>
                     <span className="px-2 py-0.5 bg-gray-100 rounded">{law.type}</span>
                   </div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">查看详情</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laws;
