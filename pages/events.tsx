import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Endpoints } from '../consts'
import { API } from '../src/API'
import { Events } from '../src/components/Events/Events'

const ExchnagePage: NextPage = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  

  return (
    <div>
      <Events 
         eventsData={data}
      />
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await API.get(Endpoints.Events);
  return { props: { data: res.data } }
}



export default ExchnagePage;
