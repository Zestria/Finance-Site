import { Component } from 'react'
import Glide from '@glidejs/glide'
import Link from 'next/link'

export default class Carousel_little extends Component {

    componentDidMount() {
        new Glide('.glide_little', {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            focusAt: 'center',
            gap: 20,
            hoverpause: true,
            peek: {
                before: 150, after: 150
            }
        }).mount()
    }

    render() {
        return (
            <div id="carousel_little">
                <div className='glide_little'>
                    <div className="glide__track" data-glide-el='track'>
                        <ul className='glide__slides'>
                            {this.props.watchlist.map((el, i) => i < 10 ? (
                                <Link key={i} href={`/watchlist/userId=${el.userId}&pfId=${el.pfId}`}>
                                    <li className='glide__slide'>
                                        <img src={el.backgroundImage["ios:size=ipad_portrait"].url} />
                                        <figure>
                                            <div className="slide_text">
                                                <h1>{el.name}</h1>
                                                <section>
                                                    <p>{this.props.cuttingNum(el.followerCount)} followers</p>
                                                    <p>{el.symbolCount} symbols</p>
                                                    <a href={el.brand.url}>Watchlist by {el.brand.displayName}</a>
                                                </section>
                                                <p>{el.shortDescription}</p>
                                            </div>
                                        </figure>
                                    </li>
                                </Link>
                            ) : null)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}