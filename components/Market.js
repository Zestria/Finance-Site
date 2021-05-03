import { useState, useEffect } from 'react'
import Canvas from '../components/Canvas'
import { key } from '../key'

const Market = () => {
    // VARIABLES
    const tickers = [
        {
            'Dow Jones': '^DJI',
            'Nasdaq': 'NDAQ',
            'S&P 500': 'SNP',
            'Russell 2000': '^RUT',
            'FTSE 100': '^FTSE'
        },
        {
            'EUR/USD': 'EURUSD=X',
            'USD/JPY': 'JPY=X',
            'GBP/USD': 'GBPUSD=X',
            'USD/CAD': 'CAD=X',
            'AUD/USD': 'AUDUSD=X'
        },
        {
            'Apple': 'AAPL',
            'Tesla': 'TSLA',
            'Amazon': 'AMZN',
            'Netflix': 'NFLX',
            'Facebook': 'FB'
        },
        {
            'Bitcoin': 'BTC-USD',
            'Etherium': 'ETH-USD',
            'Litecoin': 'LTC-USD'
        }
    ]
    const range = [
        { '1d': '15m' }, 
        { '3mo': '1d' }, 
        { '6mo': '1wk' }, 
        { '1y': '1wk' }, 
        { '5y': '1mo' }
    ]
    const graphData = {
        '^DJI': {
            close: Array(100).fill().map((el, i) => Math.round(Math.random() * i)),
            timestamp: Array(100).fill().map((el, i) => Math.round(Math.random() * i))
        },
        'NDAQ': {
            close: [123, 21, 235, 20, 37, 16, 17, 79, 35, 687, 23],
            timestamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        },
        'SNP': {
            close: [46, 28, 67, 45, 738, 49, 90, 678, 45, 48, 78],
            timestamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        },
        '^RUT': {
            close: [41, 41, 23, 32, 54, 67, 87, 89, 90, 87, 67],
            timestamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        },
        '^FTSE': {
            close: [19, 28, 37, 47, 75, 65, 46, 48, 59, 36, 47],
            timestamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
    }
    const founded = {
        count: 15,
        explains: [],
        lists: [],
        nav: [],
        quotes: [
            {
                exchange: "NMS",
                index: "quotes",
                isYahooFinance: true,
                longname: "Tesla, Inc.",
                quoteType: "EQUITY",
                score: 1649384,
                shortname: "Tesla, Inc.",
                symbol: "TSLA",
                typeDisp: "Equity"
            },
            {
                exchange: "GER",
                index: "quotes",
                isYahooFinance: true,
                longname: "Tesla, Inc.",
                quoteType: "EQUITY",
                score: 21414,
                shortname: "TESLA INC. DL -,001",
                symbol: "TL0.DE",
                typeDisp: "Equity"
            },
            {
                exchange: "LSE",
                index: "quotes",
                isYahooFinance: true,
                longname: "GraniteShares 3x Short Tesla Daily ETP",
                quoteType: "EQUITY",
                score: 20533,
                shortname: "GRANITESHARES FINANCIAL PLC GRA",
                symbol: "3STS.L",
                typeDisp: "Equity"
            },
            {
                exchange: "FRA",
                index: "quotes",
                isYahooFinance: true,
                longname: "Tesla, Inc.",
                quoteType: "EQUITY",
                score: 20531,
                shortname: "TESLA INC. DL -,001",
                symbol: "TL0.F",
                typeDisp: "Equity"                
            },
            {
                exchange: "MEX",
                index: "quotes",
                isYahooFinance: true,
                longname: "Tesla, Inc.",
                quoteType: "EQUITY",
                score: 20435,
                shortname: "TESLA INC",
                symbol: "TSLA.MX",
                typeDisp: "Equity"
            },
            {
                exchange: "LSE",
                index: "quotes",
                isYahooFinance: true,
                longname: "GraniteShares 3x Long Tesla Daily ETP",
                quoteType: "EQUITY",
                score: 20296,
                shortname: "GRANITESHARES FINANCIAL PLC GRA",
                symbol: "3LTS.L",
                typeDisp: "Equity"
            },
            {
                exchange: "PNK",
                index: "quotes",
                isYahooFinance: true,
                longname: "Tesla Exploration Ltd.",
                quoteType: "EQUITY",
                score: 20212,
                shortname: "TESLA EXPLORATION LTD",
                symbol: "TXLZF",
                typeDisp: "Equity"
            }
        ]
    }    

// STATE
    // indexes
    const [indBr, setIndBr] = useState(0)
    const [indTic, setIndTic] = useState(0)
    const [indRange, setIndRange] = useState(0)
    // classes
    const [classesBr, setClassesBr] = useState(['active', 'not-active', 'not-active', 'not-active'])
    const [classesTic, setClassesTic] = useState(['active', 'not-active', 'not-active', 'not-active', 'not-active'])
    const [classesRng, setClassesRng] = useState(['active', 'not-active', 'not-active', 'not-active', 'not-active'])
    // search
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')
    // search data
    const [searchData, setSearchData] = useState([])
    // graph data
    const [spark, setSpark] = useState({ close: [], timestamp: [] })
    
    const [foundedTicker, setFoundedTicker] = useState('')

// FUNCTIONS
    const changeBranch = num => {
        if(num === indBr) return;
        setIndBr(num)
        setClassesBr(classesBr.map((el, i) => i===num ? 'active' : 'not-active'))
        changeTicker(0)
    }
    const changeTicker = num => {
        if(num===indTic) return;
        setIndTic(num)
        setClassesTic(classesTic.map((el, i) => i===num ? 'active' : 'not-active'))
        setFoundedTicker('')
    }
    const changeRange = num => {
        if(num===indRange) return;
        setIndRange(num)
        setClassesRng(classesRng.map((el, i) => i===num ? 'active' : 'not-active'))
    }

// USE EFFECT
    // get graph data
    useEffect(() => {
        let symbol = foundedTicker !== '' ? foundedTicker : Object.values(tickers[indBr])[indTic], 
            interval = Object.values(range[indRange])[0], 
            rangeStr = Object.keys(range[indRange])[0]

        fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-spark?symbols=${symbol}&interval=${interval}&range=${rangeStr}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": key,
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        }).then(res => res.json()).then(data => {
            setSpark({ close: data[symbol].close, timestamp: data[symbol].timestamp })
            console.log(data)
        } )

        //setSpark({ close: graphData[symbol].close, timestamp: graphData[symbol].timestamp })
    }, [indBr, indTic, indRange, foundedTicker])
    // search information about ticker
    useEffect(() => {
        if(search==='') {
            return setSearchData([])
        }
        fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${search}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": key,
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        }).then(res => res.json()).then(data => setSearchData(data.quotes))
        //setSearchData(founded.quotes)
    }, [search])
    useEffect(() => console.log('updating'))

return (
    <div id="market">
        <section className="search_branch">
            <div className="search_ticker">
                <input onChange={e => setText(e.target.value)} value={text} type="text" placeholder="Search by ticker..." />
                {searchData.length === 0 ? 
                    <button onClick={() => setSearch(text)}>
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.853 14.168C14.17 15.4659 11.942 16.2556 9.5 16.2556C4.257 16.2556 0 12.6135 0 8.12778C0 3.6421 4.257 0 9.5 0C14.743 0 19 3.6421 19 8.12778C19 10.217 18.077 12.1232 16.56 13.5631L21 17.5389L20 17.9667L15.853 14.168ZM9.5 0.855556C14.191 0.855556 18 4.11437 18 8.12778C18 12.1412 14.191 15.4 9.5 15.4C4.809 15.4 1 12.1412 1 8.12778C1 4.11437 4.809 0.855556 9.5 0.855556Z" fill="#494949"/>
                        </svg>
                    </button> : 
                    <button onClick={() => {
                        setSearch('')
                        setText('')
                        setFoundedTicker('')
                    }}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.525 18.525C19.0635 17.9865 19.0635 17.1135 18.525 16.575L13.1142 11.1642C12.3332 10.3832 12.3332 9.11684 13.1142 8.33579L18.525 2.92501C19.0635 2.38653 19.0635 1.51348 18.525 0.975005V0.975005C17.9865 0.436525 17.1135 0.436525 16.575 0.975006L11.1642 6.38579C10.3832 7.16684 9.11683 7.16684 8.33578 6.38579L2.925 0.975011C2.38652 0.436534 1.51348 0.436533 0.975001 0.975011V0.975011C0.436523 1.51349 0.436522 2.38653 0.975 2.92501L6.39591 8.34592C7.17299 9.123 7.17751 10.3815 6.40603 11.1641L1.01417 16.634C0.503867 17.1517 0.497598 17.9813 1.00002 18.5067V18.5067C1.52122 19.0517 2.38867 19.0613 2.92189 18.5281L8.33579 13.1142C9.11683 12.3332 10.3832 12.3332 11.1642 13.1142L16.575 18.525C17.1135 19.0635 17.9865 19.0635 18.525 18.525V18.525Z" fill="#494949"/>
                        </svg>
                    </button>
                }
                <ul className={`founded_information ${searchData.length === 0 ? 'd-none' : ''}`}>
                    {searchData.length !== 0 ? searchData.map((el, i) => (
                        <li onClick={() => setFoundedTicker(el.symbol)} className="founded_item" key={i}>
                            <h3>{el.symbol}</h3>
                            <p>{el.shortname}</p>
                            {i < searchData.length-1 ? <hr className="founded_separator" /> : null}
                        </li>
                    )) : null}
                </ul>
            </div>
            <div className="tickers_branches">
                <button className={classesBr[0]} onClick={() => changeBranch(0)}>Indices</button>
                <hr className="tb_separator" />
                <button className={classesBr[1]} onClick={() => changeBranch(1)}>Forex</button>
                <hr className="tb_separator" />
                <button className={classesBr[2]} onClick={() => changeBranch(2)}>Stock</button>
                <hr className="tb_separator" />
                <button className={classesBr[3]} onClick={() => changeBranch(3)}>Crypto</button>
            </div>
        </section>
        <section className="chart_branch">
            <div className="chart_range">
                <button className={classesRng[0]} onClick={() => changeRange(0)}>1D</button>
                <button className={classesRng[1]} onClick={() => changeRange(1)}>3M</button>
                <button className={classesRng[2]} onClick={() => changeRange(2)}>6M</button>
                <button className={classesRng[3]} onClick={() => changeRange(3)}>1Y</button>
                <button className={classesRng[4]} onClick={() => changeRange(4)}>5Y</button>
            </div>
            <div className="chart">
                { spark && <Canvas labels={spark.timestamp} data={spark.close} /> }
            </div>
        </section>
        <section className="tickers">
            {Object.keys(tickers[indBr]).map((el, i) => (
                <>
                    {i!==0 ? <hr className="tb_separator" /> : null}
                    <button className={classesTic[i]} onClick={() => changeTicker(i)} key={i}>{el}</button>
                </>
            ))}
        </section>
    </div>
)
}

export default Market