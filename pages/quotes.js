const Fuckup = () => {
    const btnClick = () => {
        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c678cf34a3msh6d051c9d5ef1628p14b97bjsna5772981d4d8",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
        })
    }

    return (                    
        <div className="quotes">
            <button onClick={() => btnClick()}>Click on Me, bro!</button>
        </div>
    )
}
export default Fuckup