import {TimelineMax} from 'gsap';

export default {
  transition: {
    css: false,
    name: 'test',
    mode: 'out-in',
    enter: function (el, done) {
      let tl = new TimelineMax({onComplete: done});
      tl.fromTo(el, 0.5, {x:100, opacity:0}, {x:-50, opacity:1});
      tl.to(el, 0.5, {x:0});
    },
    leave: function (el, done) {
      let tl = new TimelineMax({onComplete: done});
      tl.fromTo(el, 0.3, {x:0}, {x:50})
        .to(el, 0.5, {x:-100, opacity:0});
    }
  }
}
