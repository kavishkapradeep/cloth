import './ProductDisplay.css'
import {useParams} from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import RelatedProduct from '../RelatedProduct/RelatedProduct'
import Description from '../Description/Description'

const ProductDisplay = () => {
  const {products,sizes,setSizes,productData,setProductData,cartItem,setCartItems,addToCart} = useContext(StoreContext)
    const {productId} =useParams();
    
    const [image,setImage]=useState('')
    
    

    const fetchProductData = async ()=>{
        products.map((item)=>{
          if (item._id===productId) {
            setProductData(item)
            setImage(item.image[0])
            
            return null;
            
          }
        })
    }
    
    useEffect(()=>{
      fetchProductData();
    },[productId,products])
  return productData? (
    <div>
      <div className="productdata">
          <div className="product-image">
              <div className="image-container">
                {
                  productData.image.map((item,i)=>(
                    <img onClick={()=>setImage(item)} src={item}  key={i} alt="" />
                  ))
                }
              </div>
              <div className="main-image">
                 <img src={image} alt="" />
              </div>
          </div>
          <div className="product-details">
              <h1>{productData.name}</h1>
              <p>{productData.description}</p>
              <div className="product-size">
                {
                  productData.sizes.map((item,i)=>(
                    <button onClick={()=>setSizes(item)}><p key={i}>{item}</p></button>
                     
                  ))
                }
              </div>
              <p>${productData.price}</p>
              <button onClick={()=>addToCart(productData._id,sizes)} className="add-to-cart">ADD TO CART</button>
              <div className="product-details-detail">
                  <p>100% Original Product</p>
                  <p>Cash on delivery is avalible on the product</p>
                  <p>Easy return and exchange policy within 7 days</p>
              </div>
          </div>
      </div>
     <Description/>
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ):
  <div></div>
  
}

export default ProductDisplay