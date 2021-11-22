import { useRouter } from "next/dist/client/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';


import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
import { Endpoints } from "../../../consts";
import { API } from "../../API";
import Header from "../../layouts/Header";
import { MarketCoin } from "../../types";


interface TableProps {
  marketCoins: MarketCoin[];
}


const Table = ({marketCoins}: TableProps) => {
  const router = useRouter();


  const [search, setSearch] = useState<string>('');

  const [searchResult, setSearchResult]= useState<MarketCoin[]>([]);

  const [total, setTotal] = useState<number>(25)



  const getCoinsPage = async(total: number) => {
    const res = await API.get(Endpoints.CoinMarkets(total))
    setSearchResult(res.data)
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase())
  }

  useEffect(() => {
    getCoinsPage(total)
  },[total])

  useEffect(() => {
    const filtered = marketCoins.filter((item) => item?.id.includes(search));
    setSearchResult(filtered);
  }, [search])
  
    return (
      <Header>
      <div className="flex flex-col max-w-screen-lg m-auto mt-4 ">
      <div className='flex flex-grow justify-end mb-4'>
           <input  type='text' className='w-32 border h-10 bg-gray-100 outline-none border-gray bg-gray rounded-2xl pl-4' placeholder='search' onChange={handleSearch}/>
        </div>
      <table className="table-auto">
      <thead className='border-b border-black'>
        <tr>
          <th
            scope="col"
            className="sm:px-6 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="sm:px-6 py-3 sm:text-left text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Price
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left  text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            24h %
          </th>
          <th
            scope="col"
            className="sm:w-44 lg:flex hidden  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
                Market Cap
          </th>
          <th
            scope="col"
            className="px-10 lg:flex hidden   py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
                Volume(24h)
          </th>
        </tr>
      </thead>
      <tbody>
          {
              searchResult.map((coin: any, count: number) => (
              <tr key={coin?.name + count} className='border-b border-gray'>
                <td className="sm:px-6 px-2 py-4 sm:whitespace-nowrap">
                  <div className="flex items-center ">
                      <div className='sm:w-7 w-5'>
                          {count+1}
                      </div>    
                    <div className="flex-shrink-0 sm:h-10 sm:w-10 h-8 w-8">
                        
                      <img className="rounded-full" src={coin?.image} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{coin?.name}</div>
                      <div className="text-sm text-gray-500">{coin?.email}</div>
                    </div>
                  </div>
                </td>
                <td className="sm:px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm  text-gray-900`}>${coin?.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                </td>
                <td className="sm:px-6  py-4 whitespace-nowrap">
                    <div className={` flex items-center text-sm  ${coin?.price_change_percentage_24h > 0 ? 'text-green' : 'text-red' }` } >
                      {coin?.price_change_percentage_24h > 0 
                        ? <span className='mx-1'><TiArrowSortedUp size={18}/> </span> 
                        : <span className='mx-1'><TiArrowSortedDown size={18}/></span>}
                      {coin?.price_change_percentage_24h.toString().slice(0,4)}%
                    </div>
                </td>
                <td className="px-6 py-6 w-48  whitespace-nowrap text-sm text-black-500">
                      ${coin?.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </td>
                <td className="px-6 py-6 text-left whitespace-nowrap text-sm text-black-500">
                    ${coin?.total_volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </td>
               

              </tr>
            ))}
      </tbody>
    </table>
      
    </div>
            {/* <button 
            className='mr-3 cursor-pointer border-b' 
            onClick={() => setTotal(25)} 
            >
              1      
            </button>
            <button className='mr-3 border-b' onClick={() => setTotal(50)}>2</button>
            <button className='mr-3 border-b' onClick={() => setTotal(100)}>3</button>
            <button className='mr-3 border-b' onClick={() => setTotal(250)}>4</button> */}
         
    </Header>
    )
}

export default Table