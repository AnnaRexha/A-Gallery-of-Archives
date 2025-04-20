// Enable pan and zoom on the memory map
const map = document.getElementById('memory-map');
panzoom(map, {
  smoothScroll: false,
  zoomDoubleClickSpeed: 1, // disables double-click zoom
  maxZoom: 3,
  minZoom: 0.5
});
