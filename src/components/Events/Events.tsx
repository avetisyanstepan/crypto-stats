import Header from "../../layouts/Header"
import { EventsData } from "../../types/EventsData"




interface EventsProps {
    eventsData: EventsData;
  }
  

export const Events = ({eventsData}:EventsProps) => {


    return (
        <Header>
            <div className='md:flex-row flex flex-col  mt-24'>
                {eventsData?.data.map((event,i) => (
                    <div    
                        key={`${i}`} 
                        className='flex flex-col shadow-xl md:mr-4 mx-4 md:mb-0 mb-4 rounded-lg bg-blue cursor-pointer transform duration-500 translate hover:opacity-90 hover:scale-105'>
                        <div className="flex h-64 object-cover">
                            <img src={event?.screenshot} className='rounded-t-lg' />
                        </div>   
                        <span className='text-center mt-4 text-white text-2xl font-semibold'>{event?.type}</span>

                        <span className='text-center mt-4 text-gray text-xl font-semibold'>Orgainaizer: 
                            <span className='text-2xl ml-2 text-white'>
                                 {event?.organizer}
                            </span>
                        </span>
                        <span className='text-center text-xl mt-10 ml-5 text-white'>{event?.title}</span>

                        <span className='mt-10 ml-5 text-gray'>Start-date : {event?.start_date}</span>
                        <span className='mt-2 ml-5 text-gray'>End:date{event?.end_date}</span>
                        <span className='ml-5 mt-7 text-gray'>{event?.country === '' ? "" : 'Country:'} {event?.country || ''}</span>
                        <span className='ml-5 pb-32 text-gray'>{event?.city === '' ? "" : 'City:'} {event?.city}</span>
                    </div>    
                ))}
            </div>
        </Header>
        
    )
}