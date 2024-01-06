import React, {useState, useEffect} from 'react'
import { Icon } from '@iconify/react'
import HomeHeader from '../components/HomeHeader'
import PreviouslyListened from '../components/PreviouslyListened'
import axios from 'axios'
import RecommendationBlock from '../components/RecommendationBlock'
import HomeSkeletonComponent from '../components/HomeSkeletonComponent'

function Homepage() {
  const [contentData, setContentData] = useState([])

  const getHomeContent = async() => {
      const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/genre_view/',
        params: {
          id: '0JQ5DAqbMKFEC4WFtoNRpw',
          content_limit: '10',
          limit: '20'
        },
        headers: {
          'X-RapidAPI-Key': '5779cd9435msh21bee9835236da8p1896b3jsn652af5a80a5b',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setContentData(response.data.content.items)
        } catch (error) {
            console.error(error);
        }
  }

  useEffect(()=>{
      getHomeContent()  
  }, [])

  return (
    <div style={{background: '#000'}} className="col-md-9 pt-2">
     
      <div style={{height: '100%'}} className="container-fluid lightBlackContainer p-3"> 
            <HomeHeader/>
            {
              contentData.length < 1 ?  <HomeSkeletonComponent/> : <>
                
                  <div className='homeContainer'>
                   <PreviouslyListened data={contentData}/> 
                    {
                      contentData.slice(1,6).map(content=><RecommendationBlock title={content?.name} data={content?.content.items}/>)
                    }
                   
                   
                </div>
              </>
            
                  }
        </div>
    </div>
  )
}

export default Homepage