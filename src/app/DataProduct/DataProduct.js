import beefSalad from '../../assets/menu/salad/beefSalad.jpg'
import chickenCesar from '../../assets/menu/salad/chickenCesar.jpg'
import redWhite from '../../assets/menu/salad/redWhite.jpg'
import duckSalad from '../../assets/menu/salad/duckSalad.jpg'
import greekSalad from '../../assets/menu/salad/greekSalad.jpg'
import shrimpSalad from '../../assets/menu/salad/shrimpSalad.jpg'
import tartarus from '../../assets/menu/coldAppetizers/tartarus.jpg'
import beefCarpaccio from '../../assets/menu/coldAppetizers/beefCarpaccio.jpg'
import bruschetta from '../../assets/menu/coldAppetizers/bruschetta.jpg'
import cheese from '../../assets/menu/coldAppetizers/cheese.jpg'
import fish from '../../assets/menu/coldAppetizers/fish.jpg'
import hears from '../../assets/menu/coldAppetizers/hears.jpg'
import herring from '../../assets/menu/coldAppetizers/herring.jpg'
import meat from '../../assets/menu/coldAppetizers/meat.jpg'
import salting from '../../assets/menu/coldAppetizers/salting.jpg'
import vegetables from '../../assets/menu/coldAppetizers/vegetables.jpg'
import forBeer from '../../assets/menu/hotAppetizers/forBeer.jpg'
import squid from '../../assets/menu/hotAppetizers/squid.jpg'
import sauseges from '../../assets/menu/hotAppetizers/sauseges.jpg'
import shrimps from '../../assets/menu/hotAppetizers/shrimps.jpg'
import wings from '../../assets/menu/hotAppetizers/wings.jpg'



const DataProduct = {
    salad: [
        {
            id: '1',
            name: 'Ростбиф салат',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: beefSalad,
            weight: 290
        },
        {
            id: '2',
            name: 'Цезарь с курицей',
            price: 22,
            descr: 'Листья салата, филе куриное на углях, заправка',
            image: chickenCesar,
            weight: 350
        },
        {
            id: '3',
            name: 'Red & White',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: redWhite,
            weight: 390
        },
        {
            id: '4',
            name: 'Салат с уткой',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: duckSalad,
            weight: 290
        },
        {
            id: '5',
            name: 'Греческий',
            price: 22,
            descr: 'Листья салата, филе куриное на углях, заправка',
            image: greekSalad,
            weight: 350
        },
        {
            id: '6',
            name: 'С креветками',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: shrimpSalad,
            weight: 390
        },

        //закуски
        {
            id: '7',
            name: 'Тар-тар',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: tartarus,
            weight: 390
        },
        {
            id: '8',
            name: 'Карпаччо',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: beefCarpaccio,
            weight: 390
        },
        {
            id: '10',
            name: 'Брускетты',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: bruschetta,
            weight: 390
        },
        {
            id: '11',
            name: 'Сырная нарезка',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: cheese,
            weight: 390
        },
        {
            id: '12',
            name: 'Рыбная нарезка',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: fish,
            weight: 390
        },
        {
            id: '13',
            name: 'Доска ушей',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: hears,
            weight: 390
        },
        {
            id: '14',
            name: 'Селедочка особая',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: herring,
            weight: 390
        },
        {
            id: '15',
            name: 'Мясная нарезка',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: meat,
            weight: 390
        },
        {
            id: '16',
            name: 'Соления',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: salting,
            weight: 390
        },
        {
            id: '17',
            name: 'Овощная нарезка',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: vegetables,
            weight: 390
        },
        {
            id: '18',
            name: 'Карпаччо',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: beefCarpaccio,
            weight: 390
        },
        {
            id: '19',
            name: 'Доска к пиву',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: forBeer,
            weight: 390
        },
        {
            id: '20',
            name: 'Кальмар в темпуре',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: squid,
            weight: 390
        },
        {
            id: '21',
            name: 'Колбаски 3х3',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: sauseges,
            weight: 390
        },
        {
            id: '22',
            name: 'Креветки в сиропе',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: shrimps,
            weight: 390
        },
        {
            id: '23',
            name: 'Хрустящие крылья',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: wings,
            weight: 390
        },



















    ],

    main: [
        {
            id: '7',
            name: 'Ростбиф салат',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: beefSalad,
            weight: 290
        },
        {
            id: '8',
            name: 'Цезарь с курицей',
            price: 22,
            descr: 'Листья салата, филе куриное на углях, заправка',
            image: chickenCesar,
            weight: 350
        },
        {
            id: '9',
            name: 'Red & White',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: redWhite,
            weight: 390
        },
        {
            id: '10',
            name: 'Ростбиф салат',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: duckSalad,
            weight: 290
        },
        {
            id: '11',
            name: 'Цезарь с курицей',
            price: 22,
            descr: 'Листья салата, филе куриное на углях, заправка',
            image: duckSalad,
            weight: 350
        },
        {
            id: '12',
            name: 'Red & White',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: duckSalad,
            weight: 390
        },
        {
            id: '13',
            name: 'Ростбиф салат',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: duckSalad,
            weight: 290
        },
        {
            id: '14',
            name: 'Цезарь с курицей',
            price: 22,
            descr: 'Листья салата, филе куриное на углях, заправка',
            image: duckSalad,
            weight: 350
        },
        {
            id: '15',
            name: 'Red & White',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: duckSalad,
            weight: 390
        },
        {
            id: '16',
            name: 'Ростбиф салат',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: duckSalad,
            weight: 290
        },
        {
            id: '17',
            name: 'Цезарь с курицей',
            price: 22,
            descr: 'Листья салата, филе куриное на углях, заправка',
            image: duckSalad,
            weight: 350
        },
        {
            id: '18',
            name: 'Red & White',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: duckSalad,
            weight: 390
        },
    ]
}

export default DataProduct;