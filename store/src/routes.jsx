import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./views/categories";
import { AllSales } from "./views/all-sales";
import { Main } from "./views/main";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";
import { Product } from "./views/product";
import { AllProducts } from "./views/all-products";
import { CartProducts } from "./views/cart-products";
import { LikedProducts } from "./views/liked-products";


export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Main/>}/>
        <Route path="categories/*" element={<Categories />} />
        <Route path="all-sales" element={<AllSales />} />
        <Route path='products/:itemId' element={<Product/>} />
        {/* TODO: добавить all-products (самостоятельно) */}
        <Route path="all-products" element={<AllProducts/>}/>
        {/* TODO: роут для лайкнутых товаров (самостоятельно) */}
        <Route path="like" element={<LikedProducts/>}/>
        {/* TODO: роут для корзины (самостоятельно) */}
        <Route path="cart" element={<CartProducts/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};