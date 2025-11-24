class Car {
    brand;
    model;
    type;
    price;
    engine;
    power;
    topSpeed;
    img;
    constructor(sor) {
        const [brand, model, type, price, engine, power, topSpeed, img] = sor.split(";");
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.price = parseInt(price);
        this.engine = engine;
        this.power = Number(power);
        this.topSpeed = parseFloat(topSpeed);
        this.img = img;
    }

    createCard() {
        const card = document.createElement("car-card");
        card.id = `${this.brand}${this.model}`;
        card.innerHTML = `
        <h3>${this.brand} : ${this.model}</h3>
        <img src="${this.img}">
        <span class="label">Type:</span><span class="value">${this.type}</span>
        <span class="label">Power:</span><span class="value">${this.power}</span>
        <span class="label">Speed:</span><span class="value">${this.topSpeed}</span>
    `;
        return card;
    }

}