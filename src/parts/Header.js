import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "helpers/hooks/useGlobalContext";

import { ReactComponent as IconCart } from "assets/images/icon-cart.svg";
export default function Header({ theme, position }) {
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  const [isCartChanged, setCartChanged] = useState(false);
  const { state } = useGlobalContext();

  const prevCart = useRef(state?.cart || {});

  useLayoutEffect(() => {
    if (prevCart.current !== state.cart) {
      prevCart.current = state?.cart || {};
      setCartChanged(true);
      setTimeout(() => {
        setCartChanged(false);
      }, 550);
    }
  }, [state.cart]);

  return (
    <header className={[position, "w-full z-40 px-4"].join(" ")}>
      <div className="container mx-auto py-5">
        <div className="flex flex-stretch items-center">
          <div className="w-56 items-center flex">
            <Link to="/">
              <img
                src="/images/content/logo.png"
                alt="Luxspace | Fulfill your house with beautiful furniture"
              />
            </Link>
          </div>
          <div className="w-full"></div>
          <div className="w-auto">
            <ul
              className={[
                "fixed bg-white inset-0 flex flex-col items-center justify-center md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center",
                toggleMainMenu
                  ? "opacity-100 z-30 visible"
                  : "invisible opacity-0",
              ].join(" ")}
            >
              <li className="mx-3 py-6 md:py-0">
                <Link
                  to="/showcase"
                  className={[
                    "hover:underline",
                    theme === "white"
                      ? "text-black md:text-white"
                      : "text-black md:text-black",
                  ].join(" ")}
                >
                  
                </Link>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <Link
                  to="/catalog"
                  className={[
                    "hover:underline",
                    theme === "white"
                      ? "text-black md:text-white "
                      : "text-white md:text-black",
                  ].join(" ")}
                >
                 
                </Link>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <Link
                  to="/delivery"
                  className={[
                    "hover:underline",
                    theme === "white"
                      ? "text-black md:text-white "
                      : "text-white md:text-black",
                  ].join(" ")}
                >
                  
                </Link>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <Link
                  to="/rewards"
                  className={[
                    "hover:underline",
                    theme === "white"
                      ? "text-black md:text-white "
                      : "text-white md:text-black",
                  ].join(" ")}
                >
                
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto">
            <ul className="items-center flex">
              <li className="ml-6 block md:hidden">
               
              </li>
              <li className="ml-6">
                <Link
                  className={[
                    "cart flex items-center justify-center w-12 h-12",
                    theme === "white"
                      ? "text-black md:text-white"
                      : "text-black md:text-black",
                    state.cart && Object.keys(state.cart).length > 0
                      ? "cart-filled"
                      : "",
                    isCartChanged ? "animate-bounce" : "",
                  ].join(" ")}
                  to="/cart"
                >
                  <IconCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
