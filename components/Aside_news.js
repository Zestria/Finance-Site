const Aside_news = ({ news, offset }) => (
    <aside className="aside_news">
        
        {
            news.map((el, i) => (
                <div key={i} className="news_item aside_news_item">
                    {el.content.thumbnail.resolutions[0].url ? <img src={el.content.thumbnail.resolutions[0].url} /> : null}
                    <div className="text">
                        <span>{new Date(el.content.pubDate).toUTCString(offset+"")+''}</span>
                        <h3>{el.content.title}</h3>
                        <h4>{el.content.provider.displayName}</h4>
                    </div>
                </div>
            ))
        }
    </aside>
)

export default Aside_news