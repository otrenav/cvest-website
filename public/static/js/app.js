
window.onload = function() {
    var waves = new SineWaves({
        el: document.getElementById('waves'),
        speed: 2,
        width: function() {
            return (document.getElementById('waves-area').offsetWidth);
        },
        height: function() {
            return (document.getElementById('waves-area').offsetHeight);
        },
        wavesWidth: '100%',
        ease: 'sineIn',
        waves: [
            {
                timeModifier: 4,
                lineWidth: 1,
                amplitude: 100,
                wavelength: 180,
                segmentlength: 1,
                strokeStyle: 'rgba(130, 0, 255, 1)'
            },
            {
                timeModifier: 3,
                lineWidth: 1,
                amplitude: 150,
                wavelength: 100,
                segmentlength: 1,
                strokeStyle: 'rgba(0, 140, 255, 1)'
            },
            {
                timeModifier: 3,
                lineWidth: 1,
                amplitude: 400,
                wavelength: 70,
                segmentlength: 1,
                strokeStyle: 'rgba(0, 100, 255, 1)'
            }
        ]
    });
};
