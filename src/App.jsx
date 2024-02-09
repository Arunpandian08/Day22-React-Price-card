import React from 'react';
import Card from './component/Card';



const App = () => {
  const cardData = [
    {
      category: "FREE",
      price: "$0/month",
      user: "✔ Single User",
      storage: "✔ 50GB Storage",
      project: "✔ Unlimited Public Projects",
      access: "✔ Community Access",
      private: "✖ Unlimited Private Projects",
      support: "✖ Dedicated Phone Support",
      sub: "✖ Free Subdomain",
      report: "✖ Monthly Status Reports"
    },
    {
      category: "PLUS",
      price: "$9/month",
      user: "✔ 5 User",
      storage: "✔ 50GB Storage",
      project: "✔ Unlimited Public Projects",
      access: "✔ Community Access",
      private: "✔ Unlimited Private Projects",
      support: "✔ Dedicated Phone Support",
      sub: "✔ Free Subdomain",
      report: "✖ Monthly Status Reports"
    },
    {
      category: "PRO",
      price: "$49/month",
      user: "✔ Unlimited User",
      storage: "✔ 50GB Storage",
      project: "✔ Unlimited Public Projects",
      access: "✔ Community Access",
      private: "✔ Unlimited Private Projects",
      support: "✔ Dedicated Phone Support",
      sub: "✔ Free Subdomain",
      report: "✔ Monthly Status Reports"
    }
  ]
  return (
    <div>
      <Card cardData={cardData} />
    </div>

  );
};

export default App;