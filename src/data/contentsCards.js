import {financial} from './contents/financial';
import {environmentalPartner} from './contents/environmentalPartner';
import { internetMedia } from './contents/internetMedia';
import { legal } from './contents/legal';
import {professional} from './contents/professional';
import { propertyAndRealEstate } from './contents/propertyAndRealEstate';
import { registration } from './contents/registration';
import { regulator } from './contents/regulator';
import { restrictedList } from './contents/restrictedList';

const contentsCards = (filtered) => {
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

    return filtered == 10 || !filtered ? cards : getFilteredCards(cards, filtered)
}

function getFilteredCards(cards, filtered) {
    return cards.filter(card => {
        return card.id == filtered
    })
}

export {contentsCards}