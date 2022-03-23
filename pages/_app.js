// import App from 'next/app'
import { useEffect,useContext,createContext,useRef, useState } from "react"
import './index.css';



function MyApp({ Component, pageProps }) {


  useEffect(() => {
   // window.AudioContext = window.AudioContext || window.webkitAudioContext
    // const audioContext = AudioContext && new AudioContext();

    // audioPlayer.setInstrument(window.AudioContext || new AudioContext(),"acoustic_grand_piano");
  //   if("serviceWorker" in navigator) {
  //     if(worker === null)
  //     {
  //       navigator.serviceWorker.register("/w.js").then(
  //         function (registration) {
  //           console.log("Service Worker registration successful with scope: ", registration.scope);
  //           var w = new Worker('w.js');
  //           setWorker(w)          
  //         },
  //         function (err) {
  //           console.log("Service Worker registration failed: ", err);
  //         }
  //       );
  //     }
     
  //  }
  }, [])

  return (
    // <MyCTX.Provider value={MyCTX}>
<Component {...pageProps} />
    // </MyCTX.Provider>
  
  )
}
export default MyApp