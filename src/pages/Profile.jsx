import React, {useState} from 'react'
import s from './Profile.module.css'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import womenHealth from '../assets/women-health.png';
import skinCare from '../assets/skin-care.png';
import immunity from '../assets/immunity.png';
import hairCare from '../assets/hair-care.png';
import { DOCTORS } from "./Doctors";



export default function Profile(){
  const { id } = useParams()
  const [mode, setMode] = useState('Video')
  const [picked, setPicked] = useState('11:00 AM')



   const doctor = DOCTORS.find(d => d.id === parseInt(id));

  if (!doctor) {
    return <p className={s.noResults}>Doctor not found</p>;
  }

  return (
    <div className={s.page}>
      
      <div className={s.head}>
        <img className={s.avatar} src={doctor.photo} alt={doctor.name} />
        <div>
          <div className={s.name}>   {doctor.name}<span style={{color:'#4c64edff'}}> ✔︎</span></div>
          <div style={{color:'#6f766f'}}>{doctor.specialization} <br/> {doctor.rating}⭐⭐⭐⭐</div>
        </div>
        <div className={s.metrics}>
          <div className={s.metric}><b>Followers</b>850 </div>
          <div className={s.metric}><b>Following</b>18K </div>
          <div className={s.metric}><b>Posts</b>250</div>
        </div>
        <button className={s.action}>Book an Appointment</button>
      </div>

      <div className={s.cols}>
        <div>
          <div className={s.card}>
            <div className={s.titleRow}>
  <div className={s.title}>A Little About me</div>
  <button className={s.followBtn}>Follow +</button>
</div>

            <p style={{color:'#6e756f',lineHeight:'1.6'}}>
             {doctor.about}
            </p>
            <div className={s.section}><b>Language Spoken</b></div>
            <div className={s.iconRow}>
              <span className={s.pill}>English</span>
              <span className={s.pill}>Hindi</span>
              <span className={s.pill}>Telugu</span>
            </div>

          <div className={s.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>

 
          </div>

                <div className={s.card}>
        <div className={s.title}>I Specialize In</div>
        
        <div className={s.specializeIcons}>
          <div className={s.specializeItem}>
            <img src={womenHealth} alt="Women’s Health" />
            <span>Women’s Health</span>
          </div>
          <div className={s.specializeItem}>
            <img src={skinCare} alt="Skin Care" />
            <span>Skin Care</span>
          </div>
          <div className={s.specializeItem}>
            <img src={immunity} alt="Immunity" />
            <span>Immunity</span>
          </div>
          <div className={s.specializeItem}>
            <img src={hairCare} alt="Hair Care" />
            <span>Hair Care</span>
          </div>
        </div>
      </div>

          <div className={s.card}>
            <div className={s.title}>The Concerns I Treat</div>
            <div className={s.iconRow}>
              {['Skin Treatment','Pregnancy','Period Doubts','Endometriosis','Pelvic Pain','Ovarian Cysts','+ 5 More'].map(t=>(
                <span key={t} className={s.pill}>{t}</span>
              ))}
            </div>
          </div>

          <div className={s.card}>
            <div className={s.title}>My Work Experience</div>
            <div className={s.section} style={{color:'#2F5F38',fontWeight:800}}>I HAVE BEEN IN PRACTICE FOR : 7+ YEARS</div>
            <ul style={{marginTop:'10px',paddingLeft:'18px',color:'#5b635b'}}>
              <li>Midtown Medical Clinic — Senior doctor (2016–PRESENT)</li>
              <li>Midtown Medical Clinic — Senior doctor (2010–2015)</li>
            </ul>
          </div>

          <div className={s.card}>
            <div className={s.title}>Featured Reviews (102)</div>
            <div style={{display:'grid',gap:'12px'}}>
              {[1,2].map(i=>(
                <div key={i} style={{border:'1px solid #EEF2EA',borderRadius:'12px',padding:'12px'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                      <img src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop" width="36" height="36" style={{borderRadius:'50%'}}/>
                      <div>
                        <div><b>Alicent Hightower</b></div>
                        <div style={{color:'#6e756f',fontSize:'14px'}}>Consulted for Hair care</div>
                      </div>
                    </div>
                    <div style={{color:'#9aa39a',fontSize:'14px'}}>20 January 2023</div>
                  </div>
                  <div style={{margin:'6px 0'}}>⭐⭐⭐⭐⭐</div>
                  <div style={{color:'#6e756f'}}>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods.</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.right}>
          <div className={s.card}>
            <div className={s.row} style={{justifyContent:'space-between'}}>
              <div className={s.title}>Appointment Fee</div>
              <div style={{fontWeight:900}}>₹699.00</div>
            </div>
            <div className={s.title} style={{marginTop:'10px'}}>Select your mode of session</div>
            <div className={s.sessionOpts}>
              {['In-Clinic','Video','Chat'].map(m=>(
                <div key={m} className={s.opt+' '+(mode===m?' '+s.active:'')} onClick={()=>setMode(m)}>
                  <div style={{fontWeight:800}}>{m} {mode===m?'✓':''}</div>
                  <div style={{color:'#6e756f'}}>{m==='Chat'?'10 Mins':'45 Mins'}</div>
                </div>
              ))}
            </div>

            <div className={s.row} style={{justifyContent:'space-between',marginTop:'14px'}}>
              <div className={s.title}>Pick a time slot</div>
              <div>📅</div>
            </div>
            <div className={s.slotDeck}>
              <button className={s.time}>‹</button>
              {[
                {day:'Mon, 10 Oct', slots:'10 slots', tone:'#B9D6BF'},
                {day:'Tue, 11 Oct', slots:'02 slots', tone:'#D66B2E'},
                {day:'Wed, 12 Oct', slots:'05 slots', tone:'#E0B44F'},
              ].map((d,i)=>(
                <div key={i} className={s.slot}>
                  <strong>{d.day}</strong>
                  <small style={{color:i===0?'#2F5F38':(i===1?'#d6522b':'#b98914')}}>{d.slots}</small>
                </div>
              ))}
              <button className={s.time}>›</button>
            </div>

            <div className={s.title}>Morning</div>
            <div className={s.times}>
              {['09:00 AM','09:30 AM','10:00 AM','10:15 AM','10:45 AM','11:00 AM'].map(t=>(
                <button key={t} className={s.time+' '+(picked===t?' '+s.active:'')} onClick={()=>setPicked(t)}>{t}</button>
              ))}
            </div>

            <div className={s.title}>Evening</div>
            <div className={s.times}>
              {['04:00 PM','04:15 PM','04:30 PM','04:45 PM','05:15 PM'].map(t=>(
                <button key={t} className={s.time+' '+(picked===t?' '+s.active:'')} onClick={()=>setPicked(t)}>{t}</button>
              ))}
            </div>

            <button className={s.cta}>Make An Appointment</button>
          </div>
        </div>
      </div>
    </div>
  )
}
