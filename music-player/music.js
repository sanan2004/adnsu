class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("illər sonra", "Orxan Zeynallı","aa.jpg","is.mp3"),    
    new Music("surfing", "Paster","pas.jpg","pas.mp3"),    
    new Music("Və birdə", "Xpert","xa.jpg","Xpert.mp3")    
];
