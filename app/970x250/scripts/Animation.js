var app = app || {};


app.Animation = (function () {

    var curtain,
        tl1,
        buttonExit,
        scene;

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        tl1 = new TimelineMax();

        scene = document.getElementById('scene');
        curtain = document.getElementById('curtain');
        buttonExit = document.getElementById('button-exit');
        TweenMax.set(scene, {transformOrigin: "100% 0%"});
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl1.to(curtain, .5, {opacity: 0})
            .to(scene, 5, {scale: 1, x:"-=375", ease: Sine.easeInOut})
            .to(scene, 3, {y:"+=200", ease: Sine.easeInOut}, "-=3");
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
