export interface Product{
    title:string,
    products:{
        name:string,
        rating:number,
        price:number,
        oldPrice?:number,
        image:string,
        description?:string
    }[]
}

