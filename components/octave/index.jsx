import React from "react";
import style from './index.module.css'

const avoidRender = ()=> true

const Octave = (props)=>
{
    return(
        <>
          <div id="octave" octave={props.octave} className={style.octave}>
              <div id="black-notes" className={style.blackNotes}>
              {
                  props.octave === "100" ? <><span note="c1"></span><span note="c1"></span></> : null
                }
                <span note="0"></span>
                <span id={'db'+props.octave} tracker={'FF5B1B'}  note={'Db'+props.octave} label={'d'}></span>
                <span id={'eb'+props.octave} tracker={'0fddff'}  note={'Eb'+props.octave} label={'e'}></span>
                <span note="0"></span>
                <span note="0"></span>
                <span id={'gb'+props.octave} tracker={'026400'} note={'Gb'+props.octave} label={'g'}></span>
                <span id={'ab'+props.octave} tracker={'7100A4'} note={'Ab'+props.octave} label={'a'}></span>
                <span id={'bb'+props.octave} tracker={'FF00A7'} note={'Bb'+props.octave} label={'b'}></span>
                <span note="0"></span>
              </div>
              <div id="white-notes" className={style.whiteNotes}>
                {
                  props.octave === "100" ? <><span tracker={'f00000'} note={'c'+props.octave} label={'c'}>
                    </span><span tracker={'f00sss'} note={'c'+props.octave} label={'c'}></span></> : null
                }
                <span id={'c'+props.octave} tracker={'f00'}    note={'c'+props.octave} label={'c'}></span>
                <span id={'d'+props.octave} tracker={'FF5B1B'} note={'d'+props.octave} label={'d'}></span>
                <span id={'e'+props.octave} tracker={'0fddff'} note={'e'+props.octave} label={'e'}></span>
                <span id={'f'+props.octave} tracker={'FCFF21'} note={'f'+props.octave} label={'f'}></span>
                <span id={'g'+props.octave} tracker={'026400'} note={'g'+props.octave} label={'g'}></span>
                <span id={'a'+props.octave} tracker={'7100A4'} note={'a'+props.octave} label={'a'}></span>
                <span id={'b'+props.octave} tracker={'FF00A7'} note={'b'+props.octave} label={'b'}></span>
              </div>

            </div>
        
        
        </>
    )
}


export default React.memo(Octave, avoidRender)