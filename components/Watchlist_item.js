import ReactHtmlParser from 'react-html-parser'
import { defineSide, cuttingNum } from '../hooks'

const Watchlist_item = ({ watchlist_details }) => {

    const portfolio = watchlist_details.portfolios[0]
    const symbols = watchlist_details.quotes
    
    return (
        <div className="watchlist_item">
            <img src="https://source.unsplash.com/random" />
            <span>original by <a href={`${portfolio.portfolioMeta.shareUrl}`}>Finance Yahoo</a></span>
            <article>
                { ReactHtmlParser(portfolio.portfolioMeta.portfolioDescription) }
            </article>
            <div className="watchlist-symbols">
                <div className="symbols-grid symbols_headers">
                    <p></p>
                    <p>price</p>
                    <p>change</p>
                    <p className="regularMarketVolume">volume</p>
                    <p>market cap</p>
                </div>
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
    )
}

export default Watchlist_item