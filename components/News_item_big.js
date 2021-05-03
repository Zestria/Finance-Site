import Link from 'next/link'

const News_item_big = ({ el, offset }) => (
    <Link href={`/news/${el.id}`}>
        <div className="news_item news_item_big">
            <img src={el.content.thumbnail.resolutions[0].url} />
            <div className="text text-big">
                <h4>{el.content.provider.displayName}</h4>
                <section>
                    <h1>{el.content.title}</h1>
                    <span>{new Date(el.content.pubState).toUTCString(offset+"")+''}</span>
                </section>
            </div>
        </div>
    </Link>
)

export default News_item_big