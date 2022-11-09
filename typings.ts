
export interface Product{
    title:string
    id:number
    imageUrls:string[]
    description:string
    reviews?:{
      id:number
      title?:string
      review?:string
      rating:number
    }[]
    price:number
    attributes:string[]
    stock:number
  }