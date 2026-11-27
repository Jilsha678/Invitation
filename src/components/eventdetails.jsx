import './eventDetails.css'
import { useState,useEffect } from 'react';
function EventDetails(){
    const [timeLeft,setTimeLeft]=useState({})
    const weddingDate=new Date("January 3,2027 10:00:00").getTime()
    useEffect(()=>{
        const timer=setInterval(() => {
            const now=new Date().getTime()
            const distance=weddingDate-now
            const days=Math.floor(distance/(1000*60*60*24))
             const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);
         return () => clearInterval(timer);
    },[])
     return (
        <div className="event-page">
               <div className="event-card">

                    <h2>THE WEDDING</h2>
            <p>
    We cordially invite you to witness the beginning of forever
    and join us in celebrating this beautiful occasion.
</p>
            <h1>03 JANUARY 2027</h1>
            <div className='date-time'> 
                <h4>SUNDAY</h4>
            <h4> 10:30 am Onwards</h4>
            </div>
            
            <div className="countdown">
    <h3>COUNTDOWN TO FOREVER</h3>
    <div className="countdown-boxes">
        <div>{timeLeft.days??0} <span>Days</span></div>
        <div>{timeLeft.hours??0} <span>Hours</span></div>
        <div>{timeLeft.minutes??0} <span>Minutes</span></div>
        <div>{timeLeft.seconds??0} <span>Seconds</span></div>
    </div>
</div>
 </div>
        <div className="event-card venue-card">
             <div className='venue'>
                <h5>THE VENUE</h5>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Malabar+Convention+Centre,+Cheenikkal,+Aravankara       "   target="_blank"
    rel="noopener noreferrer">VIEW LOCATION</a>
            <h3>Malabar Convention Centre</h3>
            <h4>Cheenikkal, Aravankara</h4>
            </div>
        </div>
          
            
           
            
            <p className='ceremony'>NIKAH CEREMONY & WEDDING RECEPTION</p>
            <p>We look forward to celebrating with you.</p>
              

       
        </div>

    );
}
export default EventDetails