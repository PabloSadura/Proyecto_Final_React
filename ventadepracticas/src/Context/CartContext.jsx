import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);

  // SETEO EL USUARIO CON LOS DATOS REQUERIDOS
  useEffect(() => {
    setUser({ name: "", email: "", phone: "" });
  }, []);

  // FUNCION QUE AGREGAR AL CARRITO EL PROFESIONAL

  const addItems = (items) => {
    let newCart;
    if (isInCart(items.id)) {
      let index = cart.findIndex((el) => el.id === items.id);
      cart[index].quantity += items.quantity;
      cart[index].total = cart[index].precio * cart[index].quantity;
      newCart = [...cart];
    } else {
      newCart = [...cart, items];
    }
    setCart(newCart);
  };
  // AGREGO CANTIDAD A UN PROF EXISTENTE EN EL CART
  const addCount = (items) => {
    let newCart;
    let index = cart.findIndex((el) => el.id === items.id);
    cart[index].quantity++;
    newCart = [...cart];
    setCart(newCart);
  };

  // RESTO CANTIDAD A UN PROF EXISTENTE E EL CART
  const removeCount = (items) => {
    let newCart;
    let index = cart.findIndex((el) => el.id === items.id);
    cart[index].quantity > 1 ? cart[index].quantity-- : null;
    newCart = [...cart];
    setCart(newCart);
  };
  // REALIZA LA SUMA TOTAL DE CADA PROF DEL CART
  const totalItems = (el) => {
    return el.precio * el.quantity;
  };
  // REALIZA LA SUMA TOTAL DEL CART Y LLAMA A totalItems()
  const total = () => {
    cart["total"] = cart
      .map((el) => totalItems(el))
      .reduce((prev, curr) => prev + curr, 0);
    return cart.total;
  };

  // LIMPIA EL CARRITO
  const clear = () => {
    setCart([]);
  };

  // VERIFICO SI EL PROF ELEGIDO ESTA EN EL CART
  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  };

  // QUITA UN ELEMENTO DEL CART
  const removeItem = (items) => {
    setCart(cart.filter((el) => el.id !== items.id));
  };

  // GENERO LA ORDEN DE COMPRA

  const generateOrder = () => {
    const order = {};
    const dateNow = new Date();
    order.buyer = {
      nombre: user.name,
      email: user.email,
      telefono: user.phone,
    };
    order.date = dateNow;
    order.items = cart.map((el) => {
      const id = el.id;
      const practice = el.practica;
      const title = el.nombre;
      const quantity = el.quantity;
      return { id, practice, title, quantity };
    });
    order.total = total();
    const db = getFirestore();
    const queryInsert = collection(db, "orders");
    addDoc(queryInsert, order)
      .then((resp) => {
        setOrder(resp.id);
      })
      .catch((err) => console.log(err))
      .finally(() => clear());
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItems,
        removeItem,
        clear,
        isInCart,
        addCount,
        removeCount,
        generateOrder,
        total,
        user,
        setUser,
        order,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
