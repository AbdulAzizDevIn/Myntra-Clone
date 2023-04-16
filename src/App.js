
import './components/Header/header.css'
import "./components/Home/home.css"
import "./components/Home/footer.css"
import "./components/Catalogue/catalogue.css"


import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Catalogue from './components/Catalogue/Catalogue';


import {  useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



function Products() {
  const [productData,setProductData] = useState(null);
    useEffect(()=>{
    fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=1")
    .then(res => res.json())
    .then(data=>{
      setProductData(data)
    })
    .catch()
  },[])
  if(!productData){
    return (
      <div>loading...</div>
    )
  }
    return(
      <>
      <div>
        {productData[1].title}
      </div>
      <img src={productData[1].image} alt="" />
      </>
    )
  
}
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Header/>,
      children:[{

        path:"/",
        element:<Home/>

      },{

        path:"/catalogue",
        element:<Catalogue/>

      }]
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
