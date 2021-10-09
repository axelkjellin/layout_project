import {financial} from './contents/financial';
import {environmentalPartner} from './contents/environmentalPartner';
import { internetMedia } from './contents/internetMedia';
import { legal } from './contents/legal';
import {professional} from './contents/professional';
import { propertyAndRealEstate } from './contents/propertyAndRealEstate';
import { registration } from './contents/registration';
import { regulator } from './contents/regulator';
import { restrictedList } from './contents/restrictedList';

export const contentsCards = () => {
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
    return cards
}
