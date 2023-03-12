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
import capelin from '../../assets/menu/hotAppetizers/capelin.jpg'
import cheeseSticks from '../../assets/menu/hotAppetizers/cheeseSticks.jpg'
import friedCheese from '../../assets/menu/hotAppetizers/friedCheese.jpg'
import friedSeafood from '../../assets/menu/hotAppetizers/friedSeafood.jpg'
import spiceEars from '../../assets/menu/hotAppetizers/spiceEars.jpg'
import sausagesMix from '../../assets/menu/main/sausagesMix.jpg'
import beefStrog from '../../assets/menu/main/beefStrog.jpg'
import wellington from '../../assets/menu/main/wellington.jpg'
import knuckle from '../../assets/menu/main/knuckle.jpg'
import salmon from '../../assets/menu/main/salmon.jpg'
import tarantino from '../../assets/menu/main/tarantino.jpg'
import duck from '../../assets/menu/main/duck.jpg'
import ribs from '../../assets/menu/main/ribs.jpg'
import creamOfChicken from '../../assets/menu/main/creamOfChicken.jpg'
import skewers from '../../assets/menu/main/skewers.jpg'
import lux from '../../assets/menu/burgers/lux.jpg'
import ten from '../../assets/menu/burgers/ten.jpg'
import fireDepart from '../../assets/menu/burgers/fireDepart.jpg'
import caesar from '../../assets/menu/burgers/caesar.jpg'
import king from '../../assets/menu/burgers/king.jpg'
import peper from '../../assets/menu/steak/peper.png'
import roastbeef from '../../assets/menu/steak/roastbeef.jpg'
import english from '../../assets/menu/steak/english.jpg'
import mushCheese from '../../assets/menu/steak/mushCheese.jpg'
import cranberry from '../../assets/menu/steak/cranberry.jpg'
import cherry from '../../assets/menu/steak/cherry.jpg'
import friends from '../../assets/menu/fryingPan/friends.jpg'
import village from '../../assets/menu/fryingPan/village.jpg'
import milkVeal from '../../assets/menu/fryingPan/milkVeal.jpg'
import fishMix from '../../assets/menu/fryingPan/fishMix.jpg'
import borsch from '../../assets/menu/soap/borsch.jpg'
import germany from '../../assets/menu/soap/germany.jpg'
import solyanka from '../../assets/menu/soap/solyanka.jpg'
import seaFood from '../../assets/menu/soap/seaFood.jpg'




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
        {
            id: '24',
            name: 'Мойвочка фри',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: capelin,
            weight: 390
        },
        {
            id: '25',
            name: 'Сырные палочки',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: cheeseSticks,
            weight: 390
        },
        {
            id: '26',
            name: 'Жареные сыры',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: friedCheese,
            weight: 390
        },
        {
            id: '27',
            name: 'Морепродукты в кляре',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: friedSeafood,
            weight: 390
        },
        {
            id: '28',
            name: 'Уши в соусе',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: spiceEars,
            weight: 390
        },




















    ],

    main: [
        {
            id: '29',
            name: 'Колбасный MIX',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: sausagesMix,
            weight: 290
        },
        {
            id: '30',
            name: 'Бефстроганов',
            price: 22,
            descr: 'Листья салата, филе куриное на углях, заправка',
            image: beefStrog,
            weight: 350
        },
        {
            id: '31',
            name: 'Велингтон',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: wellington,
            weight: 390
        },
        {
            id: '32',
            name: 'Рулька к пиву',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: knuckle,
            weight: 290
        },
        {
            id: '33',
            name: 'Стейк из лосося',
            price: 22,
            descr: 'Листья салата, филе куриное на углях, заправка',
            image: salmon,
            weight: 350
        },
        {
            id: '34',
            name: 'Тарантино',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: tarantino,
            weight: 390
        },
        {
            id: '35',
            name: 'Утка на дранике',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: duck,
            weight: 290
        },
        {
            id: '36',
            name: 'Томленые рёбра',
            price: 22,
            descr: 'Листья салата, филе куриное на углях, заправка',
            image: ribs,
            weight: 350
        },
        {
            id: '37',
            name: 'Cream of Chicken',
            price: 19,
            descr: 'Листья салата, филе лосося, филе трески, заправка',
            image: creamOfChicken,
            weight: 390
        },
        {
            id: '38',
            name: 'Шашлык',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: skewers,
            weight: 290
        },
    ],

    burgers: [
        {
            id: '39',
            name: 'Бургер LUX',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: lux,
            weight: 290
        },
        {
            id: '40',
            name: '',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: ten,
            weight: 290
        },
        {
            id: '41',
            name: 'Пожарная часть',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: fireDepart,
            weight: 290
        },
        {
            id: '42',
            name: 'Цезарь-бургер',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: caesar,
            weight: 290
        },
        {
            id: '43',
            name: 'Кинг-Конг',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: king,
            weight: 1000
        },

    ],

    steak: [
        {
            id: '44',
            name: 'Пепер стейк',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: peper,
            weight: 400
        }, 
        {
            id: '45',
            name: 'Ростбиф',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: roastbeef,
            weight: 400
        },
        {
            id: '46',
            name: 'С винным соусом',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: english,
            weight: 400
        },
        {
            id: '47',
            name: 'С чеддером',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: mushCheese,
            weight: 400
        },
        {
            id: '48',
            name: 'С клюквенным соусом',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: cranberry,
            weight: 400
        },
        {
            id: '49',
            name: 'С черри',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: cherry,
            weight: 400
        },
    ],
     
    fryingPan:[
        {
            id: '50',
            name: 'Три товарища',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: friends,
            weight: 400
        },
        {
            id: '51',
            name: 'Деревенская',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: village,
            weight: 400
        },
        {
            id: '52',
            name: 'Телятина',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: milkVeal,
            weight: 400
        },
        {
            id: '53',
            name: 'Фиш ассорти',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: fishMix,
            weight: 400
        },
    ],
    soap: [
        {
            id: '54',
            name: 'Борщ',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: borsch,
            weight: 400
        }, 
        {
            id: '55',
            name: 'Немецкий суп',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: germany,
            weight: 400
        }, 
        {
            id: '56',
            name: 'Солянка',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: solyanka,
            weight: 400
        },
        {
            id: '57',
            name: 'С морепродуктами',
            price: 19,
            descr: 'Листья салата, говяжья вырезка на углях, заправка',
            image: seaFood,
            weight: 400
        },
    ]

}

export default DataProduct;