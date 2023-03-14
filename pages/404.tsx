import { Box, Typography } from "@mui/material"
import { ShopLayout } from '../components/layouts'

export const Custom404 = () => {
  return (
            <ShopLayout title='Page not found' pageDescription='No hay nada que mostrar aqui'>
                <Box 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                height='calc(100vh-200px)'
                sx={{ display: {xs: 'colum', sm: 'row'}}}>

                    <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>400 |</Typography>
                    <Typography marginLeft={2}>No encontramos ninguna pagina aqui</Typography>

                </Box>
            </ShopLayout>
  )
}

export default Custom404