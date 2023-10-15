import {ECategory, IProduct} from "../interfaces/IProduct";
import {ICategory} from "../components/product-create-form/product-create-form.component";
import * as uuid from "uuid"
;
export const products: IProduct[] = [
  {
    id: uuid.v4(),
    name: "Danil Dinko",
    description: "Frontend developer of ITS tech in BMSTU",
    price: 100,
    isGood: true,
    category: ECategory.ZELENGORAD
  },
  {
    id: uuid.v4(),
    name: "Anton Hvatov",
    description: "Businessman, founder NixieTech C",
    price: 100,
    isGood: true,
    category: ECategory.HOVRINO
  },
  {
    id: uuid.v4(),
    name: "Anna Mihonina",
    description: "Surgut girl, celebrity",
    price: 100,
    isGood: true,
    category: ECategory.SOLNZEVO
  },
  {
    id: uuid.v4(),
    name: "Vlada Suvorkina",
    description: "Studsovet lager",
    price: 100,
    isGood: true,
    category: ECategory.VLADA_GDE
  }
]

export const categories: ICategory[] = [
  {id: ECategory.ALL, name: ECategory.ALL.toString()},
  {id: ECategory.ZELENGORAD, name: ECategory.ZELENGORAD.toString() },
  {id: ECategory.HOVRINO, name: ECategory.HOVRINO.toString()},
  {id: ECategory.SOLNZEVO, name: ECategory.SOLNZEVO.toString()},
  {id: ECategory.VLADA_GDE, name: ECategory.VLADA_GDE.toString()},
  {id: ECategory.OTHER, name: ECategory.OTHER.toString()}
]
