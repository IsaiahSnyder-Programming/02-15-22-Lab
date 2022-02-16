
export class Snack {
    constructor(name, price) {
        this.name = name
        this.price = price
    }


    get SnackTemplate() {
        return `
        <div class="m-2">
            <img class="img-fluid" src="//thiscatdoesnotexist.com/" id="snackBtn" onclick="app.vendingController.buySnack('${this.price}')">
            <h3>${this.name}</h3>
            <h3>${this.price}</h3>
        </div>
        `
    }
}