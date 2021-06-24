const alphaPos = new AlphaPos()



function Drink(name, sugar, ice){ //飲料物件產生
  this.name = name
  this.sugar = sugar
  this.ice = ice
}

const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]')
addDrinkButton.addEventListener('click', function(){
  // 1. 取得店員選擇的飲料品項、甜度和冰塊
  const drinkName = alphaPos.getCheckedValue('drink')
  const ice = alphaPos.getCheckedValue('ice')
  const sugar = alphaPos.getCheckedValue('sugar')
  console.log(`${drinkName}, ${ice}, ${sugar}`)
  // 2. 如果沒有選擇飲料品項，跳出提示
  // 3. 建立飲料實例，並取得飲料價格
  // 4. 將飲料實例產生成左側訂單區的畫面
})

function AlphaPos () { }
AlphaPos.prototype.getCheckedValue = function(inputName){
  let selectOption = ''
  document.querySelectorAll(`[name=${inputName}]`).forEach(function(item){
    if(item.checked){
      selectOption = item.value
    }
  })
  return selectOption
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