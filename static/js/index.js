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
            window.location.href = url;
        }
    }
});
$('.god').fadeIn("slow");
// - - - - - - - - - - - - - - - Timing to hide Start - - - - - - - - - - - - - - -
// autotime, body
let autoTime;
let body = document.getElementsByTagName("body")[0];
// body event
body.onkeydown = body.onmousemove = body.onclick = body.scrollTop = function () {
    clearInterval(autoTime);
    document.getElementsByClassName('god')[0].style.display = 'block';
    timerkey();
}
// timer key
function timerkey() {
    autoTime = setInterval(function () {
        document.getElementsByClassName('god')[0].style.display = 'none';
    }, 5000);
}
timerkey();
// - - - - - - - - - - - - - - - Timing to hide Stop - - - - - - - - - - - - - - -