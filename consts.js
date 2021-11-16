

export const Endpoints = {
    CoinMarkets:(page) => `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`,
    Exchnages: 'exchanges',
    Events: 'events'
}
