// import React, { useState, useEffect } from 'react';

// function BatteryStatus() {
//   const [batteryLevel, setBatteryLevel] = useState(null);

//   useEffect(() => {navigator.getBattery().then(function(battery) {
//       function updateBatteryStatus() {setBatteryLevel(Math.floor(battery.level * 100));}

//       updateBatteryStatus();

//       battery.addEventListener('levelchange', updateBatteryStatus);
//       return () => {battery.removeEventListener('levelchange', updateBatteryStatus);
//       };});}, []);

//   return (
//     <div>
//       {batteryLevel !== null ? (
//         <div>
//           <p>Battery level: {batteryLevel}%</p>
//           <progress value={batteryLevel} max="100"></progress>
//         </div>
//       ) : ( <p>Battery status not available.</p>)}
//     </div>
//   );
// }

// export default BatteryStatus;


import { useState, useEffect } from 'react';

function BatteryStatus() {
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    function handleBatteryUpdate({ target }) {
      setBatteryLevel(target.level * 100);
    }

    navigator.getBattery().then((battery) => {
      setBatteryLevel(battery.level * 100);
      battery.addEventListener('levelchange', handleBatteryUpdate);
    });

    return () => {
      navigator.getBattery().then((battery) => {
        battery.removeEventListener('levelchange', handleBatteryUpdate);
      });
    };
  }, []);

  return (
    <div>
      <p>Battery Status: {batteryLevel}%</p>
      <progress value={batteryLevel} max="100" />
    </div>
  );
}

export default BatteryStatus;
