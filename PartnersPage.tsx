import React, { useEffect, useState } from 'react';
import { fetchPartners } from '../services/api';
import PartnerCard from '../components/PartnerCard';

const PartnersPage = () => {
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
    <div>
      <h1>Partners</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {partners.map((partner) => (
          <PartnerCard key={partner._id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
