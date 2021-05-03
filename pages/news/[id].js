import Layout from '../../components/Layout'
import Aside_news from '../../components/Aside_news'
import News_details from '../../components/News_details'
import Trending_tickers from '../../components/Trending_tickers'

import { key } from '../../key'

const News_details_page = ({ articleData, littletickersData, newsData }) => {
    console.log(articleData)
    const deletingSthUseless = str => { 
        let output = str
        if(str.match('data-src')) {
            output = output.replace('data-src', 'src') // replace attributes: data-src to src in <img /> tags
            output = deletingSthUseless(output)
        }
        if(str.match('src=""')) {
            output = output.replace('src=""', '') // removing empty src
            output = deletingSthUseless(output)
        }
        if(str.match('caas-img-loader')) {
            output = output.replace('caas-img-loader', '') // remove caas-img-loader
            output = deletingSthUseless(output)
        }
        if(str.match("caas-img")) {
            output = output.replace('caas-img', '') // remove caas-img
            output = deletingSthUseless(output)
        }
        return output
    }

    let content = articleData.data.contents[0].content

    let markup = content.body.markup; // markup of original article
    let styleTag = markup.slice(markup.indexOf('<style>')+7, markup.indexOf('</style>')) // Crop <style>/* css code </style> from markup and add this to Layout component
    
    let markupArticle = markup.slice(markup.indexOf('<article'), markup.indexOf('</article>')) // For divTag variable
    let markupTxt = deletingSthUseless(markupArticle.slice(markupArticle.indexOf('<div class="caas-body">')+23, markupArticle.lastIndexOf('</div>')))
    
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
    
    const article = {
        markup: markupTxt,
        title: content.title,
        id: content.id,
        img: content.body.data.partnerData.cover.image.originalUrl,
        brand: content.provider.displayName,
        authors: content.authors // array
    }

    const stream = newsData.data.main.stream
    const news = stream.filter((item, i) => !!item.content.thumbnail && item.id !== article.id)
    const trending_tickers = littletickersData.finance.result[0].quotes

    console.log(article)
    console.log(news)
    return (
        <Layout style={styleTag} >
            <h1 className="header_page">{article.title}</h1>
            <div className="page_grid_container">
                <Aside_news news={news} offset={offset} />
                <News_details article={article} offset={offset} />
                <Trending_tickers trending_tickers={trending_tickers} />
            </div>
        </Layout>
    )
}

export default News_details_page

export const getServerSideProps = async ({ params }) => {
    const resArticle = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details?uuid=${params.id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const articleData = await resArticle.json()
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
    
    return { props: { articleData, littletickersData, newsData } }

}

// router.back() <---- to go backя
// router.reload() <---- to reload
// let test01 = divTag.slice(divTag.indexOf('<div class="caas-da">'), divTag.length-1) // For removing useless div.cass-da container
// let test02 = test01.slice(0, test01.indexOf('<p>')) // For removing useless div.cass-da container