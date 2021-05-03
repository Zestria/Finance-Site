import Market from './Market'
import News_item from './News_item'

const Market_news = ({ news, offset }) => {
    return (
        <div id="market_news">
            <div className="market_line">
                <aside>
                    {news.map((el, i) => i <=1 ? <News_item el={el} offset={offset} /> : null )}
                </aside>
                <Market />
                <aside>
                    {news.map((el, i) => i == 2 || i == 3 ? <News_item el={el} offset={offset} /> : null )}
                </aside>
            </div>
            <div className="lower_market_line">
                <div className="big_version">
                    {news.map((el, i) => i >=4 && i <=6 ? <News_item el={el} offset={offset} /> : null )}
                </div>
                <div className="big_version">
                    {news.map((el, i) => i >=7 && i <=9 ? <News_item el={el} offset={offset} /> : null )}
                </div>
                <div className="little_version">
                    <News_item el={news[0]} offset={offset} />
                    <News_item el={news[1]} offset={offset} />
                    <News_item el={news[2]} offset={offset} />
                    <News_item el={news[3]} offset={offset} classTxt="fourth" />
                    <News_item el={news[4]} offset={offset} classTxt="five" />
                </div>
            </div>
        </div>
    )
}

export default Market_news