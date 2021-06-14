import Layout from '../../components/Layout'
import ReactHtmlParser from 'react-html-parser'
import { defineSide, cuttingNum } from '../../hooks'

import { key } from '../../key'

const Id = (/*{ detailsData }*/) => {

    const detailsData = {
        finance: { 
            result: [{
                portfolios: [{
                    pfName: 'Most Sold By Activist Hedge Fond',
                    portfolioMeta: {
                        shareUrl: 'https://finance.yahoo.com',
                        portfolioDescription: "<p>Follow this list to discover and track stocks held by Berkshire Hathaway, the holding company of Warren Buffett.</p><p><em>Background</em><p>Berkshire Hathaway, a multinational conglomerate based in the US, is led by Warren Buffett, who's arguably the nation's most revered investor. Dubbed the Oracle of Omaha Buffett's known for playing the long game in the stock market. Berkshire wholly owns a handful of companies and also owns stock in the companies listed here.</p><em>How did we choose these stocks?</em><p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p><p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p></p>"
                    }
                }],
                quotes: {
                    'ABBV': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TSLA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'AdBV': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'sasdf': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'SGDASD': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'ADF': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'ZGGA': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TWTR': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'HDG': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'ASDHA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'ABFBV': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TSDLA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'ADSA': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'BSDF': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'SDWR': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TGSLA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'ASDF': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'GXADS': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'FDASDG': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TSAEGLA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'AEDGASDGB': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TSGDALA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'ABDSGABV': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TEREWSLA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'TWQWER': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TSTEWQLA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'ABEQTWBV': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'QTEW': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'ABQTEBV': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'QET': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'ABAGDSBV': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'HSASD': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },

                    'ADGASD': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TSLASDGASA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    },
                    'ASDGASDG': {
                        symbol: 'ABBV',
                        regularMarketPrice: 407.1204122323,
                        regularMarketChangePercent: 2.234,
                        regularMarketVolume: 30304822,
                        marketCap: 295174956
                    },
                    'TSLASDGASA': {
                        symbol: 'TSLA',
                        regularMarketPrice: 562.93215123,
                        regularMarketChangePercent: -15.234,
                        regularMarketVolume: 92631893,
                        marketCap: 982742938562
                    }
            
                }
            }]
        }
    }

    const watchlist_details = detailsData.finance.result[0]

    const portfolio = watchlist_details.portfolios[0]
    const symbols = watchlist_details.quotes

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
            <div className="page_container page_watchlist">
                <div className="aside_column">
                    <h1 className="aside_header">{portfolio.pfName}</h1>
                </div>
                <div className="vertical_line left"></div>
                <div className="main_column">
                    <div className="symbols-grid symbols_headers">
                        <p></p>
                        <p>price</p>
                        <p>change</p>
                        <p className="regularMarketVolume">volume</p>
                        <p>market cap</p>
                    </div>
                    <div className="watchlist_symbols">
                        {Object.keys(symbols).map((el, i) => (    
                            <div key={i} className="symbols-grid">
                                <h3>{symbols[el].symbol}</h3>
                                <h3>{symbols[el].regularMarketPrice.toFixed(2)}</h3>
                                { defineSide(symbols[el].regularMarketChangePercent.toFixed(2), '%', 'changing')}
                                <p className="regularMarketVolume">{cuttingNum(symbols[el].regularMarketVolume)}</p>
                                <p>{cuttingNum(symbols[el].marketCap)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="vertical_line right"></div>
                <div className="aside_column aside_column_watchlist_article">
                    <article>
                        { ReactHtmlParser(portfolio.portfolioMeta.portfolioDescription) }
                    </article>
                </div>
            </div>
        </Layout>
    )
}

export default Id
/*
export const getServerSideProps = async ({ params }) => {

    const resDetails = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-watchlist-detail?${params.id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const detailsData = await resDetails.json()

}
*/