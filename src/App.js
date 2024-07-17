import React, { useEffect } from "react";
import Login from "../src/LoginSetup/Login";
import { Route, Routes } from "react-router-dom";
import ProductItem from "./Components/ProductItem";
import ProductForm from "./Components/ProductForm";
import { useDispatch } from "react-redux";
import { fetchData } from "./ReduxToolkit/Slice/reduxSlice";
import Navbar from "./Components/Navbar";

function App() {

    let dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchData())
    },[])
  return (
    // <Routes>
    //   <Route patch="/" element={<Login />} />
    //   <Route patch="/productitem" element={<ProductItem />} />
    //   <Route patch="/productform" element={<ProductForm />} />
    // </Routes>
    // <Login/>
    <ProductForm />
    // <Navbar/>
  );
}

export default App;
