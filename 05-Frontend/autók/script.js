const _template = `
  <span>brand</span><span>{{brand}}</span>
  <span>model</span><span>{{model}}</span>
  <span>price</span><span>{{price}}</span>
  <span>engine</span><span>{{engine}}</span>`;

function createCard(car) {
  let card = document.createElement('car-card');
  card.classList.add('card');
  card.className = 'card';
  
  // 1. megoldás "brute force"
  let content = _template.replace('{{brand}}', car.brand);
  content = content.replace('{{modell}}', car.modell);
  content = content.replace('{{price}}', car.price);
  content = content.replace('{{engine}}', car.engine);

  // 2. megoldás "for ciklus"
  content = _template;
  for (let key in car) {
    content = content.replace(`{{${key}}}`, car[key]);
    content = content.replace('{{'+key+'}}', car[key]);
  }

  // 3. megoldás "regexp"
  content = _template.replace(
    /{{(\w+)}}/g,
    (match, pattern) => car[pattern]
  );

  card.innerHTML = content;
  return card;
}

function renderCards(list) {
  let container = document.getElementById('carContainer');
  container = document.querySelector('#carContainer');
  container.innerHTML = '';
  
  for (let car of list) {
    let card = createCard(car);
    container.appendChild(card);
  }

  // for (let ix in list) {
  //   let car = list[ix];
  //   let card = createCard(car);
  //   container.appendChild(card);
  // }

  // for (let ix=0; ix<list.length; ix++) {
  //   let car = list[ix];
  //   let card = createCard(car);
  //   container.appendChild(card);
  // }
}

renderCards(cars);
document.getElementById('namefilter').addEventListener(
  'change',
  event => {
    let el = event.target;
    let list = cars.filter(c => c.brand.includes(el.value));
    renderCards(list);
  }
)