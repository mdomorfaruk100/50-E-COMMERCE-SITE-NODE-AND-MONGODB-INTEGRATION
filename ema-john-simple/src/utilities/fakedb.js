// // // use local storage as your db for now
// // const addToDb = id => {
// //   const exists = getDb();
// //   let shopping_cart = {};
// //   if (!exists) {
// //     shopping_cart[id] = 1;
// //   }
// //   else {
// //     shopping_cart = JSON.parse(exists);
// //     if (shopping_cart[id]) {
// //       const newCount = shopping_cart[id] + 1;
// //       shopping_cart[id] = newCount;
// //     }
// //     else {
// //       shopping_cart[id] = 1;
// //     }
// //   }
// //   updateDb(shopping_cart);
// // }

// // const getDb = () => {
// //   const db = localStorage.getItem('shopping_cart')
// //   return db;
// // };
// // const updateDb = cart => {
// //   localStorage.setItem('shopping_cart', JSON.stringify(cart));
// // }

// // const removeFromDb = id => {
// //   const exists = getDb();
// //   if (!exists) {
// //     updateDb({})
// //   }
// //   else {
// //     const shopping_cart = JSON.parse(exists);
// //     delete shopping_cart[id];
// //     updateDb(shopping_cart);
// //   }
// // }

// // const getStoredCart = () => {
// //   const exists = getDb();
// //   return exists ? JSON.parse(exists) : {};
// // }

// // const clearTheCart = () => {
// //   localStorage.removeItem('shopping_cart');
// // }

// // export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }

// const getUser = () => {
//   const user = sessionStorage.getItem("userId");
//   if(!user){
//     const newUser = 'user-' + new Date().getTime();
//     sessionStorage.setItem("userId", newUser);
//     return sessionStorage.getItem('userId');
//   }
//   console.log('user ', user)
//   return user;
// }

// const getDataKey = () => {
//   const userId = getUser();
//   return "emajohn/cart/"+userId;
// }

// const getDataBaseCart = () => {
//   const dataKey = getDataKey();
//   const cart = localStorage.getItem(dataKey) || "{}";
//   return JSON.parse(cart);
// }
  

// const addToCart = (productKey, count) => {
//   const dataKey = getDataKey();
//   const dbCart = getDataBaseCart();
//   dbCart[productKey] = count;
//   localStorage.setItem(dataKey, JSON.stringify(dbCart));
// }

// const removeFromCart = (productKey) => {
//   const dbCart = getDataBaseCart();
//   delete dbCart[productKey];
//   localStorage.setItem(getDataKey(), JSON.stringify(dbCart));
// }


// const processOrder = () => {
//   const dataKey = getDataKey();
//   localStorage.removeItem(dataKey);
// }

// export { getUser, addToCart, removeFromCart,getDataBaseCart ,processOrder }


const getUser = () => {
  const currentUser = sessionStorage.getItem('userId');
  if(!currentUser){
    const userId = 'user-'+ new Date().getTime();
    sessionStorage.setItem('userId', userId); 
    const newUser = sessionStorage.getItem('userId');
    return newUser;
  }
  return currentUser
}

const getDataKey = () => {
  const userId = getUser();
  const dataKey = 'ema/john/'+ userId;
  return dataKey;
}

const getDataBaseCart = () => {
  const dataKey = getDataKey();
  const dbCart = localStorage.getItem(dataKey) || '{}';
  return JSON.parse(dbCart);
}

const addToCart = (productKey, count) => {
  const dataKey = getDataKey();
  const previousCart = getDataBaseCart();
  previousCart[productKey] = count;
  console.log(JSON.stringify(previousCart), productKey);
  localStorage.setItem(dataKey, JSON.stringify(previousCart));
}

const removeFromCart = (productKey) => {
  const dataKey = getDataKey();
  const previousCart = getDataBaseCart();
  delete previousCart[productKey];
  localStorage.setItem(dataKey, JSON.stringify(previousCart));
}

const proceedOrder = () => {
  const dataKey = getDataKey();
  localStorage.removeItem(dataKey);
}

export {addToCart, removeFromCart, proceedOrder, getDataBaseCart};