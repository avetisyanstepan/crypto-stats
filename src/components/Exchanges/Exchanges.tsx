import Link from 'next/link'
import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
import Header from '../../layouts/Header';

interface ExchangeProps {
    exchangesData: any[];
    btcPrice:any[]
    }
      
const Exchanges = ({exchangesData, btcPrice} :ExchangeProps ) => {

const bitcoinPrice = btcPrice.map((item) => item.current_price)[0]

    return (

<Header>
<div className="flex flex-col max-w-screen-2xl m-auto mt-4">
        <div className='flex flex-grow justify-end mb-4'>
           {/* <input  type='text' className='w-32 border h-10 bg-gray-100 outline-none rounded-2xl pl-4' placeholder='search' onChange={handleSearch}/> */}
        </div>
    <table className="table-auto">
      <thead className='border-b border-black'>
        <tr>
          <th
            scope="col"
            className="sm:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="md:block hidden sm:px-6 py-3 sm:text-left text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Trust Score
          </th>
          <th
            scope="col"
            className="sm:px-6 px-2 py-3 text-left  text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
              Volume(24h)
          </th>
          <div className='lg:flex hidden '>

          <th
            scope="col"
            className="sm:w-44 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >Country 
          </th>
          </div> 

        </tr>
      </thead>
      <tbody>
          {
                  exchangesData.map((exchange: any, count: number) => (
                    <tr key={exchange?.name + count}>
                    <td className="sm:px-6 px-2 py-4 ">
                    <Link href={exchange?.url}  >
                        <a target="_blank">
                      <div className="flex items-center cursor-pointer">
                          <div className='sm:w-7 w-2 mr-5'>
                              {count+1}
                          </div>    
                        <div className="flex-shrink-0 h-10 w-10">
                            
                          <img className="h-10 w-10 rounded-full" src={exchange?.image} alt="" />
                        </div>
                        <div className="sm:ml-4 ml-2">
                          <div className="text-sm font-medium text-gray-900">{exchange?.name}</div>
                        </div>
                      </div>
                      </a>
                    </Link>
                    </td>
                        <div 
                            className={`w-12 h-7 ml-9 mt-6  md:flex hidden justify-center text-white rounded-xl 
                                ${exchange?.trust_score > 8 ? 'bg-green' : 'bg-red' }`
                            }
                        >
                          <td className="sm:px-6  whitespace-nowrap">
                              {exchange?.trust_score}
                          </td>
                        </div>
                    <td className="sm:px-6 pr-2 py-4 whitespace-nowrap">
                         <div className={`text-sm  text-gray-900`}>${Math.floor(exchange?.trade_volume_24h_btc * bitcoinPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                    </td>
                    <td className="lg:block hidden px-6 py-4 w-auto whitespace-nowrap text-sm text-black-500">{exchange?.country}</td>
                  </tr>
            ))}
      </tbody>
    </table>
          </div>
    </Header>


    )
}

export default Exchanges