import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  currentLatitude = 51.678418;
  currentLongitude = 7.809007;
  marcadorLatitude = 0;
  marcadorLongitude = 0;
  locationChoose = false;
  isTracking = false;
  zoomDefault = 18;

  onChooseLocation(event) {
    console.log(event);
    this.marcadorLatitude = event.coords.lat;
    this.marcadorLongitude = event.coords.lng;
    this.locationChoose = true;
  }

  constructor() { }

  ngOnInit() {
    this.findMe();
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  showPosition(position) {
    this.currentLatitude = position.coords.latitude;
    this.currentLongitude = position.coords.longitude;
  }

  showTrackingPosition(position) {
    console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    this.currentLatitude = position.coords.latitude;
    this.currentLongitude = position.coords.longitude;
  }
}
