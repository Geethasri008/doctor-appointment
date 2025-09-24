import React from 'react'
import s from './SearchRibbon.module.css'

export default function SearchRibbon({query,setQuery,filters,setFilters}){
  const setTag = (key,val)=>setFilters(f=>({...f,[key]:val}))
  const active = Object.entries(filters).filter(([k,v])=>v)
  return (
    <div className={s.wrap}>
      <h2 className={s.h1}>Find Expert Doctors For An In-Clinic Session Here</h2>
      <div className={s.ribbon}>
      <div className={s.locationInput}>
        <span className={s.icon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#2F5F38">
            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
          </svg>
        </span>
        <select className={s.search}>
          <option value="" disabled selected>Select Location</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Bangalore</option>
        </select>
      </div>
        <div className={s.input}>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="eg. Doctor, specialisation, clinic name"/>
          <button className={s.go} aria-label="search">
            ➜
          </button>
        </div>
      </div>
<div className={s.filters}>
  {[
    { label: 'Expertise', options: ['Dermatology', 'Gynecology', 'Orthopedics'] },
    { label: 'Gender', options: ['Male', 'Female', 'Other'] },
    { label: 'Fees', options: ['<$50', '$50-$100', '$100+'] },
    { label: 'Languages', options: ['English', 'Telugu', 'Hindi',"Marathi"] },
    { label: 'All filters', options: ['Option 1', 'Option 2'] }
  ].map(({ label, options }) => (
    <select
      key={label}
      className={s.select}
      defaultValue=""
      onChange={(e) => setTag(label.toLowerCase(), e.target.value)}
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  ))}
</div>

      <div className={s.tags}>
        {active.length===0 ? null : active.map(([k,v])=>(
          <span className={s.tag} key={k}>{v} ✕</span>
        ))}
      </div>
    </div>
  )
}
