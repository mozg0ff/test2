import {IProduct} from "../models/product";

export const products: IProduct[] = [
  {
    id: 1,
    title: "Мужская Сумка: Fits Laptops",
    price: 109.95,
    description: "Ваш идеальный рюкзак для повседневного использования и прогулок в лесу. Спрячьте свой ноутбук (до 15 дюймов) в мягкий чехол на каждый день.",
    category: "men\'s clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: 'Мужской свитер: Fit T-Shorts',
    price: 149.99,
    description: 'Облегающий крой, контрастный длинный рукав реглан, планка с тремя пуговицами, легкая и мягкая ткань для воздухопроницаемости и комфорта при ношении. Рубашки с круглым вырезом и круглым вырезом, выполненные из цельного шва, отличаются долговечностью и отлично подходят для повседневной модной одежды и несгибаемых фанатов бейсбола. Круглый вырез в стиле Henley дополнен планкой с тремя пуговицами.',
    category:'men\'s clothing,',
    image:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating:{
      rate: 4.1,
      count: 259
    }
  }
]
