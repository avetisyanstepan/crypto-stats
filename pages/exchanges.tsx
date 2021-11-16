import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Endpoints } from '../consts'
import { API } from '../src/API'
import Exchnages from '../src/components/Exchanges/Exchanges'

const ExchnagePage: NextPage = ({data, btcPrice}: InferGetServerSidePropsType<typeof getServerSideProps>) => {


  return (
    <div>
      <Exchnages 
        exchangesData={data}
        btcPrice = {btcPrice}
      />
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await API.get(Endpoints.Exchnages);
  const res2 = await API.get(Endpoints.CoinMarkets());
  return { props: { data: res.data , btcPrice: res2.data} }

}



export default ExchnagePage;
