// init data
new Vue({
    el: '.index',
    data: {
        jpana: '神 の 世 界 へ よ う こ そ',
        usana: 'Scarcity Is The Price Of All Things',
        svs: [
            {
                name: 'irasuto',
                text: 'いらすと'
            },
            {
                name: 'akome',
                text: 'アニメ'
            }
        ]
    },
    methods: {
        skip: function (url) {
            // window.location.href = url;
        }
    }
});

// - - - - - - - - - - - - - - - Loading Animation Start - - - - - - - - - - - - - - -
// loading after init
$(function () {
    $('.bannerafter').fadeIn(3000);
    $('.cvanimes').fadeIn(1500, x);
});
// fun x
function x() {
    // in
    $('.god').fadeIn(1500);
    // - - - - - - - - - - - - - - - Timing To Hide Start - - - - - - - - - - - - - - -
    // autotime, body
    let autoTime;
    let body = document.getElementsByTagName("body")[0];
    // body event
    body.onkeydown = body.onmousemove = body.onclick = body.scrollTop = function () {
        clearInterval(autoTime);
        $('.god').fadeIn(1500);
        timerkey();
    }
    // timer key
    function timerkey() {
        autoTime = setInterval(function () {
            $('.god').fadeOut(1500);
        }, 5000);
    }
    timerkey();
    // - - - - - - - - - - - - - - - Timing To Hide Stop - - - - - - - - - - - - - - -
}
// - - - - - - - - - - - - - - - Loading Animation Stop - - - - - - - - - - - - - - -