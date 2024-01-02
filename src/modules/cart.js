import renderCart from "./renderCart";
import postData from "./postData";
import { changeTotalCounter } from "./helpers";
import {thanks} from "./helpers";
const cart = () => {
    const cartBtn = document.getElementById("cart");
    const cartModal = document.querySelector(".cart");
    const btnCartModal = document.querySelector(".cart-confirm");
    const cartCloseBtn = cartModal.querySelector(".cart-close");
    const goodsWrapper = document.querySelector(".goods");
    const cartTotal = cartModal.querySelector(".cart-total>span");
    const cartSendBtn = cartModal.querySelector(".cart-confirm");
    const cartWrapper = document.querySelector(".cart-wrapper");
  

    // console.log(cartTotal);
    const openCart = () => {
       
        const cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        cartModal.style.display = "flex";
        renderCart(cart);
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price * goodItem.count;
        }, 0);
        changeTotalCounter();
        document.body.style.overflow = "hidden"; //запрет прокрутки сайта под меню
    };
   
    cartBtn.addEventListener("click", openCart);
    const closeCart = () => {
        cartModal.style.display = "";
     
        changeTotalCounter();
        document.body.style.overflow = ""; //возвращает прокрутку
    };
    cartCloseBtn.addEventListener("click", closeCart);
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("cart")) {
            closeCart();
        }
      });
    // console.log(cartModal);
    //рендер товаров в корзине(из localStorage)
    // goodsWrapper.addEventListener("click", (event) => {
    //     if (event.target.classList.contains("btn-primary")) {
    //         const card = event.target.closest(".card");
    //         const key = card.dataset.key
    //         const goods = JSON.parse(localStorage.getItem("goods"));
    //         const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    //         const goodItem = goods.find((item) => {
    //             return item.id === +key;
    //         })

    //         cart.push(goodItem)
    //         localStorage.setItem("cart", JSON.stringify(cart))
    //         changeTotalCounter()
    //         // console.log(goodItem);
    //     }
    // })
    goodsWrapper.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-primary")) {
            const card = event.target.closest(".card");
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem("goods"));
            const cart = localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : [];
            const goodItem = goods.find((item) => {
                return item.id === +key;
            });
            goodItem["count"] = 1;

            const AddToCart = (goodItem) => {
                if (cart.some((item) => item.id === goodItem.id)) {
                    cart.map((item) => {
                        if (item.id === goodItem.id) {
                            item.count++;
                        }
                        return item;
                    });
                } else {
                    cart.push(goodItem);
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                changeTotalCounter();
            };
            AddToCart(goodItem);
            if (cart.length > 0) {
                btnCartModal.style.display = "block";
            } else {
                btnCartModal.style.display = "none";
            }
        }
    });

    cartWrapper.addEventListener("click", (event) => {
        const cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        const card = event.target.closest(".cart-item");
        const key = card.dataset.key;
        const goodItem = cart.find((item) => {
            return item.id === +key;
        });

        //удаление товара из корзины
        if (event.target.classList.contains("cart-btn-delete-svg")) {
            const cart = localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : [];
            const card = event.target.closest(".cart-item");
            const key = card.dataset.key;
            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart(cart);
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price * goodItem.count;
            }, 0);
            changeTotalCounter();
            changeTotalCounter();
            if (cart.length > 0) {
                btnCartModal.style.display = "block";
            } else {
                btnCartModal.style.display = "none";
            }
        }
        //уменьшение количества товара
        if (event.target.classList.contains("cart-btn-minus")) {
            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            const itemMinus = () => {
                cart.map((item) => {
                    if (item.id === goodItem.id) {
                        if (item.count <= 1) {
                            item.count = 0;
                            cart.splice(index, 1);
                        } else {
                            item.count--;
                        }
                    }
                    return item;
                });
            };
            itemMinus(event.target.dataset.index);
            // console.log(event.target.dataset.index);
            // console.log(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price * goodItem.count;
            }, 0);
            renderCart(cart);

            if (cart.length > 0) {
                btnCartModal.style.display = "block";
            } else {
                btnCartModal.style.display = "none";
            }
        }
        //увеличение количества товара
        if (event.target.classList.contains("cart-btn-plus")) {

            const goodItem = cart.find((item) => {
                return item.id === +key;
            });
          
            const itemPlus = () => {
                cart.map((item) => {
                    if (item.id === goodItem.id) {
                        item.count++;
                    }
                    return item;
                });
            };
            itemPlus(event.target.dataset.index);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price * goodItem.count;
            }, 0);
            renderCart(cart);
        }
    });

    //отправка заказа
    cartSendBtn.addEventListener("click", () => {
        const cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        postData(cart).then(() => {
            localStorage.removeItem("cart");
            renderCart([]);
            cartTotal.textContent = 0;
            changeTotalCounter();
            closeCart();
            thanks();
            // btnCartModal.style.display = "none";
        });
    });
};
export default cart;
