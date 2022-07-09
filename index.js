class Apple {
  constructor(weigth) {
    this.weigth = weigth;
  }

  decrease() {
    this.weigth = this.weigth - 1;
  }

  isEmpty() {
    if (this.weigth === 0) {
      return true;
    }
    return false;
  }

  getWeight() {
    return this.weigth;
  }
}

let apple = new Apple(10);

class Human {
  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  };
  
  speak() {
    console.log("Tôi là "+ this.name);
  }
  checkVolum() {
    return apple.getWeight();
  }
  eatApple() {
    if (apple.weigth > 0) {
    this.weight = this.weight + 1;
    apple.decrease();
    } else {
      console.log("Ăn hết táo rồi");
    }
  }

  getName() {
    return this.name;
  }

  getWeight() {
    return this.weight;
  }
}

let eva = new Human("Eva", "Nữ", 50);
let adam = new Human("Adam", "Nam", 70);
eva.speak();
console.log(eva.checkVolum());
eva.eatApple();
console.log(eva.checkVolum());
console.log(eva.getWeight());
adam.eatApple();
console.log(adam.checkVolum());
console.log(adam.getWeight());
eva.eatApple();