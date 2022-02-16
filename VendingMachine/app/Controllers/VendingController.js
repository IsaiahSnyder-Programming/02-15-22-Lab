import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

// PRIVATE
function _draw() {
    document.getElementById('totalMoney').innerText = ProxyState.money.toFixed(2)

    let snacks = ProxyState.snacks
    let snackTemplate = ''
    snacks.forEach(a => snackTemplate += a.SnackTemplate)
    document.getElementById("snackApp").innerHTML = `${snackTemplate}`
}


// PUBLIC
export class VendingController {
    constructor() {
        ProxyState.on("money", _draw)
        _draw()
    }

    insertQuarter() {
        vendingService.insertQuarter()
    }

    buySnack(id) {
        vendingService.buySnack(id)
    }

}