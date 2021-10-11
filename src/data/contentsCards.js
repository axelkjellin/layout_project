import {financial} from './contents/financial';
import {environmentalPartner} from './contents/environmentalPartner';
import { internetMedia } from './contents/internetMedia';
import { legal } from './contents/legal';
import {professional} from './contents/professional';
import { propertyAndRealEstate } from './contents/propertyAndRealEstate';
import { registration } from './contents/registration';
import { regulator } from './contents/regulator';
import { restrictedList } from './contents/restrictedList';

const contentsCards = (filtered, order, id) => {
    const cards = []
    cards.push(professional)
    cards.push(regulator)
    cards.push(environmentalPartner)
    cards.push(legal)
    cards.push(restrictedList)
    cards.push(internetMedia)
    cards.push(propertyAndRealEstate)
    cards.push(registration)
    cards.push(financial)
    
    if(!order || order.id == 1) {
        return filtered == 10 || !filtered ? cards : getFilteredCards(cards, filtered)
    } else {
        if(order.id == 2) {
            return filtered == 10 || !filtered ? sortByPrice(cards) : getFilteredCards(cards, filtered)
        }

        if(order.id == 3) {
            return filtered == 10 || !filtered ? sortByDate(cards) : getFilteredCards(cards, filtered)
        }
    }
}

function sortByPrice(cards) {
    cards.sort(priceOrder);
    return cards
}

function priceOrder(a, b) {
    return a.price - b.price
}

function sortByDate(cards) {
    cards.sort(dateOrder);
    return cards
}

function dateOrder(a, b) {
    return a.launch - b.launch
}

function getFilteredCards(cards, filtered) {
    return cards.filter(card => {
        return card.id == filtered
    })
}

export {contentsCards}