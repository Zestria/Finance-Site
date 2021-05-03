import ReactHtmlParser from 'react-html-parser'

const News_details = ({ article, offset }) => (
    <div className="news_details">
        <div className="news_details_container">
            <img src={article.img} />
            <div className="news_details_text">
                <h3>{article.brand}</h3>
                <h4>{new Date(article.time).toUTCString(offset+"")+''}</h4>
            </div>
            <article>{ ReactHtmlParser(article.markup) }</article>
        </div>
    </div>
)

export default News_details