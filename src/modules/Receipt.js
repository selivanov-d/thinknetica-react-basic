import SimpleMath from './SimpleMath';
import Catalog from '../constants/catalog';

class Receipt {
  constructor() {
    this.list = {};
  }

  add(itemName) {
    const {list} = this;

    list[itemName] = list[itemName] || 0;
    list[itemName] = SimpleMath.add(list[itemName], 1);
  }

  remove(itemName) {
    const {list} = this;

    if (list[itemName] > 1) {
      list[itemName] = SimpleMath.subtract(list[itemName], 1);
    } else {
      delete list[itemName];
    }
  }

  get totalPrice() {
    return Object.entries(this.list).reduce((totalPrice, item) => {
      const [itemName, itemCount] = item;
      const {price: itemPrice} = Catalog[itemName];
      const itemTotalPrice = SimpleMath.multiply(itemPrice, itemCount);

      totalPrice = SimpleMath.add(totalPrice, itemTotalPrice);
      return totalPrice;
    }, 0);
  }
}

export default Receipt;
