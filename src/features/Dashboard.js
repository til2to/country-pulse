import React, { useEffect } from 'react';
import africa from '../assets/africa.png';
import asia from '../assets/asia.png';
import europe from '../assets/europe.png';
import northAmerica from '../assets/north-america.png';
import oceania from '../assets/oceania.png';
import southAmerica from '../assets/south-america.png';
import ContinentCard from '../components/ContinentCard';

const Dashboard = () => {
  const links = [
    {
      name: 'Africa',
      path: '/continent/africa',
      image: africa,
    },
    {
      name: 'Asia',
      path: '/continent/asia',
      image: asia,
    },
    {
      name: 'Europe',
      path: '/continent/europe',
      image: europe,
    },
    {
      name: 'North America',
      path: '/continent/north america',
      image: northAmerica,
    },
    {
      name: 'South America',
      path: '/continent/south america',
      image: southAmerica,
    },
    {
      name: 'Oceania',
      path: '/continent/oceania',
      image: oceania,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link) => (
        <ContinentCard key={link.name} link={link} />
      ))}
    </section>
  );
};
export default Dashboard;
