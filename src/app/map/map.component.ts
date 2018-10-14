import { Entity } from './../models/entity';
import { MapService } from './../services/map.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  currentLatitude = null;
  currentLongitude = null;
  isTracking = false;
  zoomDefault = 12;

  @Input()
  public entities: Entity[];

  @Output()
  public newEntity = new EventEmitter();

  constructor() { }

  onCreateNewEntity(event) {
    this.newEntity.emit(event);
  }

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
