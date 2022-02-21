//This class is a facade to hide google map implementation

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
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

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map:this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }

}