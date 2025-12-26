
import React, { useState } from 'react';

const Information: React.FC = () => {
  const [activeTab, setActiveTab] = useState('国际动态');
  const tabs = ['国际动态', '涉外咨询', '通知公告'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">法律资讯</h1>
      
      <div className="flex space-x-8 border-b border-gray-200 mb-8">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-lg font-medium transition ${
              activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img src={`https://picsum.photos/800/500?random=${i+20}`} className="w-full h-48 object-cover" alt="News" />
            <div className="p-6">
              <div className="text-blue-600 text-xs font-bold mb-2 uppercase">{activeTab}</div>
              <h3 className="text-xl font-bold mb-3 line-clamp-2">关于举办“跨境投融资法律实务”系列培训的通知</h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                为进一步提升我市涉外法律服务水平，助力企业高水平“走出去”，本平台决定举办为期三天的跨境投融资实务培训课程...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">2024-05-21</span>
                <button className="text-blue-600 text-sm font-medium hover:underline">详情</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
