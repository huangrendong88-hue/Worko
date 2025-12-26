
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    { title: '涉外法律咨询', desc: 'AI 驱动的实时法律应答', icon: '💬', link: '/consultation' },
    { title: '法律人才库', desc: '检索资深涉外法律专家', icon: '👤', link: '/talent' },
    { title: '服务机构指引', desc: '全方位的涉外法律服务机构', icon: '🏢', link: '/institutions' },
    { title: '法规政策汇编', desc: '国内外最新法律动态检索', icon: '📜', link: '/laws' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
           <img src="https://picsum.photos/1920/1080?random=1" className="w-full h-full object-cover opacity-40" alt="Background" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">东莞涉外法律服务平台</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">连接全球法律资源，护航企业跨境出海</p>
          <div className="flex items-center bg-white rounded-lg p-2 max-w-2xl mx-auto shadow-2xl">
            <input 
              type="text" 
              placeholder="搜索法律法规、机构或人才..." 
              className="flex-grow px-4 py-3 text-gray-900 focus:outline-none"
            />
            <button className="bg-blue-600 px-8 py-3 rounded-md hover:bg-blue-700 transition font-bold">搜索</button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Link key={i} to={f.link} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News & Activities */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">最新资讯</h2>
              <div className="w-12 h-1 bg-blue-600 mt-2"></div>
            </div>
            <Link to="/info" className="text-blue-600 font-medium hover:underline">查看全部 &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="group">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img src={`https://picsum.photos/600/400?random=${i+10}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" alt="News" />
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">行业动态</span>
                <h4 className="text-lg font-bold text-gray-900 mt-2 mb-2 line-clamp-2">2024 东莞国际商事调解高峰论坛在莞成功举办</h4>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">近日，来自全球各地的法律专家齐聚东莞，共同探讨跨境争议解决新路径...</p>
                <div className="text-gray-400 text-xs">2024-05-20</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training / Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12">培训与活动通知</h2>
           <div className="space-y-4">
              {[
                { title: '【讲座】RCEP框架下的贸易合规风险防范', date: '05-28', status: '报名中' },
                { title: '【培训】涉外律师实务进阶训练营 - 第三期', date: '06-05', status: '即将开始' },
                { title: '【沙龙】跨境电商法律实务分享会', date: '06-12', status: '报名中' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between border-l-4 border-blue-600">
                  <div className="flex items-center space-x-4">
                    <div className="text-center px-4 py-2 bg-gray-100 rounded">
                      <div className="text-blue-600 font-bold text-lg">{item.date.split('-')[1]}</div>
                      <div className="text-gray-400 text-xs">MAY</div>
                    </div>
                    <h5 className="font-bold text-gray-800 text-lg">{item.title}</h5>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">立即报名</button>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
