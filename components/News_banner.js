import News_item from './News_item'
import News_item_big from './News_item_big'

const News_banner = ({ news, bigNews, offset }) => {
    return (
        <div id="news_grid"> 
            <div className="top_left">
                {news.map((el, i) => ( i <= 2) ? (
                    <News_item el={el} offset={offset} />
                ) : null )}
            </div>
            <div className="center"></div>
            <div className="top_right">
                {news.map((el, i) => ( i>=3 && i<=5 ) ? (
                    <News_item el={el} offset={offset} />
                ) : null )}
            </div>
            <div className="medium_left big">
                <News_item_big el={bigNews[0]} offset={offset} />
            </div>
            <div className="medium_center center">
                {news.map((el, i) => ( i>=6 && i<=7 ) ? (
                    <News_item el={el} offset={offset} />
                ) : null )}
            </div>
            <div className="medium_right big">
                <News_item_big el={bigNews[1]} offset={offset} />
            </div>
            <div className="bottom_left">
                {news.map((el, i) => ( i>=8 && i<=10 ) ? (
                    <News_item el={el} offset={offset} />
                ) : null )}
            </div>
            <div className="center"></div>
            <div className="bottom_right">
                {news.map((el, i) => ( i>=11 && i<=13 ) ? (
                    <News_item el={el} offset={offset} />
                ) : null )}
            </div>
        </div>
    )
}

export default News_banner