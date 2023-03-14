import { Grid } from "@mui/material"
import { IProduct } from "lucia/interfaces"
import { FC } from "react"
import { ProductCard } from "./ProductCard"

interface Props {
    products: IProduct[]
}

export const ProductList: FC<Props> = ({products}) => {
  return (
            <Grid container spacing={4}>
              {
                products.map(product => (
                  <ProductCard
                  key={product.slug}
                  product={product}/>
                ))
              }

            </Grid>
  )
}

