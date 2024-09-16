import { Injectable } from '@angular/core';
import { CategoryEnum, Product, GenderEnum } from '../models/product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      item: 'Vestido de linho',
      description: 'Vestido vermelho de linho confortável',
      image: 'img-vestido.jpeg',
      value: 120,
      category: 1, 
      gender: 1
    },
    {
      id: 2,
      item: 'Bermuda de algodão',
      description: 'Bermuda casual azul clara',
      image: 'img-bermuda.jpeg',
      value: 80,
      category: 2, 
      gender: 2
    },
    {
      id: 3,
      item: 'Bolsa de couro',
      description: 'Bolsa preta elegante com alça longa',
      image: 'img-bolsa.jpeg',
      value: 250,
      category: 3, 
      gender: 1
    },
    {
      id: 4,
      item: 'Calça jeans',
      description: 'Calça jeans tradicional com ajuste perfeito',
      image: 'img-calca.jpeg',
      value: 150,
      category: 1, 
      gender: 1
    },
    {
      id: 5,
      item: 'Calça moletom',
      description: 'Calça de moletom cinza confortável para o dia a dia',
      image: 'img-calcam.jpeg',
      value: 90,
      category: 2, 
      gender: 2
    },
    {
      id: 6,
      item: 'Camiseta básica',
      description: 'Camiseta branca de algodão suave',
      image: 'img-camiseta.jpeg',
      value: 50,
      category: 3, 
      gender: 2
    },
    {
      id: 7,
      item: 'Vestido floral',
      description: 'Vestido floral com estampa vibrante',
      image: 'img-vestido.jpeg',
      value: 140,
      category: 2, 
      gender: 1
    },
    {
      id: 8,
      item: 'Bermuda cargo',
      description: 'Bermuda cargo verde militar com bolsos',
      image: 'img-bermuda.jpeg',
      value: 95,
      category: 1, 
      gender: 2
    },
    {
      id: 9,
      item: 'Bolsa tiracolo',
      description: 'Bolsa tiracolo bege com zíperes e compartimentos',
      image: 'img-bolsa.jpeg',
      value: 180,
      category: 2, 
      gender: 1
    },
    {
      id: 10,
      item: 'Calça social',
      description: 'Calça social preta com corte reto',
      image: 'img-calca.jpeg',
      value: 160,
      category: 1, 
      gender: 1
    },
    {
      id: 11,
      item: 'Calça de veludo',
      description: 'Calça de veludo marrom aconchegante',
      image: 'img-calcam.jpeg',
      value: 120,
      category: 3, 
      gender: 2
    },
    {
      id: 12,
      item: 'Camiseta estampada',
      description: 'Camiseta com estampa artística exclusiva',
      image: 'img-camiseta.jpeg',
      value: 60,
      category: 2, 
      gender: 2
    },
    {
      id: 13,
      item: 'Vestido longo',
      description: 'Vestido longo de seda para eventos especiais',
      image: 'img-vestido.jpeg',
      value: 200,
      category: 3, 
      gender: 1
    },
    {
      id: 14,
      item: 'Bermuda de linho',
      description: 'Bermuda de linho leve para dias quentes',
      image: 'img-bermuda.jpeg',
      value: 110,
      category: 2, 
      gender: 2
    },
    {
      id: 15,
      item: 'Bolsa esportiva',
      description: 'Bolsa esportiva com compartimentos para academia',
      image: 'img-bolsa.jpeg',
      value: 130,
      category: 1, 
      gender: 1
    },
    {
      id: 16,
      item: 'Calça cargo',
      description: 'Calça cargo preta com bolsos laterais',
      image: 'img-calca.jpeg',
      value: 145,
      category: 3, 
      gender: 1
    },
    {
      id: 17,
      item: 'Calça jogger',
      description: 'Calça jogger cinza com ajuste na cintura',
      image: 'img-calcam.jpeg',
      value: 100,
      category: 1, 
      gender: 2
    },
    {
      id: 18,
      item: 'Camiseta polo',
      description: 'Camiseta polo azul marinho com bordado discreto',
      image: 'img-camiseta.jpeg',
      value: 75,
      category: 2, 
      gender: 2
    },
    {
      id: 19,
      item: 'Vestido tubinho',
      description: 'Vestido tubinho preto clássico',
      image: 'img-vestido.jpeg',
      value: 170,
      category: 1, 
      gender: 1
    },
    {
      id: 20,
      item: 'Bolsa de palha',
      description: 'Bolsa de palha perfeita para o verão',
      image: 'img-bolsa.jpeg',
      value: 140,
      category: 3, 
      gender: 1
    },
  ];

  filterByCategory(category: CategoryEnum) {
    return this.products.filter((product) => {
      return category == product.category;
    })
  }

  filterByGender(gender: GenderEnum) {
    return this.products.filter((product) => {
      return gender == product.gender;
    })
  }
}

