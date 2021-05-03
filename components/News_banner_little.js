import News_item from './News_item'
import News_item_big from './News_item_big'

const News_banner_little = ({ news, bigNews, offset }) => (
    <div id="news_grid_little">
        <aside className="left_block_little">
            <div className="row_news_little">
                <News_item el={news[0]} offset={offset} />
                <News_item el={news[1]} offset={offset} />
            </div>
            <News_item_big el={bigNews[0]} offset={offset} />
            <div className="row_news_little">
                <News_item el={news[2]} offset={offset} />
                <News_item el={news[3]} offset={offset} />
            </div>
        </aside>
        <div className="center_block_little">
            {news.map((el, i) => ( i>=4 && i<=8 ) ? (
                <News_item el={el} offset={offset} />
            ) : null )}
        </div>
        <aside className="right_block_little">
            <div className="row_news_little">
                <News_item el={news[9]} offset={offset} />
                <News_item el={news[10]} offset={offset} />
            </div>
            <News_item_big el={bigNews[1]} offset={offset} />
            <div className="row_news_little">
                <News_item el={news[11]} offset={offset} />
                <News_item el={news[12]} offset={offset} />
            </div>
        </aside>
    </div>
)

export default News_banner_little