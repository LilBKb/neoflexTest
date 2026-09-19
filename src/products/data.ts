import type { Product } from "./interface";
import air from './images/Apple AirPods.png'
import ear from './images/Apple EarPods.png'
import earCase from './images/Apple EarPods with case.png'
import byz from './images/Apple BYZ S8521.png'
import borofone from './images/BOROFONE B04.png'
import gerlax from './images/GERLAX GH-04.png'



export const products:Product[] = [
    {
        title:'Наушники',
        products:
        [{
            name:'Apple EarPods',
            price:2327,
            rating:4.5,
            image:ear
        },
        {
            name:'Apple BYZ S8521',
            price:2927,
            rating:4.7,
            image:byz
        },
        {
            name:'Apple EarPods',
            price:2327,
            rating:4.5,
            image:earCase
        },
        
        ]
    },
    {
        title:'Беспроводные наушники',
        products:[
            {
                name:'Apple AirPods',
                price:9527,
                image:air,
                rating:4.7
            },
            {
                name:'BOROFONE B04',
                price:7527,
                image:borofone,
                rating:4.7
            },
            {
                name:'GERLAX GH-04',
                price:6527,
                rating:4.7,
                image:gerlax
            },
            {
                name:'Apple AirPods',
                price:9527,
                image:air,
                rating:4.7
            },
            {
                name:'BOROFONE B04',
                price:7527,
                image:borofone,
                rating:4.7
            },
            {
                name:'GERLAX GH-04',
                price:6527,
                rating:4.7,
                image:gerlax
            }

        ]
    }
]