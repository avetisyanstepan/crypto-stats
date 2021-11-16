import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { Images } from '../envaironmnet/Images'
import { VscListFlat, VscChromeClose } from "react-icons/vsc";


interface HeaderProps {
    children: React.ReactNode;
  }
  

const Header = ({children}:HeaderProps) => {
    const router = useRouter();

    const [show, setShow] = useState<boolean>(false)

    return (
        <div className='bg-blue h-20'>
            <div className='max-w-screen-2xl m-auto'>
                <div className='flex justify-between '>
                    <div className='pt-2.5 cursor-pointer' onClick={() => router.push('/')}>
                        <img src={Images.LogoHeader} />
                    </div>
                    <div className='md:flex hidden flex-1 justify-center '>
                        <Link href='/'>
                            <button 
                                className={`text-2xl mr-5 py-6  hover:opacity-70 animate-pulse	
                                            ${router.pathname === '/' ? 'text-yellow ' : 'text-white'}`
                                        }
                            >
                                Live Stats
                            </button>
                        </Link>
                        <Link href='/exchanges'>
                            <button className={`text-white mr-5 py-7  cursor-pointer hover:opacity-70 
                                            ${router.pathname === '/exchanges' ? 'text-yellow ' : 'text-white'}`
                                        }
                            >
                                Exchanges
                            </button>
                        </Link>
                        <Link href='/news'>
                            <button className='text-white mr-5 py-7  hover:opacity-70'>News</button>
                        </Link>
                        <Link href='/events'>
                            <button className={`text-white mr-5 py-7 hover:opacity-70 
                                            ${router.pathname === '/events' ? 'text-yellow ' : 'text-white'}`
                                        }
                            >
                                Events
                            </button>
                        </Link>
                    </div>
                    {/* Mobile Header */}
                    <div className='md:hidden block items-center mt-3 mr-4 flex'>
                        <button onClick={() => setShow(true)}>
                          <VscListFlat size={40} className='text-white' />
                        </button>    
                    </div>
                   
                </div>
                {show && 
                      <div className='fixed top-0 right-0 left-0 bottom-0  h-full bg-blue z-20'>
                          <div className='flex justify-between'>
                          <div className='pt-2.5 cursor-pointer' onClick={() => router.push('/')}>
                                <img src={Images.LogoHeader} />
                            </div>
                            <div className='flex mr-5  justify-end'>
                               <button onClick={() => setShow(false)}>
                                 <VscChromeClose size={32} color='white' />
                                </button>
                            </div>    
                          </div>    
                           
                           
                            <div className='flex flex-col mt-10'>
                                <button 
                                        className='text-white text-xl mb-4' 
                                        onClick={() => (router.push('/'), setShow(false))}>
                                    Live Stats
                                </button>
                                <button 
                                        className='text-white text-xl mb-4' 
                                        onClick={() => (router.push('/exchanges'), setShow(false))}>
                                    Exchanges
                                </button>
                                <button 
                                        className='text-white text-xl mb-4'
                                        onClick={() => (router.push('/events'), setShow(false))}>
                                    Events
                                </button>
                                <button className='text-white text-xl'>News</button>

                             </div>
                         
                          
                      </div>    
                    }


           
                {children}
            </div>
        </div>

    )
}

export default Header