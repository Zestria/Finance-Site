import Link from 'next/link'

const Aside_watchlists = ({ watchlists, cuttingNum }) => {
    
    return (
        <aside className="aside-watchlist">
            {
                watchlists.map((el, i) => {
                    if(el === null) return null;
                    return (
                        <Link key={i} href={`/watchlist/userId=${el.userId}&pfId=${el.pfId}`}>
                            <div key={i} className="aside-watchlist">
                                <img src={el.backgroundImage/*["ios:size=ipad_portrait"]*/.url} />
                                <div className="text">
                                    <h3>{el.name}</h3>
                                    <h4>{el.symbolCount} symbols</h4>
                                    <h4>{cuttingNum(el.followerCount)} followers</h4>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </aside>
    )
}

export default Aside_watchlists