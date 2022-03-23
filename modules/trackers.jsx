import SOUNDS from './sounds'

const getOffset = (e)=>
{
    const GET_BOUNDING_CLIENT = e.getBoundingClientRect();
    return {
      left: GET_BOUNDING_CLIENT.left + window.scrollX,
      top: GET_BOUNDING_CLIENT.top + window.scrollY
    }
}
const trackers = 
{
  FNOTE_NAME: null,x: null, xx: null,
  PIANO_KEY: null,FIRST_NOTE:null,NEXT_NOTE:null,
  new: (e,TimeStamp,n)=>
  {
    let DIV = document.createElement('div');
    DIV.style.border = "2px solid "+"#"+e.target.getAttribute('tracker')
    DIV.style.width = e.target.offsetWidth+"px";
    DIV.style.top   = getOffset(e.target).top+"px";
    DIV.style.left  = getOffset(e.target).left+"px";
    
    DIV.setAttribute('label',e.target.getAttribute('label'))
    DIV.setAttribute("TrackerBg","#"+e.target.getAttribute('tracker'))
    DIV.setAttribute('note',n)
    
    DIV.id = TimeStamp;
    DIV.className = "tracker"
    
    return DIV
  },

  playTracker: (NOTE,MS,callback)=>
  {
    SOUNDS[NOTE].pause();
    SOUNDS[NOTE].currentTime = 0;
    SOUNDS[NOTE].play();
    
    const TIMEOUT_MS = MS < 1000 ? 1000 : MS;
    trackers.xx = setTimeout(()=>
    {
      SOUNDS[NOTE].pause();
      SOUNDS[NOTE].currentTime = 0;
      clearTimeout(trackers.xx)
    },TIMEOUT_MS)
    return typeof callback === "function" ? callback() : null;
  },

  play: async (FIRST_NOTE,callback)=>
  {
    //We check if we have any note tracker to start playing, else we return and cancel operation.
    if(FIRST_NOTE == null || FIRST_NOTE == undefined ) return
    
    //So here we have notes to play. We scroll up to the first note
    FIRST_NOTE.scrollIntoView();
    
    //Now we select our piano key equally to the note tracker to highlight accordingly to the sounds.
    var PIANO_KEY = document.getElementById(""+FIRST_NOTE.getAttribute('note').toLowerCase()+"");
    
    //Then we highlight our piano key and the note tracker
    PIANO_KEY.setAttribute('active',true)
    FIRST_NOTE.style.backgroundColor = FIRST_NOTE.getAttribute('trackerBg')
    
    //NEXT_NOTE to see if exist or we reach the end of notes.
    const NEXT_NOTE = FIRST_NOTE.nextElementSibling === null ? null : FIRST_NOTE.nextElementSibling 
    //The time between the first note play and second note.
    const DIFF      = Number(NEXT_NOTE === null ? 0 : NEXT_NOTE.id) - Number(FIRST_NOTE.id) 
    //FIRST_NOTE note name.
    const NOTE      = FIRST_NOTE.getAttribute('note').toUpperCase();
    //FIRST_NOTE pressing time in miliseconds.
    const MS        = FIRST_NOTE.getAttribute('data-ms');
    
    trackers.FIRST_NOTE = FIRST_NOTE;
    trackers.NEXT_NOTE  = NEXT_NOTE;
    trackers.PIANO_KEY  = PIANO_KEY;
    trackers.FNOTE_NAME = NOTE;

    //calculate time for 2 conditions. 
    let REAL_TIME;
    if(NEXT_NOTE === null) REAL_TIME = MS
    else REAL_TIME = DIFF > 3000 ? 3000 : DIFF;
    
    //So here we play the first note, Then we go for the next one to play.
    trackers.playTracker(NOTE,MS,()=>
    {
      //FIRST_NOTE Played succefully.
      //Important: If NEXT_NOTE was null, Then it means, We don't have any other note.
      //After we played the first note, Now we check if we have next note...?!
      trackers.x = setTimeout(()=>
      {
        PIANO_KEY.removeAttribute('active')
        FIRST_NOTE.style.backgroundColor = "unset"
        NEXT_NOTE === null ? clearTimeout(trackers.x) : trackers.play(NEXT_NOTE,callback)
      },REAL_TIME)

      if( NEXT_NOTE === null ) return callback({status:"end"})
    })  
  },
  pause: async ()=>
  {
    //reset properties
    document.querySelector('#TrackerContainer div:last-child').scrollIntoView();
    console.log(trackers.FNOTE_NAME)
    SOUNDS[trackers.FNOTE_NAME].pause()
    SOUNDS[trackers.FNOTE_NAME].currentTime = 0
    trackers.PIANO_KEY.removeAttribute('active');
    trackers.FIRST_NOTE.style.backgroundColor = "unset";
    clearTimeout(trackers.x);
    clearTimeout(trackers.xx);
    return Promise.resolve({status:"success"})
  }

}

export default trackers;