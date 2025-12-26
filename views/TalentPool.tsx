
import React from 'react';

const TalentPool: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">涉外人才库</h1>
          <p className="text-gray-500">收录东莞市顶尖涉外律师、仲裁员、公证员及调解专家</p>
        </div>
        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-200">
          申请入库
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8 flex flex-wrap gap-4 items-center">
        <div className="flex-grow min-w-[300px]">
           <input type="text" placeholder="搜索专家姓名、专业领域..." className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
        <select className="border border-gray-200 rounded-md px-4 py-2 text-gray-600">
          <option>所有专业领域</option>
          <option>国际贸易</option>
          <option>跨境投资</option>
          <option>海事海商</option>
          <option>知识产权</option>
        </select>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900">筛选</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: '张伟', role: '资深涉外律师', exp: '15年', tags: ['知识产权', '跨国并购'] },
          { name: '李芳', role: '国际仲裁员', exp: '20年', tags: ['商事纠纷', '建筑工程'] },
          { name: '陈建国', role: '涉外公证员', exp: '12年', tags: ['文书公证', '继承认证'] },
          { name: '王敏', role: '高级调解员', exp: '10年', tags: ['海事争议', '劳动纠纷'] },
          { name: '赵强', role: '资深涉外律师', exp: '18年', tags: ['资本市场', '银行融资'] },
          { name: '孙丽', role: '国际法律顾问', exp: '8年', tags: ['合规审查', '反垄断'] },
          { name: '周杰', role: '涉外法律专家', exp: '25年', tags: ['WTO法', '投资协定'] },
          { name: '吴磊', role: '资深涉外律师', exp: '14年', tags: ['电子通信', '技术转让'] },
        ].map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 overflow-hidden border-2 border-blue-50">
               <img src={`https://picsum.photos/200/200?random=${i+50}`} className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900">{p.name}</h4>
              <p className="text-blue-600 text-sm font-medium mb-4">{p.role}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {p.tags.map(t => (
                  <span key={t} className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600">{t}</span>
                ))}
              </div>
              <div className="text-xs text-gray-400 mb-6">经验：{p.exp}</div>
              <button className="w-full py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition font-medium">查看简历</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentPool;
