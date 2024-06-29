class count_object {
  static i = 0;
  constructor() {
    count_object.i++;
  }
  static getCount() {
    console.log(count_object.i);
  }
}

const obj1 = new count_object();
const obj2 = new count_object();

count_object.getCount();
