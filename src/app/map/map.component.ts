import { Place } from './../models/place';
import { MapService } from './../services/map.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  currentLatitude = 0;
  currentLongitude = 0;
  isTracking = false;
  zoomDefault = 12;
  currentZoom = 0;

  @Input()
  public places: Place[];

  @Output()
  public newPlace = new EventEmitter();

  @Output()
  public clickDetails = new EventEmitter();

  constructor() { }

  onCreateNewPlace(event) {
    if (this.currentZoom > 14) {
      this.newPlace.emit(event);
    }
  }

  ngOnInit() {
    this.findMe();
  }

  onClickDetails(event) {
    this.clickDetails.emit(event);
  }

  getZoom(event) {
    this.currentZoom = event;
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
