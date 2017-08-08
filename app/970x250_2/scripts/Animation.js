var app = app || {};


app.Animation = (function () {

    var curtain,
        tl1,
        tl2,
        tl3,
        buttonExit,
        scene,
        tiguan,
        gorilla,
        city,
        text1a,
        text1b,
        shadow,
        vignette,
        cta,
        rRim,
        fRim;

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        tl1 = new TimelineMax();
        tl2 = new TimelineMax();
        tl3 = new TimelineMax();

        fRim = document.getElementById('fRim');
        rRim = document.getElementById('rRim');
        cta = document.getElementById('cta');
        vignette = document.getElementById('vignette');
        shadow = document.getElementById('shadow');
        text1a = document.getElementById('text1a');
        text1b = document.getElementById('text1b');
        city = document.getElementById('city');
        gorilla = document.getElementById('gorilla');
        tiguan = document.getElementById('tiguan');
        scene = document.getElementById('scene');
        curtain = document.getElementById('curtain');
        buttonExit = document.getElementById('button-exit');
        TweenMax.set(scene, {transformOrigin: "100% 0%"});

        buttonExit.addEventListener('click', function() {
            window.open(window.clickTag);
        });

        buttonExit.addEventListener('mouseover', function() {
            TweenMax.to(cta, .25, {backgroundColor:"#1072af"});
        });

        buttonExit.addEventListener('mouseout', function() {
            TweenMax.to(cta, .25, {backgroundColor:"#00b1eb"});
        });
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        TweenMax.to(gorilla,3, {rotation:-5, ease:Sine.easeInOut, repeat:100,yoyo:true}, .5);

        tl1.to(curtain, .5, {opacity: 0})
            .to(scene, 5, {scale: 1, x:"-=375", ease: Sine.easeInOut})
            .to(scene, 3, {y:"+=200", ease: Sine.easeInOut}, "-=5")
            .to(city, 3, {opacity: 0}, "-=1");

        tl2.from(tiguan, 3, {scale:.1, x:"+=135", y:"-=15", ease: Sine.easeInOut}, "+=4")
            .from(fRim, 3, {rotation:"+=2000", ease:Sine.easeOut}, "-=3")
            .from(rRim, 3, {rotation:"+=2000", ease:Sine.easeOut}, "-=3")
            .to(fRim, .75, {opacity:0}, "-=.5")
            .to(rRim, .75, {opacity:0}, "-=.5");

        tl3.to(text1a, 1, {opacity:1}, "+=5")
            .to(shadow, 1, {opacity:1}, "-=1")
            .to(vignette, 1, {opacity:1}, "-=1")
            .to(text1b, 1, {opacity:1})
            .to(cta, 1, {opacity:1});
    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
