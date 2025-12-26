
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">关于我们</h1>
        <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>
            东莞涉外法律服务平台是由<strong>东莞市律师协会</strong>主办，联合东莞市相关法律主管部门和行业协会共同打造的综合性涉外法律资源整合平台。
          </p>
          <p>
            平台致力于构建覆盖全球、精准高效的涉外法律服务网络，为东莞市广大外向型企业、外资机构以及在莞工作的境外人员提供全方位、多层次的法治支撑。
          </p>
          
          <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-4">我们的使命</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>汇集全球法治人才：建立动态更新的涉外法律人才库，为企业选聘专家提供便捷入口。</li>
            <li>提升服务透明度：公开各类涉外法律服务机构信息，消除信息不对称。</li>
            <li>智能赋能法治：利用AI等先进技术，为用户提供7*24小时的初步法律咨询。</li>
            <li>优化营商环境：通过法规解读与政策宣导，助力东莞打造国际化、法治化营商环境。</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-4">联系我们</h3>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="mb-2"><strong>主办单位：</strong> 东莞市律师协会</p>
            <p className="mb-2"><strong>电话：</strong> 0769-XXXX-XXXX</p>
            <p className="mb-2"><strong>邮箱：</strong> support@dg-foreign-law.gov.cn</p>
            <p className="mb-2"><strong>地址：</strong> 广东省东莞市南城区天安数码科技城F3座11楼</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
