/* 鼠标滚动事件 start */
// let n = 0;
// let arrScrolls = ["banner", "acana", "contact"];
//
// $(document).on("mousewheel DOMMouseScroll", function (e) {
//     let delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
//         (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));            // firefox
//     if (delta < 0) {// 向下滚动
//         n++;
//         if (n >= 3) {
//             n = 0;
//         }
//     } else {// 向上滚动
//         n--;
//         if (n <= -1) {
//             n = 2;
//         }
//     }
//     setTimeout(function () {
//         window.location.href = "http://localhost:88/#" + arrScrolls[n];
//     }, 1);
// });
/* 鼠标滚动事件 stop */