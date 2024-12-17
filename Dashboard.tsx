import React, { useEffect, useState } from 'react';
import { fetchPartners } from '../services/api';

const Dashboard = () => {
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    const getPartners = async () => {
      try {
        const data = await fetchPartners();
        setPartners(data);
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };
    getPartners();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="card">
        <h3>Active Partners</h3>
        <p>{partners.filter(p => p.status === 'active').length}</p>
      </div>
      {/* Add more metrics cards here */}
    </div>
  );
};

export default Dashboard;
