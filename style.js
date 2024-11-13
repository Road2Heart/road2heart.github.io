// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13); // Centered at London

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
const marker = L.marker([51.505, -0.09]).addTo(map);

// Bind a popup to the marker
marker.bindPopup('<b>Hello!</b><br>This is London.').openPopup();

// Add a circle
const circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

// Add a polygon
const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);

// Event listener for map clicks
map.on('click', (e) => {
  const { lat, lng } = e.latlng;
  alert(`You clicked at latitude: ${lat}, longitude: ${lng}`);
});
