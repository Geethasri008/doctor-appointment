import React, {useMemo, useState} from 'react'
import s from './Doctors.module.css'
import SearchRibbon from '../components/SearchRibbon.jsx'
import DoctorCard from '../components/DoctorCard.jsx'

const stock = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop',
  "https://plus.unsplash.com/premium_photo-1664474647299-7ef90322be6c?q=80&w=1169&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1673351534357-fcce6fc86cba?q=80&w=687&auto=format&fit=crop",
]

export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Bruce Willis',
    specialization: 'Gynecologist',
    rating: '4.2',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop',
    about:
      'Hello I am Dr. Bruce Willis, a Gynaecologist in Sanjivni Hospital Surat. I love to work with all my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medicine from the prestigious institute.',
      experience: 7,
    languages: ['English', 'Hindi', 'Marathi'],
    videoPrice: 800,
    chatPrice: 'Free'
  },
  {
    id: 2,
    name: 'Dr. Prerna Narang',
    specialization: 'Dermatologist',
    rating: '4.8',
    photo: 'https://plus.unsplash.com/premium_photo-1664474647299-7ef90322be6c?q=80&w=1169&auto=format&fit=crop',
    about:
      'I am Dr. Prerna Narang, a Dermatologist specializing in skin care and cosmetic treatments. My focus is on providing quality care to all patients.',
      experience: 7,
    languages: ['English', 'Hindi', 'Marathi'],
    videoPrice: 700,
    chatPrice: 'Free'
  },
  {
    id: 3,
    name: 'Dr. Arjun Singh',
    specialization: 'Gynaecologist',
    rating: '4.5',
    photo: 'https://plus.unsplash.com/premium_photo-1673351534357-fcce6fc86cba?q=80&w=687&auto=format&fit=crop',
    about:
      'Hello I am Dr. Arjun Singh, a Gynaecologist in Sanjivni Hospital Surat. I love to work with all my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medicine from the prestigious institute.',
    languages: ['English', 'Hindi', 'Marathi'],
    videoPrice: 900,
    chatPrice: 'Free'
  }
];


export default function Doctors() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});

  const list = useMemo(() => {
    return DOCTORS.filter(d =>
      d.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className={s.page}>
      <SearchRibbon
        query={query}
        setQuery={setQuery}
        filters={filters}
        setFilters={setFilters}
      />

      <div className={s.grid}>
        {list.length > 0 ? (
          list.map(d => <DoctorCard key={d.id} doc={d} />)
        ) : (
          <p className={s.noResults}>No doctors found.</p>
        )}
      </div>
    </div>
  );
}


