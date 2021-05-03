const Trending_tickers = ({ trending_tickers }) =>    
    <div className="trending_tickers">
        {trending_tickers.map((el, i) => {
            let trigger = 'growth'
            let changing = el.regularMarketChange + ''
            if(changing.search('-')!==-1) {
                trigger = 'fall';
            }
            return (
                <div key={i} className='ticker'>
                    <div>    
                        <p>{el.symbol}</p>
                        <p className="price">{`${el.regularMarketPrice}`}</p>
                        <p className={trigger}>{`${el.regularMarketChange.toFixed(2)}`}</p>
                        <p className={trigger + ' regularMarketChangePercent'}>{`${el.regularMarketChangePercent.toFixed(2)}%`}</p>
                    </div>
                    <span>{el.shortName}</span>
                </div>
            ) 
        })}
    </div>

export default Trending_tickers