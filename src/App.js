import { lazy, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputBox from './components/InputBox';
const Chats = lazy(()=> import("./components/Chats.js"))

function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripName, setTripName] = useState("");
  const [mode, setMode] = useState("online");
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    getData().catch(err => {
     setMode("offline");
     setLoading(false);
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
        setLoading(false);
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
      <Header from={from} to={to} name={tripName} mode={mode}/>

      {
        data[0] &&  <Chats chatsData={data}  />
      }
      {
        loading && <div className='no-data'><p>Please wait...</p></div>
      }
      <InputBox />
    </>
  );
}

export default App;
