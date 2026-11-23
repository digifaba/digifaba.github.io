// before/after sliders
document.querySelectorAll('.ba').forEach(function (el) {
  var r = el.querySelector('input');
  var set = function () { el.style.setProperty('--pos', r.value + '%'); };
  r.addEventListener('input', set); set();
});
// trait hotspots
document.querySelectorAll('[data-spots]').forEach(function (box) {
  var btns = box.querySelectorAll('button'), items = box.querySelectorAll('.trait-list li');
  btns.forEach(function (b, i) {
    b.addEventListener('click', function () {
      btns.forEach(function (x, j) { x.setAttribute('aria-pressed', i === j); });
      items.forEach(function (x, j) { x.classList.toggle('on', i === j); });
    });
  });
});
// respect reduced motion for SVG animations
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('svg.anim').forEach(function (s) { s.pauseAnimations(); });
}
