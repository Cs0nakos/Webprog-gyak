let ct= document.getElementsByTagName("div")[0];
ct = document.querySelector("div");
//ct = document.querySelectorAll("div")[0];
let lines = _cars.split("\n");
for (let i in lines) {
    let car = new Car(lines[i]);
ct.appendChild(car.createCard());
}