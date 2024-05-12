import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'app-google-map-demo',
  templateUrl: './google-map-demo.component.html',
  styleUrls: ['./google-map-demo.component.css'],
})
export class GoogleMapDemoComponent {
  ngOnInit(): void {
    // this.getCurrentLocation();
  }
  
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.convertToAddress(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  convertToAddress(latitude: number, longitude: number) {
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK') {
        if (results && results[0]) { // Add null check for results array
          this.display = results[0].formatted_address;
          console.log(this.display)
        } else {
          console.error('No results found');
        }
      } else {
        console.error('Geocoder failed due to: ' + status);
      }
    });
  }
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
