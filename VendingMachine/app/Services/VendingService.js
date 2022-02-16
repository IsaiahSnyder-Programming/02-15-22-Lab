import { ProxyState } from "../AppState.js";

class VendingService {
    insertQuarter() {
        ProxyState.money += 0.25
        console.log(ProxyState.money);
    }

    buySnack(id) {
        if(ProxyState.money >= id) {
            ProxyState.money -= id
        }
    } 
}

export const vendingService = new VendingService();