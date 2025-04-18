'use client';
import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const countDownDate = new Date("2026-01-28T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          expired: false,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return <div id="countdown">EXPIRED</div>;
  }

  return (
     <div className="countdown mt-20" id="countdown">
     <ul className="countdown-list style-four flex-center flex-wrap">
         <li
             className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
             <span className="days">{timeLeft.days}</span> Days
         </li>
         <li
             className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
             <span className="hours">{timeLeft.hours}</span> Hours
         </li>
         <li
             className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
             <span className="minutes">{timeLeft.minutes}</span> Min
         </li>
         <li
             className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
             <span className="seconds">{timeLeft.seconds}</span> Sec
         </li>
     </ul>
    </div>
  );
};

export default CountdownTimer;
