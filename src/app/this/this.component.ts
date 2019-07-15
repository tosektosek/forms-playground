import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-this',
  templateUrl: './this.component.html',
  styleUrls: ['./this.component.scss'],
})
export class ThisComponent implements OnInit {
  ngOnInit() {}

  submit() {
    const rec = new Rectangle(3, 5);
    const func = rec.getAreaFunction;
    // console.log(func.bind(rec)()());
  }
}

class Rectangle {
  private w;
  private h;

  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  // getAreaFunction(this: Rectangle) {
  //   return () => {
  //     return this.w * this.h;
  //   };
  // }

    getAreaFunction() {
      return () => {
          return this.w * this.h;
      };
  }
}

// tslint:disable

// 1.

// function bike() {
//   console.log(this.name);
// }

// var name = "Ninja";
// var obj1 = { name: "Pulsar", bike: bike };
// var obj2 = { name: "Gixxer", bike: bike };

// bike();           // "Ninja"
// obj1.bike();      // "Pulsar"
// obj2.bike();      // "Gixxer"

// ========================================
// 2.

// var obj1 = {
//   name: "Pulsar",
//   bike: function() {
//     console.log(this.name);
//   }
// }
// var obj2 = { name: "Gixxer", bike: obj1.bike };
// var name = "Ninja";
// var bike = obj1.bike;

// bike();           // "Ninja"
// obj1.bike();      // "Pulsar"
// obj2.bike();      // "Gixxer"

// ========================================
// 3.

// function bike() {
//   console.log(this.name);
// }

// var name = "Ninja";
// var obj = { name: "Pulsar" }

// bike();           // "Ninja"
// bike.call(obj);   // "Pulsar"

// ========================================
// 4.

// var bike = function() {
//   console.log(this.name);
// }
// var name = "Ninja";
// var obj1 = { name: "Pulsar" };
// var obj2 = { name: "Gixxer" };

// var originalBikeFun = bike;
// bike = function() {
//   originalBikeFun.call(obj1);
// };

// bike();           // "Pulsar"
// bike.call(obj2);  // "Pulsar"

// ========================================
// 5.

// function bike() {
//   var name = "Ninja";
//   this.maker = "Kawasaki";
//   console.log(this.name + " " + maker);  // undefined Bajaj
// }

// var name = "Pulsar";
// var maker = "Bajaj";

// obj = new bike();
// console.log(obj.maker);                  // "Kawasaki"
