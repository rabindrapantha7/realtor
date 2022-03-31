import Head from 'next/head'
import { Box } from '@chakra-ui/react'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Real Estate</title>
            </Head>

            <Box maxWidth="1280px" m="auto">
                <header>Navbar</header>
            </Box>

            <Box maxWidth="1280px" m="auto">
                <main>{children}</main>
            </Box>

            <footer>Footer</footer>
        </>
    )
}

export default Layout
