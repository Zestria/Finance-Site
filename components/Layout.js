import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

const Layout = ({ children, style="" }) => {
    
    return (
        <div id="container">
            <Head>
                <title>Finance Vyacheslav</title>
                <style>{ ReactHtmlParser(style) }</style>
            </Head>
            <main>{children}</main>
        </div>
    )
}

export default Layout