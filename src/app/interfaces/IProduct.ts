
export enum ECategory {
  ALL = "Показать всех", ZELENGORAD = "Зеленоградец", HOVRINO = "Из ховрино", SOLNZEVO = "Аня", VLADA_GDE="Влада", OTHER = "Другие"
}
export interface IProduct {
  id: any,
  name: string | undefined,
  description: string | undefined,
  price: number | undefined,
  category: ECategory,
  isGood: boolean | undefined
}

export interface IProductWithoutId {
  name: string | undefined,
  description: string | undefined,
  price: number | undefined,
  category: ECategory,
  isGood: boolean | undefined
}

