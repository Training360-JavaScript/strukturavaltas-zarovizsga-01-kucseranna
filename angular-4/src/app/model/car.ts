export class Car {
  //{id: 1,model: "Sierra 1500",make: "GMC",year: 2011,price: 33014,stock: 8,active: true},
  [k: string]: any;
  id: number = 0;
  model: string = '';
  make: string = '';
  year: number = 0;
  price: number = 0;
  stock: number = 0;
  active: boolean = true;
}
