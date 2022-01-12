import React from "react";

function Selfcounter() {
    const [CounterTime, setCounter] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCounter(prevCount => prevCount + 1); 
      }, 1000);
      return () => {
        clearInterval(timer);
      };

    },); 
    return (
      <>Count: {CounterTime}</>
    );
  }
 
  export default Selfcounter;