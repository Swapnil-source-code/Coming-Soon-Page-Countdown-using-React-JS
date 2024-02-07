
import { useState, useEffect } from 'react';
import './ComingSoonPage-style.css'
import rocket_image from '../assets/images/rocket.png'



const ComingSoonPage = () => {
  
  const countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <>
      <div className="container">
        <div className="content">
          <p>Website Under Maintenance</p>
          <h1>We're <span>Launching</span> Soon</h1>
          <div className="launch-time">
            <div>
              <p id="days">{timeRemaining.days}</p>
              <span>Days</span>
            </div>
            <div>
              <p id="hours">{timeRemaining.hours}</p>
              <span>Hours</span>
            </div>
            <div>
              <p id="minutes">{timeRemaining.minutes}</p>
              <span>Minutes</span>
            </div>
            <div>
              <p id="seconds">{timeRemaining.seconds}</p>
              <span>Seconds</span>
            </div>
          </div>
          <button type="button">Learn more</button>
        </div>
        <img src={rocket_image} className="rocket" />
      </div>
    </>
  )
}

export default ComingSoonPage