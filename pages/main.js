import Layout from '../components/Layout'
import News from '../components/News'
import Carousel from '../components/Carousel'
import Market from '../components/Market'
import Littletickers from '../components/Littletickers'

const Main = () => {
    // fake data
    /*const news = [
        {
            title: "Twitter's Dorsey auctions first ever tweet as digital memorabilia",
            timestamp: 1615341030212,
            brand: "Reuters",
            id: 'twitter',
            image: "https://source.unsplash.com/random"
        },
        {
            title: "Spike in Canada exports to U.S. leads to surprise January trade surplus",
            timestamp: 1615341030212,
            brand: "Finance Yahoo",
            id: 'canada',
            image: "https://source.unsplash.com/random"
        },
        {
            title: "Myanmar forces fire tear gas, stun grenades on protest as U.N. envoy calls ",
            timestamp: 1615341030212,
            brand: "Investing.com",
            id: 'myanmar',
            image: "https://source.unsplash.com/random"
        },
        {
            title: "Buy these 3 battery stocks to play the electric-vehicle party, but stay away from this company, says UBS",
            timestamp: 1615341030212,
            brand: "Reuters",
            id: 'battery',
            image: "https://source.unsplash.com/random"
        },
        {
            title: "Investors may have a ‘buy’ signal, as these big tech stocks have dropped up to 32% in only three weeks",
            timestamp: 1615341030212,
            brand: "Finance Yahoo",
            id: 'stocks',
            image: "https://source.unsplash.com/random"
        },
        {
            title: "Bitcoin is in the air. Soon it will reach Moon. It's fantastic. Elon Musk already buy 1056.3 btc for $3.5 billions",
            timestamp: 1615341030212,
            brand: "Finance Yahoo",
            id: 'bitcoin',
            image: "https://source.unsplash.com/random"
        }
    ]
    const watchlist = [
        {
            pfId: 'UFC',
            userId: 'MMA',
            backgroundImage: {
                url: 'https://source.unsplash.com/random'
            },
            name: 'Johnny',
            followerCount: 12790,
            symbolCount: 30,
            brand: {
                url: 'https://tradingview.com',
                displayName: 'Trading View'
            },
            shortDescription: 'In this watchlist I\'ve written how market can be changed in soon future. '
        },
        {
            pfId: 'UFC',
            userId: 'MMA',
            backgroundImage: {
                url: 'https://source.unsplash.com/random'
            },
            name: 'Johnny',
            followerCount: 12790,
            symbolCount: 30,
            brand: {
                url: 'https://tradingview.com',
                displayName: 'Trading View'
            },
            shortDescription: 'In this watchlist I\'ve written how market can be changed in soon future. '
        },
        {
            pfId: 'UFC',
            userId: 'MMA',
            backgroundImage: {
                url: 'https://source.unsplash.com/random'
            },
            name: 'Johnny',
            followerCount: 12790,
            symbolCount: 30,
            brand: {
                url: 'https://tradingview.com',
                displayName: 'Trading View'
            },
            shortDescription: 'In this watchlist I\'ve written how market can be changed in soon future. '
        }
    ]
    const littletickers = [
        {
            symbol: 'BTC-USD',
            shortName: 'Bitcoin USD',
            regularMarketPrice: 47540.19,
            regularMarketChange: 129.15,
            regularMarketChangePercent: 0.26
        },
        {
            symbol: 'BTC-USD',
            shortName: 'Bitcoin USD',
            regularMarketPrice: 47540.19,
            regularMarketChange: 129.15,
            regularMarketChangePercent: 0.26
        },
        {
            symbol: 'BTC-USD',
            shortName: 'Bitcoin USD',
            regularMarketPrice: 47540.19,
            regularMarketChange: 129.15,
            regularMarketChangePercent: 0.26
        },
        {
            symbol: 'BTC-USD',
            shortName: 'Bitcoin USD',
            regularMarketPrice: 47540.19,
            regularMarketChange: 129.15,
            regularMarketChangePercent: 0.26
        }
    ]*/
    // functions
    const cuttingNum = num => {
        let s = num + ''
        s = (s.split('').reverse().join(''))
        let arr = []
        for(let i = 0; i < s.length; i+=3) {
        arr.push(s.slice(i, i+3))
        }

        s = (arr.join().split('').reverse().join(''))
        if([...s.matchAll(',')].length===1) return (s.slice(0, s.length-1) + 'k');

        if([...s.matchAll(',')].length===2) return (s.slice(0, s.length-5) + 'm');
        
        return s
    }
    const pad = (number, length) => {
        var str = "" + number
        while (str.length < length) {
            str = '0'+str
        }
        return str
    }
    
    var offset = new Date().getTimezoneOffset()
    offset = ((offset<0? '+':'-')+ // Note the reversed sign!
              pad(parseInt(Math.abs(offset/60)), 2)+
              pad(Math.abs(offset%60), 2))
    
    let arr = [1,2,3]
    return (
        <Layout>
                <Littletickers littletickers={littletickers} />
                <News arr={arr} news={news} offset={offset} />
                <hr className="horizontal" />
                <Carousel watchlist={watchlist} cuttingNum={cuttingNum} />
                <hr className="horizontal" />
                <Market />
        </Layout>
    )
}

export default Main