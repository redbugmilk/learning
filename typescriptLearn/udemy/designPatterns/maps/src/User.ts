import faker from 'faker/dist/faker.js';

type UserLocation = {
  lat: number;
  lng: number;
}

export class User {
  name: string;
  location: UserLocation;
  constructor() {
    this.name = faker.name.firstName();
    this.location= {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

}