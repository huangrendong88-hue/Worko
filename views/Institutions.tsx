
import React from 'react';

const Institutions: React.FC = () => {
  const categories = ['律师事务所', '境外分支机构', '仲裁机构', '调解机构', '公证机构', '知识产权机构'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">涉外法律服务机构</h1>
      <p className="text-gray-500 mb-12">汇集全球知名涉外法律服务机构，助力跨境商事对接</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {categories.map((cat, i) => (
          <button key={i} className="p-4 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-600 transition shadow-sm">
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {[
          { name: '广东大公律师事务所', type: '律师事务所', addr: '东莞市南城区科技路88号', phone: '0769-8888XXXX' },
          { name: '新加坡国际仲裁中心（东莞代表处）', type: '仲裁机构', addr: '东莞市松山湖国际创新谷', phone: '0769-2222XXXX' },
          { name: '东莞市涉外公证处', type: '公证机构', addr: '东莞市莞城区东纵路', phone: '0769-3333XXXX' },
          { name: '美国纽约金杜法律办公室', type: '境外分支机构', addr: 'New York, USA', phone: '+1 212-XXX-XXXX' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:shadow-md transition">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded">{item.type}</span>
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
              </div>
              <p className="text-gray-500 text-sm">地址：{item.addr}</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="text-right">
                <div className="text-xs text-gray-400">联系电话</div>
                <div className="text-sm font-medium text-gray-700">{item.phone}</div>
              </div>
              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Institutions;
