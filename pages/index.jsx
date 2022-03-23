import React, { useState } from 'react'
import Octave from './../components/octave'
import style from './index.module.css'
import modules from './../modules'

const avoidRender = () => true;

// console.log('Render:::===>App - [Functional] - Outside');

const App = () => {
 
  // console.log('Render:::===>App - [Functional] - Inside');
  
  let counter = 0;
  let timeoutRef = React.useRef(null);
  let timerinterval = React.useRef(null);
  let TrackerElement =  React.useRef(null);
  let TrackerSeconds = React.useRef(null);
  let isTrackerPlaying = React.useRef(false);
  const TrackerTargetRef = React.useRef(null);
  const [ms, setMs] = React.useState(counter);
  const [isMouseDown,setIsMouseDown] = useState()

  const timer = (start) => 
  {
    if (start === true && counter >= 1) {
      timerinterval.current = setInterval(() => 
      {
          setMs(counter); 
          counter += 1;
          let n = counter.toString()+0+'px';
          TrackerElement.current.style.height = n 
      
          if(isMouseDown==="false") console.log('false')
      }, [200]);
    } else {
      TrackerTargetRef.current.scrollTo(0,TrackerTargetRef.current.scrollHeight)
      setMs(0);
    }
  };
  const clearNotes = ()=>
  {
    document.getElementById('TrackerContainer').innerHTML = ""
    TrackerSeconds.current = null;
  }
  const playTrackers = (e)=>
  {
    e.preventDefault();  
    const TRACKER_DIV = document.querySelector('#TrackerContainer div')
    const PLAY_BTN = document.getElementById('play');

    if(isTrackerPlaying.current)
    {
      modules.trackers.pause().then(res=>
        {
          PLAY_BTN.className = 'play';
          isTrackerPlaying.current = false;
          // modules.recorder.stop().then(res=> console.log(res))
        })
    }
    else
    {
      if(TRACKER_DIV===null || TRACKER_DIV===undefined) return;
  
      PLAY_BTN.className = 'pause'
  
      isTrackerPlaying.current = true;
    
      // modules.recorder.start().then(res=>console.log('recording...'))    
      modules.trackers.play(TRACKER_DIV,res=>
      {
        if(res.status === "end")
        {
          PLAY_BTN.className = 'play';
          isTrackerPlaying.current = false;
          // modules.recorder.stop().then(res=> console.log(res))
        }
      })
    }

  }

  const startAudio = (e)=>
  {
    clearTimeout(timeoutRef)
    const NOTE = e.target.getAttribute('note').toUpperCase();
    const TrackerTarget = document.getElementById( "TrackerContainer" );
    const TIMESTAMP = new Date().getTime()    
    const NOTE_ELEMENT = modules.trackers.new(e,TIMESTAMP,NOTE)

    modules.sounds[NOTE].pause();
    modules.sounds[NOTE].currentTime = 0
    modules.sounds[NOTE].play();
 
    TrackerSeconds.current = TIMESTAMP;
    TrackerElement.current = NOTE_ELEMENT; 
    
    TrackerTarget.appendChild(NOTE_ELEMENT);
    TrackerTargetRef.current.scrollTo(0,TrackerTargetRef.current.scrollHeight) 
    
    counter = 1;
    timer(true);
  }

  const stopAudio = (e)=>
  {
    if(TrackerSeconds.current === null) return;
    const seconds = Number( new Date().getTime() ) - TrackerSeconds.current;
    document.getElementById( TrackerSeconds.current ).setAttribute('data-ms',seconds);

    const x = e.target.getAttribute('note');
    if(x === null || x === undefined || x === 'undefined') return
    const n = x.toUpperCase();
    timer(false);
    clearInterval(timerinterval.current);

    timeoutRef = setTimeout(()=>
    {
      modules.sounds[n].pause();
      modules.sounds[n].currentTime = 0;
    },1000)
  }

  React.useEffect(()=>
  {   
    var main = document.querySelector('main')
    TrackerTargetRef.current = document.getElementById('TrackerContainer')
    Array.prototype.map.call( document.querySelectorAll('#pianoContainer span') , (obj,i)=>
    {
      obj.onmousedown = (e)=>
      {
        e.preventDefault()
        setIsMouseDown('true')
        startAudio(e)       
        e.target.setAttribute('active',true)
      }

      obj.onmouseleave = (e)=>
      {
        e.preventDefault();
        e.target.removeAttribute('active',true)
        if(isMouseDown === "true")
        {
          stopAudio(e)
        }
      }
     
      obj.onmouseover = (e)=>
      {
        e.preventDefault()
        if(isMouseDown === 'true')
        {
          startAudio(e)
          e.target.setAttribute('active',true)
        }
      }
     
      main.onmouseup = (e)=>
      {
        e.preventDefault()
        setIsMouseDown('false')
        if(e.target.getAttribute('role')!=='main')
        {
          stopAudio(e)
        }
        e.target.removeAttribute('active')
      }
    })
  },[isMouseDown])


  return (
    <>
      <main role="main" className={style.main}>
        <section className={style.child1}>
          <div id="TrackerContainer" className={style.roll}></div>      
          <div id="pianoContainer" className={style.pianoContainer}> 
          <Octave octave="1" />
          <Octave octave="2" />
          <Octave octave="3" />
          <Octave octave="4" />
          <Octave octave="5" />
          <Octave octave="6" />
          <Octave octave="7" />
          </div>
        </section>
        <section className={style.child2}>
          <div>
            <button onClick={(e)=> playTrackers(e)}>
              <a id="play" className="play"></a>
            </button>
            <div className="btn">
              <a onClick={()=> clearNotes()}>Clear Notes</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default React.memo(App, avoidRender);
