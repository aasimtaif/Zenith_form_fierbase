import React, { useState, useEffect } from 'react'
// import axios from "axios"
import { Routes, Route } from 'react-router-dom'
import { db } from './FireBase'

import './App.css';
import {
  getDocs,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import { Form, Teams, Images } from './component';


const URL = "http://localhost:7000/"
function App() {

  const [data, setData] = useState()
  const postCollectionRef = collection(db, "teams");
  const dataquery = query(postCollectionRef)
  useEffect(() => {
    onSnapshot(dataquery, (snapshot) => {
      setData(snapshot.docs.map((doc) => ({
        id: doc.id,
        team: doc.data()
      })));
    })
  }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       const q = query(collection(db, "teams"))
//       let list = []
//       try {
//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//           // doc.data() is never undefined for query doc snapshots
//           list.push(doc.data())
//         });

//       } catch { console.log("error fetching")}
// setData(list)
//     }
//     fetchData()
//   }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const responce = await axios.get(URL)
  //     setData(responce.data)
  //   }
  //   getData()
  // }, []);


  console.log(data)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/admin' element={<Teams data={data} />} />
        <Route path='/admin/images/:teamId' element={<Images data={data} />} />


      </Routes>


    </div>
  );
}

export default App;
