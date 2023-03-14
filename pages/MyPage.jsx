import React, {useState, useEffect} from 'react'
import { client } from '../lib/client';

const MyPage = ({data}) => {
  const[searched, setSearched] = useState([])

//   const getSearched = async () => {
//     const url = '*[_type == "post"]';
//     try {
//       const data = await client.fetch(url);
//       if (response.status >= 400) {
//         throw new Error('Bad response from server');
//       }
//     setSearched(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  

  
  
  return (
    <div>
      Helllooooooooo
    </div>
  )
}

// MyPage.getInitialProps = async () => {
//     const data = await client.fetch('*[_type == "post"]');
//     const data = await res.json();
  
//     return { data };
//   };


export default MyPage
