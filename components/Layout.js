import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

const Layout = ({ children, style="" }) => {
    
    return (
        <>
            <Head>
                <title>Finance Vyacheslav</title>
                <style>{ ReactHtmlParser(style) }</style>
            </Head>
            <main>{children}</main>
        </>
    )
}

export default Layout