import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import { Endpoints } from '../consts'
import { API } from '../src/API'
import Table from '../src/components/Table/Table'

const Home: NextPage = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // console.log('sss',res)

  return (
    <div>
      <Head>
        <title>Crypto Stats</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Table marketCoins={data} />
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await API.get(Endpoints.CoinMarkets(25));
  return { props: { data: res.data } }
}


export default Home;
