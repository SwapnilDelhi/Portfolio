import { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onFinish }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 3400);
    const doneTimer = setTimeout(() => onFinish(), 4200);
    return () => { clearTimeout(exitTimer); clearTimeout(doneTimer); };
  }, [onFinish]);

  return (
    <div className={`loader ${exiting ? 'loader-exit' : ''}`} role="status" aria-label="Loading site">
      <div className="loader-emblem">
        <svg viewBox="0 0 400 400" className="loader-ring">
          <defs>
            <path id="ringPath" d="M 200,200 m -160,0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0" />
          </defs>
          <circle cx="200" cy="200" r="185" className="ring-outer" />
          <circle cx="200" cy="200" r="135" className="ring-inner" />
          <text className="ring-text">
            <textPath href="#ringPath" startOffset="0%">
              ANONYMITY &#8226; AUSTERITY &#8226; ABILITY &#8226; ANONYMITY &#8226; AUSTERITY &#8226; ABILITY &#8226;
            </textPath>
          </text>
        </svg>

        <div className="loader-center">
          <span className="loader-sanskrit">शीलं परम भूषणम्</span>
        </div>
      </div>
    </div>
  );
}
