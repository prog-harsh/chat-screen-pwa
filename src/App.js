import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Chats from './components/Chats';

function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripName, setTripName] = useState("");
  const [mode, setMode] = useState("online");


  useEffect(()=>{
    getData().catch(err => {
     setMode("offline");
     let localStorageData = localStorage.getItem("data");
     setData(JSON.parse(localStorageData));
     let localStorageTripDetails = localStorage.getItem("tripDetails");
     localStorageTripDetails = JSON.parse(localStorageTripDetails);
     setFrom(localStorageTripDetails.from);
     setTo(localStorageTripDetails.to);
     setTripName(localStorageTripDetails.name)
    });
   },[page]);
 
   useEffect(()=>{
     window.addEventListener("scroll", handelInfiniteScroll);
     return () => window.removeEventListener("scroll", handelInfiniteScroll);
   },[]);

  const getData = async () => {
    const response = await fetch(`https://3.111.128.67/assignment/chat?page=${page}`);

    response.json().then(resData => {
        setData(prev => { 
          localStorage.setItem("data", JSON.stringify([...prev, ...resData.chats]))
          return [...prev, ...resData.chats]
        });
        setFrom(resData.from);
        setTo(resData.to);
        setTripName(resData.name);
        localStorage.setItem("tripDetails", JSON.stringify({
          from: resData.from,
          to: resData.to,
          name: resData.name
        }));
        
    });
  }

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };


  
  return (
    <>
        {mode === "offline" && <div className='offline'>You are in offline mode</div>}
      <Header from={from} to={to} name={tripName}/>

      {
        data[0] &&  <Chats chatsData={data} />
      }
      
    </>
  );
}

export default App;