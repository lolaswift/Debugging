import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-map2',
  templateUrl: 'map2.html'
})
export class Map2Page {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  latitude: any;
  longitude: any;

  @ViewChild('map')
  private element: ElementRef;
  private map: GoogleMap;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }


  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {


    this.latitude = 0;
    this.longitude = 0;

    console.log("initing map. checking latlong");

    this.map = GoogleMaps.create(this.element.nativeElement);
    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
    })
  }
}
