import { useStopwatch } from 'react-timer-hook';
import './Timer.scss';

const Timer = (props) => {
  // Setting values for each timer
  const stopwatchOffset = new Date();
  const daysConvertToSeconds = props.timerData.daysElapsed * 24 * 60 * 60;
  const hoursConvertToSeconds = props.timerData.hoursElapsed * 60 * 60;
  const minutesConvertToSeconds = props.timerData.minutesElapsed * 60;
  stopwatchOffset.setSeconds(
    stopwatchOffset.getSeconds() +
      (daysConvertToSeconds + hoursConvertToSeconds + minutesConvertToSeconds)
  );

  const { days, hours, minutes } = useStopwatch({
    autoStart: true,
    offsetTimestamp: stopwatchOffset,
  });



  return (
    <div className='tmr-dsply'>
      <div className='tmr-dsply__timeWrapper'>
        <p className='tmr-dsply__value'>DAYS: {days}</p>
        <p className='tmr-dsply__value'>HOURS: {hours}</p>
        <p className='tmr-dsply__value'>MINUTES: {minutes}</p>
      </div>
      <div className='tmr-dsply__time-cntrlr'>

       
      </div>
    </div>
  );
};

export default Timer;
