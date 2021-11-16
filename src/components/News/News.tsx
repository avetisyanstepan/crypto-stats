import React, { useEffect } from "react";
import Header from "../../layouts/Header";
// import { API_NEWS } from "../../API";


export const News = () => {
    // const handleGetNews = async () => {
    //     const res = await API_NEWS.get();
    //     if(res) {
    //         console.log('res',res)
    //     }
      
    //   }

    //   useEffect(() => {
    // handleGetNews()
    //   },[])

  
    return(
        <Header>
             <div>
                No news yet...
            </div>
        </Header>
       
    )
}