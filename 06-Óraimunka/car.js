class Car {
    brand;
    model;
    type;
    price;
    engine;
    power;
    topSpeed;
    img;
    constructor(line) {
        let darabok = line.split(';');
        let di = 0;
        this.brand = darabok[di++];
        this.model = darabok[di++];
        this.type = darabok[di++];
        this.price = parseInt(darabok[di++]);
        this.engine = darabok[di++];
        this.power = Number(darabok[di++]);
        this.topSpeed = parseFloat(darabok[di++]);
        this.img = darabok[di++];
    }

    createCard() {
        let card = document.createElement('car-card');
        card.id = `${this.brand}${this.model}`;
        card.innerHTML = `
        <h3>${this.brand} ${this.model}</h3>
        <img src="${this.img}" />
        <span class="label">Type</span><span class="value">${this.type}</span>
        <span class="label">Power</span><span class="value">${this.power}</span>        
        <span class="label">Top speed</span><span class="value">${this.topSpeed}</span>       
        `;
        return card;
    }
}