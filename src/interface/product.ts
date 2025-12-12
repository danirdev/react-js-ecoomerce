export interface Product {
    id?:             number;
    name:           string;
    category:       string;
    brand:          string;
    price:          number;
    originalPrice:  number;
    discount:       number;
    image:          string;
    images:         string[];
    description:    string;
    features:       string[];
    specifications?: Specifications;
    colors:         string[];
    stock:          number;
    rating:         number;
    reviews:        number;
    isFeatured:     boolean;
    isNew:          boolean;
    freeShipping:   boolean;
}

export interface Specifications {
    screen:    string;
    processor: string;
    ram:       string;
    storage:   string;
    camera:    string;
    battery:   string;
    os:        string;
}

export interface CartProduct {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}