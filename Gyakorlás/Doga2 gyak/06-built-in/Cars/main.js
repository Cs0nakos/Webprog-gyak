const _container = document.querySelector('div');
const _cars = [];

function parseCars(data) {
    let lines = data.split('\n')
                .slice(1)
                .filter(line => line.length > 0);
    for (let line of lines) {
        let car = new Car(line);
        _cars.push(car);
    }
}

function renderCards(cars) {
    _container.innerHTML = '';
    for (const car of _cars) {
        _container.appendChild(car.createCard());
    }
}

function getUniqueValues() {
    return new Set(_cars.map(c => c.brand));
}

function populateBrandFilter() {
    const brands = getUniqueValues(car => car.brand);
    //const select = document.getElementsByTagName('select')[0];
    const select = document.querySelector('select');
    for (let brand of brands) {
        let option = document.createElement('option');
        option.value = brand;
        option.innerText = brand;
        select.appendChild(option);
    }
}

function applyFilter() {

}

parseCars(_carData);
renderCards(_cars);
populateBrandFilter();