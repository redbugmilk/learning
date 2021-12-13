//Instructions to every other class
// on how they can be an argument to addMaker
export interface Mappable {
    location: {
        lat:number;
        lng:number;
    },
    markerContent(): string
}

export class CustomMap {
  private map: google.maps.Map;
  constructor(public id: string) {
    this.map = new google.maps.Map(document.getElementById(id), {
      clickableIcons: true,
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng
      },
    });

    marker.addListener('click',()=>{
        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
        });

        infoWindow.open(this.map, marker)
    })
  }

//   addUserMarker(user: User): void {
//     new google.maps.Marker({
//       map: this.map,
//       position: {
//           lat: user.location.lat,
//           lng: user.location.lng
//       },
//     });
//   }

//   addCompanyMarker(company: Company): void {
//     new google.maps.Marker({
//       map: this.map,
//       position: {
//         lat: company.location.lat,
//         lng: company.location.lng
//       }
//     });
//   }
}
