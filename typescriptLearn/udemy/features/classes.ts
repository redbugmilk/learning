// class Vehicle {

//     color: string;

//     constructor(color: string){
//         this.color = color;
//     }

//     private honk():void{
//         console.log("beep");

//     }
//     //if no modifier assume public
//     honk2():void{
//         console.log("beep");

//     }

//     protected honk3():void{
//         console.log("beep");

//     }
// }

class Vehicle {
  //can be private and protected too
  constructor(public color: string) {}
}

class Car extends Vehicle {
    //don't add public to color this is defined by the super
  constructor(public wheels: number, color: string) {
      super(color);
  }
  private drive(): void {
    console.log("brumm brumm");
  }
  startDrivingProcess(): void {
    this.drive();
    // this.honk3();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// //instance
// const vehicle = new Vehicle();
// console.log(vehicle.color)
// //vehicle.drive();
// vehicle.honk2();

const car = new Car(4,"red");
console.log(car.color);
console.log(car.wheels);


// car.honk2();
// //car.drive();
// car.startDrivingProcess();
