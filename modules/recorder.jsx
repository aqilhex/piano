import {saveAs as fileSaver} from 'file-saver'

const recorder = 
{
    STREAM_BEING_CAPTURED: null, 
    MEDIA_RECORDER: null, 
    AUDIO_BLOB: [],

    start: async function () 
     {
        if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return Promise.reject(new Error('Browser not Supported'));
        else 
        {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            recorder.STREAM_BEING_CAPTURED = stream;
            recorder.MEDIA_RECORDER = new MediaRecorder(stream);
            recorder.MEDIA_RECORDER.addEventListener("dataavailable", e =>recorder.AUDIO_BLOB.push(e.data));
            recorder.MEDIA_RECORDER.start();
        }
    },
    stop: async function()
    {
        return new Promise(resolve => 
            {
                recorder.MEDIA_RECORDER.stop();
                recorder.MEDIA_RECORDER.addEventListener("stop", () => 
                {
                    let BLOB = new Blob(recorder.AUDIO_BLOB, { type: recorder.MEDIA_RECORDER.mimeType });
                    resolve( BLOB );
                    recorder.stopStream();
                    recorder.resetRecordingProperties();
                    fileSaver.saveAs(BLOB,"piano.mp3")
                })
            });
    },
    cancel: function () 
    {
        recorder.MEDIA_RECORDER.stop(); 
        recorder.stopStream();
        recorder.resetRecordingProperties();
    },

    stopStream: ()=> recorder.STREAM_BEING_CAPTURED.getTracks().forEach(track => track.stop()),

    resetRecordingProperties: function () 
    {
        recorder.MEDIA_RECORDER = null;
        recorder.STREAM_BEING_CAPTURED = null;
    }
}

export default recorder;