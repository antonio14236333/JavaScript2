function videoPlay(id){
    const urlSecreta='www.mamahuevo.com'
    console.log('Se esta reproduciendo');

}   

function videoStop(id){
    const urlSecreta='www.mamahuevo.com'
    console.log('Se pauso');
}

export class PlatziClass {
    constructor({
        name, 
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }

}