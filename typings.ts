
export interface Product{
    title:string
    imageUrls:string[]
    description:string
    reviews:{
      title:string
      review:string
      rating:number
    }[]
    price:number
    attributes:string[]
    stock:number
  }