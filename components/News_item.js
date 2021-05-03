import Link from 'next/link'

const News_item = ({ el, offset, classTxt="" }) => {
    return (
        <Link href={`/news/${el.id}`}>
            <div className={'news_item ' + classTxt}>
                {!!el.content.thumbnail ? <img src={el.content.thumbnail.resolutions[0].url} /> : null}
                <div className="text">
                    <span>{new Date(el.content.pubState).toUTCString(offset+"")+''}</span>
                    <h3>{el.content.title}</h3>
                    <h4>{el.content.provider.displayName}</h4>
                </div>
            </div>
        </Link>
    )
}

export default News_item