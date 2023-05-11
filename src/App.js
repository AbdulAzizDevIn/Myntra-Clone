
import './components/Header/header.css'
import "./components/Home/home.css"
import "./components/Home/footer.css"
import "./components/Catalogue/catalogue.css"
import "./components/Catalogue/productCard.css"
import "./components/Catalogue/productPage.css"

import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Catalogue from './components/Catalogue/Catalogue';
import Bag from './components/bag/Bag';
import ProductPage from './components/Catalogue/ProductPage'

import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductContext from "./context/products.context"
import { productsData } from './constants/data'




function App() {
  const [productList,setProductsList] = useState([])
  useEffect(()=>{
    setProductsList(productsData)
  },[])
  

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

      },{
        path:"/product/:id",
        element:<ProductPage/>
      }
    ]
    },
    {
      path:"/bag",
      element: <Bag/>
    }
    
  ])
  return (
    <div className="App">
      <ProductContext.Provider value={{productList,setProductsList}}>
      <RouterProvider router={router}></RouterProvider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
