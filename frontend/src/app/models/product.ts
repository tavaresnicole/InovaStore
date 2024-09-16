export interface Product {
    id: number;
    item: string;
    description: string;
    image: string;
    value: number;
    category: CategoryEnum;
    gender: GenderEnum;
}

export enum CategoryEnum {
    BestSellers = 1,
    News = 2,
    Sales = 3
}

export enum GenderEnum {
    Female = 1,
    Male = 2
}