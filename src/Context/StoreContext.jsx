import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assests/assets";

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{
    
  const[cartItem, setCartItem] = useState({});
  const[showMenu, setShowMenu] = useState(true);
  const[sideMenu, setSideMenu] = useState(false);

 const addToCart = (itemId) =>{
     if(!cartItem[itemId]){
        setCartItem((prev)=>({...prev, [itemId]:1}))
     }
     else{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId]+1}))
     }

 }

 const cartTotal =() =>{
    let totalAmount = 0;
    for(const item in cartItem){
       let itemInfo = food_list.find((product)=> product._id === item);
       totalAmount += itemInfo.price * cartItem[item]
    }
    return totalAmount;

 }
 

 const removeFromCart = (itemId) =>{
    setCartItem((prev)=>({...prev, [itemId]: prev[itemId]-1}))

 }

 const totalItemInCart = () =>{
    let totalItem = 0;
    for(const key in cartItem){
       totalItem += cartItem[key]
  
    }
    return totalItem;

  }

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        cartTotal,
        totalItemInCart,
        showMenu, setShowMenu,
        sideMenu, setSideMenu


    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;