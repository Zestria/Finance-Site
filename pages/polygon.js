import { key } from '../key'
import { useEffect } from 'react'

const Stock = () => {

    useEffect(() => {
        fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details?uuid=74a915eb-c4f8-3dea-80d5-ab1abab54942    `, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": key,
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        }).then(d => d.json()).then(d => console.log(d))
    })

    return (
        <div>
            <h1>Polygon</h1>
        </div>
    )
}

export default Stock