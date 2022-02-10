export class Map {
  private googleMap: google.maps.Map;
  constructor(refToMapDiv: string) {
    this.googleMap = new google.maps.Map(document.getElementById(refToMapDiv),{
        zoom: 1,
        center:{
          lat:0,
          lng:0
        }
    })
  }
}