// Leaflet Map Setup
const map = L.map('map').setView([35.3667, -81.8722], 11); // Center on Rutherford County, NC

// Load Tile Layer from OpenStreetMap (or another provider if needed)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Example Annotation - Circle Marker (useful for locations like "Bridge Out")
L.circle([35.3667, -81.8722], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map).bindPopup("Bridge Out");

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
