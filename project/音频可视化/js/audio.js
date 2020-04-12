class AudioVisualization {
    constructor(audio, animation) {
        this.audio = audio;
        this.animation = animation;
        this.fftSize = 128;
    }
    openPlay() {
        let self = this;
        let a = this.audio;

        //储存定时器
        let timer = null;

        //解析器
        let AudCtx = new AudioContext();
        let src = AudCtx.createMediaElementSource(a);
        let analyser = AudCtx.createAnalyser();

        src.connect(analyser);
        analyser.connect(AudCtx.destination);
        analyser.fftSize = this.fftSize;

        let bufferLength = analyser.frequencyBinCount;

        let dataArray = new Uint8Array(bufferLength);

        function changeTime() {
            timer = requestAnimationFrame(changeTime);
            analyser.getByteFrequencyData(dataArray);

            self.animation(dataArray);
        }

        a.addEventListener('play', () => {
            changeTime();
        })

        a.addEventListener('pause', () => {
            cancelAnimationFrame(timer);
        })
    }
}