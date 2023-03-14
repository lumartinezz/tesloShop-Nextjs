import Head from 'next/head';
import { Box } from '@mui/material';

interface Props {
    title: string;
    children?: React.ReactNode

}

export const AuthLayout: React.FC<Props> = ({ children, title  }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
        </Head>

        <main>
            <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">   
                { children }
            </Box>
        </main>
    
    </>
  )
}