import Layout from '../../components/Layout'
import Trending_tickers from '../../components/Trending_tickers'
import Watchlist_item from '../../components/Watchlist_item'
import Aside_news from '../../components/Aside_news'

import { key } from '../key'

const Id = ({ detailsData, littletickersData, newsData }) => {
    
    const stream = newsData.data.main.stream
    const news = stream.filter((item, i) => !!item.content.thumbnail)
    const trending_tickers = littletickersData.finance.result[0].quotes

    const watchlist_details = detailsData.finance.result[0]

    const pad = (number, length) => {
        let str = "" + number
        while (str.length < length) {
            str = '0'+str
        }
        return str
    }
    
    let offset = new Date().getTimezoneOffset()
    offset = ((offset<0? '+':'-')+ // Note the reversed sign!
              pad(parseInt(Math.abs(offset/60)), 2)+
              pad(Math.abs(offset%60), 2))

    return (
        <Layout>
            <h1 className="header_page">{detailsData.finance.result[0].portfolios[0].pfName}</h1>
            <div className="page_grid_container">
                <Aside_news news={news} offset={offset} />
                <Watchlist_item watchlist_details={watchlist_details} />
                <Trending_tickers trending_tickers={trending_tickers} />
            </div>
        </Layout>
    )
}

export default Id

export const getServerSideProps = async ({ params }) => {

    const resDetails = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-watchlist-detail?${params.id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const detailsData = await resDetails.json()

    const resLittletickers = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const littletickersData = await resLittletickers.json()
    const resNews = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/list?snippetCount=28", {
        "method": "POST",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        },
        "body": "Pass in the value of uuids field returned right in this endpoint to load the next page, or leave empty to load first page"
    })
    const newsData = await resNews.json()


    return { props: { detailsData, littletickersData, newsData } }
}
