// Initialize panzoom for the memory map
const element = document.getElementById('memory-map');
const panzoomInstance = panzoom(element, {
  maxZoom: 5,
  minZoom: 0.5,
  zoomSpeed: 0.1,
});

// Randomize memory point positions on page load
const memoryPoints = document.querySelectorAll('.memory-point');
memoryPoints.forEach(point => {
  const randomTop = Math.floor(Math.random() * 100) + '%';
  const randomLeft = Math.floor(Math.random() * 100) + '%';
  point.style.top = randomTop;
  point.style.left = randomLeft;
});

// Hover-to-reveal story functionality
memoryPoints.forEach(point => {
  point.addEventListener('mouseenter', () => {
    const memoryName = point.getAttribute('data-memory');
    const storyBox = document.getElementById('story');
    storyBox.textContent = memoryName;
    storyBox.style.display = 'block';
  });

  point.addEventListener('mouseleave', () => {
    const storyBox = document.getElementById('story');
    storyBox.style.display = 'none';
  });
});

// Add additional custom features or animations as needed

