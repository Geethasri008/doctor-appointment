import React from 'react'
import s from './DoctorCard.module.css'
import { Link } from 'react-router-dom'
import Doctors from '../pages/Doctors'


export default function DoctorCard({ doc }) {
  return (
    <div className={s.card}>
      <div className={s.top}>
        <img className={s.avatar} src={doc.photo} alt={doc.name} />
        <div className={s.rate}>{doc.rating}⭐</div>
      </div>
      <h3 className={s.name}>{doc.name}</h3>
      <div className={s.details}>
        <div className={s.kv}>
          <span>🧬</span>
          <span>{doc.specialization}</span>
        </div>
        <div className={s.kv}>
          <span>🎓</span>
          <span>{doc.experience} years of Experience</span>
        </div>
        <div className={s.kv}>
          <span>💬</span>
          <span>Speaks: {doc.languages.join(', ')}</span>
        </div>
      </div>

      <div className={s.badges}>
        <div className={s.badge}>
          <div>Video Consultation</div>
          <div className={s.price}>₹{doc.videoPrice}</div>
        </div>
        <div className={s.badge}>
          <div>Chat Consultation</div>
          <div className={s.price}>{doc.chatPrice}</div>
        </div>
      </div>

      <div className={s.actions}>
        <Link to={`/profile/${doc.id}`} className={s.ghost}>
          View Profile
        </Link>
        <button className={s.cta}>Book a consultation</button>
      </div>
    </div>
  )
}