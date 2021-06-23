function Drink(name, sugar, ice){ //飲料物件產生
  this.name = name
  this.sugar = sugar
  this.ice = ice
}

Drink.prototype.price = function(){ //取得飲料價格放入Drink中
  switch(this.name){
    case 'Black Tea':
    case 'Oolong Tea':
    case 'Baozong Tea':
    case 'Green Tea':
      return 30
    case 'Bubble Milk Tea':
    case 'Lemon Green Tea':
      return 50
    case 'Black Tea Latte':
    case 'Matcha Latte':
      return 55
    default:
      alert('No this drink')
  }
}



let blackTea = new Drink('Black Tea', 'Half Sugar', 'No Ice')
console.log(blackTea)
console.log(blackTea.price())

