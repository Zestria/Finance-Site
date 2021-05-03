import Layout from '../components/Layout'

import News_banner from '../components/News_banner'
import News_banner_little from '../components/News_banner_little'

import Market_news from '../components/Market_news'


import Carousel from '../components/Carousel'
import Carousel_little from '../components/Carousel_little'
import Carousel_smallest from '../components/Carousel_smallest'

import { cuttingNum } from '../hooks'

import { key } from '../key'

const Home = ({ newsData, sliderData, littletickersData }) => {

    // functions
    const pad = (number, length) => {
        var str = "" + number
        while (str.length < length) {
            str = '0'+str
        }
        return str
    }

    // preparing data
    const watchlist = sliderData.finance.result[0].portfolios
    const stream = newsData.data.main.stream
    let fullfledged = stream.filter((item, i) => !!item.content.thumbnail)
    let bigNews = fullfledged.filter((item, i) => i < 2)
    let news = fullfledged.filter((item, i) => (item.id !== bigNews[0].id) && (item.id !== bigNews[1].id))
    news = [
        news.filter((item, i) => i < 14), news.filter((item, i) => i >= 14 )
    ]
    
    // defining timezone
    let offset = new Date().getTimezoneOffset()
    offset = ((offset<0? '+':'-')+ // Note the reversed sign!
              pad(parseInt(Math.abs(offset/60)), 2)+
              pad(Math.abs(offset%60), 2))
    
    return (
        <Layout>
            <News_banner news={news[0]} bigNews={bigNews} offset={offset} />
            <News_banner_little news={news[0]} bigNews={bigNews} offset={offset} />
            <Market_news news={news[1]} offset={offset} />
            <Carousel watchlist={watchlist} cuttingNum={cuttingNum} />
            <Carousel_little watchlist={watchlist} cuttingNum={cuttingNum} />
            <Carousel_smallest watchlist={watchlist} cuttingNum={cuttingNum} />
        </Layout>
    )
}

export default Home


export const getStaticProps = async () => {
    const resNews = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/list?snippetCount=28", {
        "method": "POST",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        },
        "body": "Pass in the value of uuids field returned right in this endpoint to load the next page, or leave empty to load first page"
    })
    const newsData = await resNews.json()
    const resWatchlist = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const sliderData = await resWatchlist.json() 

    return { props: { newsData, sliderData } }
}