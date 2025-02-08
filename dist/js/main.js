/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/simple-notify/dist/simple-notify.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/simple-notify/dist/simple-notify.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notify)
/* harmony export */ });
var fadeIn = function (self) {
    self.wrapper.classList.add('notify--fade');
    setTimeout(function () {
        self.wrapper.classList.add('notify--fadeIn');
    }, 100);
};
var fadeOut = function (self) {
    self.wrapper.classList.remove('notify--fadeIn');
    setTimeout(function () {
        self.wrapper.remove();
    }, self.speed);
};
var slideIn = function (self) {
    self.wrapper.classList.add('notify--slide');
    setTimeout(function () {
        self.wrapper.classList.add('notify--slideIn');
    }, 100);
};
var slideOut = function (self) {
    self.wrapper.classList.remove('notify--slideIn');
    setTimeout(function () {
        self.wrapper.remove();
    }, self.speed);
};

var stringToHTML = function (strHTML) {
    var parser = new DOMParser(), content = 'text/html', DOM = parser.parseFromString(strHTML, content);
    return DOM.body.childNodes[0];
};

var Notify = /** @class */ (function () {
    function Notify(args) {
        var _this = this;
        this.notifyOut = function (callback) {
            callback(_this);
        };
        var status = args.status, _a = args.type, type = _a === void 0 ? 1 : _a, title = args.title, text = args.text, _b = args.showIcon, showIcon = _b === void 0 ? true : _b, _c = args.customIcon, customIcon = _c === void 0 ? '' : _c, _d = args.customClass, customClass = _d === void 0 ? '' : _d, _e = args.speed, speed = _e === void 0 ? 500 : _e, _f = args.effect, effect = _f === void 0 ? 'fade' : _f, _g = args.showCloseButton, showCloseButton = _g === void 0 ? true : _g, _h = args.autoclose, autoclose = _h === void 0 ? false : _h, _j = args.autotimeout, autotimeout = _j === void 0 ? 3000 : _j, _k = args.gap, gap = _k === void 0 ? 20 : _k, _l = args.distance, distance = _l === void 0 ? 20 : _l, _m = args.position, position = _m === void 0 ? 'right top' : _m, _o = args.customWrapper, customWrapper = _o === void 0 ? '' : _o;
        this.customWrapper = customWrapper;
        this.status = status;
        this.title = title;
        this.text = text;
        this.showIcon = showIcon;
        this.customIcon = customIcon;
        this.customClass = customClass;
        this.speed = speed;
        this.effect = effect;
        this.showCloseButton = showCloseButton;
        this.autoclose = autoclose;
        this.autotimeout = autotimeout;
        this.gap = gap;
        this.distance = distance;
        this.type = type;
        this.position = position;
        if (!this.checkRequirements()) {
            console.error("You must specify 'title' or 'text' at least.");
            return;
        }
        // set outer container for all Notify's
        this.setContainer();
        // set wrapper for each Notify
        this.setWrapper();
        this.setPosition();
        // set icon in the left
        if (this.showIcon)
            this.setIcon();
        // set close button
        if (this.showCloseButton)
            this.setCloseButton();
        // set title, text
        this.setContent();
        // add the Notify to our container
        this.container.prepend(this.wrapper);
        // init effect
        this.setEffect();
        this.notifyIn(this.selectedNotifyInEffect);
        // init autoclose
        if (this.autoclose)
            this.autoClose();
        // check whether Notify is visible
        this.setObserver();
    }
    Notify.prototype.checkRequirements = function () {
        return !!(this.title || this.text);
    };
    Notify.prototype.setContainer = function () {
        var container = document.querySelector('.notifications-container');
        if (container) {
            this.container = container;
        }
        else {
            this.container = document.createElement('div');
            this.container.classList.add('notifications-container');
            document.body.appendChild(this.container);
        }
        this.container.style.setProperty('--distance', this.distance + "px");
    };
    Notify.prototype.setPosition = function () {
        var prefix = 'notify-is-';
        this.position === 'center' ? this.container.classList.add(prefix + "center") : this.container.classList.remove(prefix + "center");
        this.position.includes('left') ? this.container.classList.add(prefix + "left") : this.container.classList.remove(prefix + "left");
        this.position.includes('right') ? this.container.classList.add(prefix + "right") : this.container.classList.remove(prefix + "right");
        this.position.includes('x-center') ? this.container.classList.add(prefix + "x-center") : this.container.classList.remove(prefix + "x-center");
        this.position.includes('top') ? this.container.classList.add(prefix + "top") : this.container.classList.remove(prefix + "top");
        this.position.includes('bottom') ? this.container.classList.add(prefix + "bottom") : this.container.classList.remove(prefix + "bottom");
        this.position.includes('y-center') ? this.container.classList.add(prefix + "y-center") : this.container.classList.remove(prefix + "y-center");
    };
    Notify.prototype.setCloseButton = function () {
        var _this = this;
        var icon_close = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.94 8 4.2-4.193a.67.67 0 0 0-.947-.947L8 7.06l-4.193-4.2a.67.67 0 1 0-.947.947L7.06 8l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l4.193 4.2a.665.665 0 0 0 .947 0 .665.665 0 0 0 0-.947L8.94 8Z" fill="currentColor"/></svg>';
        var closeWrapper = document.createElement('div');
        closeWrapper.classList.add('notify__close');
        closeWrapper.innerHTML = icon_close;
        this.wrapper.appendChild(closeWrapper);
        closeWrapper.addEventListener('click', function () {
            _this.close();
        });
    };
    Notify.prototype.setWrapper = function () {
        if (this.customWrapper) {
            this.wrapper = stringToHTML(this.customWrapper);
        }
        else {
            this.wrapper = document.createElement('div');
        }
        this.wrapper.style.setProperty('--gap', this.gap + "px");
        this.wrapper.style.transitionDuration = this.speed + "ms";
        // set classes
        this.wrapper.classList.add('notify');
        this.wrapper.classList.add("notify--type-" + this.type);
        this.wrapper.classList.add("notify--" + this.status);
        if (this.autoclose)
            this.wrapper.style.setProperty('--timeout', "" + (this.autotimeout + this.speed));
        if (this.autoclose)
            this.wrapper.classList.add("notify-autoclose");
        if (this.customClass)
            this.wrapper.classList.add(this.customClass);
    };
    Notify.prototype.setContent = function () {
        var contentWrapper = document.createElement('div');
        contentWrapper.classList.add('notify-content');
        var titleElement, textElement;
        if (this.title) {
            titleElement = document.createElement('div');
            titleElement.classList.add('notify__title');
            titleElement.textContent = this.title;
            if (!this.showCloseButton)
                titleElement.style.paddingRight = '0';
        }
        if (this.text) {
            textElement = document.createElement('div');
            textElement.classList.add('notify__text');
            textElement.innerHTML = this.text.trim();
            if (!this.title)
                textElement.style.marginTop = '0';
        }
        this.wrapper.appendChild(contentWrapper);
        if (this.title)
            contentWrapper.appendChild(titleElement);
        if (this.text)
            contentWrapper.appendChild(textElement);
    };
    Notify.prototype.setIcon = function () {
        var icon_success = '<svg height="32" width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m19.627 11.72-5.72 5.733-2.2-2.2a1.335 1.335 0 0 0-2.255.381 1.334 1.334 0 0 0 .375 1.5l3.133 3.146a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.334 1.334 0 1 0-1.88-1.893ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z"/></svg>';
        var icon_error = '<svg height="32" width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24A10.667 10.667 0 0 1 5.333 16a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 16 26.667Zm8.413-4.134L9.467 7.587A10.56 10.56 0 0 1 16 5.333 10.667 10.667 0 0 1 26.667 16a10.56 10.56 0 0 1-2.254 6.533Z"/></svg>';
        var icon_warning = '<svg height="32" width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M13.666 15A1.333 1.333 0 0 0 15 13.667V8.334a1.333 1.333 0 0 0-2.665 0v5.333A1.333 1.333 0 0 0 13.666 15Zm-.507 5.227c.325.134.69.134 1.014 0 .164-.064.314-.159.44-.28a1.56 1.56 0 0 0 .28-.44c.075-.158.111-.332.106-.507a1.333 1.333 0 0 0-.386-.946 1.53 1.53 0 0 0-.44-.28A1.333 1.333 0 0 0 12.334 19a1.4 1.4 0 0 0 .386.947c.127.121.277.216.44.28ZM13.666 27a13.333 13.333 0 1 0 0-26.667 13.333 13.333 0 0 0 0 26.667Zm0-24a10.667 10.667 0 1 1 0 21.333 10.667 10.667 0 0 1 0-21.333Z"/></svg>';
        var icon_info = '<svg height="32" width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16 14.667A1.333 1.333 0 0 0 14.667 16v5.333a1.333 1.333 0 1 0 2.666 0V16A1.333 1.333 0 0 0 16 14.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28c-.117.13-.212.278-.28.44a1.12 1.12 0 0 0-.106.507 1.333 1.333 0 0 0 .386.946c.13.118.279.213.44.28a1.333 1.333 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z"/></svg>';
        var computedIcon = function (status) {
            switch (status) {
                case 'success':
                    return icon_success;
                case 'warning':
                    return icon_warning;
                case 'error':
                    return icon_error;
                case 'info':
                    return icon_info;
            }
        };
        var iconWrapper = document.createElement('div');
        iconWrapper.classList.add('notify__icon');
        iconWrapper.innerHTML = this.customIcon || computedIcon(this.status);
        if (this.status || this.customIcon)
            this.wrapper.appendChild(iconWrapper);
    };
    Notify.prototype.setObserver = function () {
        var _this = this;
        var observer = new IntersectionObserver(function (entries) {
            if (!(entries[0].intersectionRatio <= 0)) {
                return;
            }
            else {
                _this.close();
            }
        }, {
            threshold: 0
        });
        setTimeout(function () {
            observer.observe(_this.wrapper);
        }, this.speed);
    };
    Notify.prototype.notifyIn = function (callback) {
        callback(this);
    };
    Notify.prototype.autoClose = function () {
        var _this = this;
        setTimeout(function () {
            _this.close();
        }, this.autotimeout + this.speed);
    };
    Notify.prototype.close = function () {
        this.notifyOut(this.selectedNotifyOutEffect);
    };
    Notify.prototype.setEffect = function () {
        switch (this.effect) {
            case 'fade':
                this.selectedNotifyInEffect = fadeIn;
                this.selectedNotifyOutEffect = fadeOut;
                break;
            case 'slide':
                this.selectedNotifyInEffect = slideIn;
                this.selectedNotifyOutEffect = slideOut;
                break;
            default:
                this.selectedNotifyInEffect = fadeIn;
                this.selectedNotifyOutEffect = fadeOut;
        }
    };
    return Notify;
}());




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ "./src/modules/cart.js");
/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ "./src/modules/load.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/modules/search.js");
/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ "./src/modules/catalog.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");









(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__["default"])()



/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ "./src/modules/renderCart.js");
/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ "./src/modules/postData.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");




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
        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])(cart);
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price * goodItem.count;
        }, 0);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.changeTotalCounter)();
        document.body.style.overflow = "hidden"; //запрет прокрутки сайта под меню
    };
   
    cartBtn.addEventListener("click", openCart);
    const closeCart = () => {
        cartModal.style.display = "";
     
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.changeTotalCounter)();
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
                (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.changeTotalCounter)();
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
            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])(cart);
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price * goodItem.count;
            }, 0);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.changeTotalCounter)();
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.changeTotalCounter)();
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
            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])(cart);

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
            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])(cart);
        }
    });

    //отправка заказа
    cartSendBtn.addEventListener("click", () => {
        const cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        (0,_postData__WEBPACK_IMPORTED_MODULE_1__["default"])(cart).then(() => {
            localStorage.removeItem("cart");
            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])([]);
            cartTotal.textContent = 0;
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.changeTotalCounter)();
            closeCart();
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.thanks)();
            // btnCartModal.style.display = "none";
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);


/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/modules/getData.js");
/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ "./src/modules/renderGoods.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ "./src/modules/filters.js");





const catalog = () => {
    const btnCatalog = document.querySelector(".catalog-button>button")
    const catalogModal = document.querySelector(".catalog")
    const catalogModalItems = document.querySelectorAll(".catalog li")
    console.log(catalogModalItems);
    let isOpen = false
    btnCatalog.addEventListener("click", () => {
        isOpen = !isOpen
        if (isOpen) {
            catalogModal.style.display = "block"
        } else {
            catalogModal.style.display = ""
        }
catalogModalItems.forEach(item => {

   item.addEventListener('click', () => {
        const text=item.textContent
        console.log(text);
        (0,_getData__WEBPACK_IMPORTED_MODULE_0__["default"])().then((data) => {
            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data,text));

        });
    })
   
})
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),
/* harmony export */   funcFilter: () => (/* binding */ funcFilter),
/* harmony export */   hotSaleFilter: () => (/* binding */ hotSaleFilter),
/* harmony export */   priceFilter: () => (/* binding */ priceFilter)
/* harmony export */ });

// фильтр поиска
//export const searchFilter = (goods, value) => {
//     return goods.filter((goodsItem) => {
//         return goodsItem.title.toLowerCase().includes(value.toLowerCase())
//     })
// }

//фильтр по категориям
const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;

    })
}
//общая функция для фильтрации по цене и акции + поиск
const funcFilter = (goods, minValue, maxValue, checkValue, searchValue) => {
    console.log(checkValue);
    return goods.filter((goodsItem) => {
        const isMin = minValue.trim() ? goodsItem.price >= parseInt(minValue.trim()) : true;
        const isMax = maxValue.trim() ? goodsItem.price <= parseInt(maxValue.trim()) : true;
        const isSale = checkValue ? goodsItem.sale : true;
        return isMin && isMax && isSale && goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
    })
}
// функция для фильтрации по цене
const priceFilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        if (min === "" && max === "") {
            return goodsItem
        } else if (min !== "" && max !== "") {
            return goodsItem.price > +min && goodsItem.price < +max
        } else if (min !== "" && max === "") {
            return goodsItem.price > +min
        } else if (min === "" && max !== "") {
            return goodsItem.price < +max
        }

    })
}
//фильтр  акции
const hotSaleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
       if(value){
        return goodsItem.sale===true
       }else{
        return goodsItem
       }

    })
}

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_notify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-notify */ "./node_modules/simple-notify/dist/simple-notify.es.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/modules/search.js");



const getData = (str) => {
    return fetch(
        // `https://ozon-test-js-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}}`
        // `https://ozon-test-js-default-rtdb.firebaseio.com/goods.json`
        `https://o-ozone-glo-default-rtdb.firebaseio.com/goods.json`
        )
        .then((response) => {
            // new Notify({
            //     status: 'success',
            //     title: 'Notify Title',
            //     text: 'notify text',
            //     effect: 'slide',
            //     type: 3,
            //     autoclose: true,
            //   })
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ошибка запроса!')
                // console.log(response);
            }

        })
        //    .then((data) => console.log(data));
        .catch(error => {
            // console.log(error.message);
            new simple_notify__WEBPACK_IMPORTED_MODULE_0__["default"]({
                status: 'error',
                title: 'Ошибка!',
                text: error.message,
                effect: 'slide',
                type: 3,
                autoclose: true,
            })
        })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeTotalCounter: () => (/* binding */ changeTotalCounter),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   thanks: () => (/* binding */ thanks)
/* harmony export */ });
//функция отложенного запроса
const debounce = (func, ms = 300) => {
    let timer
    return (...args) => {
        //сброс таймера
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(undefined, args) }, ms)
    }
}
  //количество товаров в корзине
  const changeTotalCounter=()=>{
    const cartsCounter = document.querySelector('.counter');
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    cartsCounter.textContent = cart.length;
    
}
const thanks=()=>{
    const thanks = document.querySelector('.alert-modal');

    thanks.classList.add('active')
   
    setTimeout(() => {
        thanks.classList.remove('active')
    }, 1000)
}

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/modules/getData.js");
/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ "./src/modules/renderGoods.js");



const load = () => {
  (0,_getData__WEBPACK_IMPORTED_MODULE_0__["default"])().then((data) => {
    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
   
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);


/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postData = (cart) => {
   
    return fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify(cart),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   }).then(res => res.json())
 
 }
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderCart = (goods) => {
	const cartWrapper = document.querySelector('.cart-wrapper');
	cartWrapper.innerHTML = ''
	if (goods.length === 0) {
		cartWrapper.insertAdjacentHTML('beforeend',
			`
                <div id="cart-empty">
					Ваша корзина пока пуста
				</div>
               `
		)
	} else {
		goods.forEach((goodsItem) => {
			cartWrapper.insertAdjacentHTML('beforeend',
				`
				<div class="cart-item" data-key="${goodsItem.id}">
				<div class="cart-item-image">
				<h5 class="cart-item-title">${goodsItem.title}</h5>
					<div class="cart-img-wrapper">
						<span class="card-img-top"
							style="background-image: url('${goodsItem.img}')"></span>
							
					</div>
				</div>

				
					
					<div class="cart-data justify-content-between align-items-center">
					
						
					<div class=" d-flex justify-content-center align-items-center">	
						<td><button class="cart-btn-minus" data-index='${goodsItem.id}'>-</button></td>
						<td>${goodsItem.count}</td>
						<td><button class="cart-btn-plus" data-index='${goodsItem.id}'>+</button></td>
						<td>${goodsItem.price * goodsItem.count} ₽</td>
						<td><button class="cart-btn-delete">
						<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="cart-btn-delete-svg">
                            <path d="M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="black"/>
                            </svg>

						</button></td>
					</div>
					</div>
				</div>
			`
			)

		})

	}
	// console.log(goodsWrapper);

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");

const renderGoods = (goods) => {
	const goodsWrapper = document.querySelector('.goods');
	localStorage.setItem('goods', JSON.stringify(goods))

	;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.changeTotalCounter)()
	goodsWrapper.innerHTML = ''
	// console.log(goodsWrapper);
	goods.forEach((goodsItem) => {


		goodsWrapper.insertAdjacentHTML('beforeend',

			`
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
			<div class="card" data-key="${goodsItem.id}">
            ${goodsItem.sale ? `<div class="card-sale">🔥Hot Sale🔥</div>` : ''}
				<div class="card-img-wrapper">
					<span class="card-img-top"
						style="background-image: url('${goodsItem.img}')"></span>
				</div>
				<div class="card-body justify-content-between">
					<div class="card-price">${goodsItem.price} ₽</div>
					<h5 class="card-title">${goodsItem.title}</h5>
					<button class="btn btn-primary">В корзину</button>
				</div>
			</div>
		</div>
        
        `
		)
		
	})
	
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/modules/getData.js");
/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ "./src/modules/renderGoods.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ "./src/modules/filters.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");




const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')
    const minInp = document.getElementById('min')
    const maxInp = document.getElementById('max')
    const checkInp = document.getElementById('discount-checkbox')
    const checkMark = document.querySelector('.filter-check_checkmark')
    //отложенный запрос
    // const debounceSearch = debounce((event) => {
    //     getData().then((data) => {
    //         renderGoods(searchFilter(data, event.target.value));

    //     });
    // }, 2000)
    const debounceFunc = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.debounce)((min = '', max = '', checkValue = false, searchValue = '') => {
        // console.log(min);
        // console.log(max);
        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__["default"])().then((data) => {
            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.funcFilter)(data, min, max, checkValue, searchValue));

        });
    }, 2000)

    searchInput.addEventListener('input', ()=>{
        debounceFunc(minInp.value, maxInp.value, checkInp.value, searchInput.value)
    })
    //--------------------------------------------------------
    minInp.addEventListener('input', () => {
        debounceFunc(minInp.value, maxInp.value, checkInp.value, searchInput.value)
    })
    maxInp.addEventListener('input', () => {
        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value)
    })
    checkInp.addEventListener('input', () => {
        // console.log(checkInp.checked);
        if (checkInp.checked) {
            checkMark.classList.add('checked');
        } else {
            checkMark.classList.remove('checked');
        }
        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value)
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkozon"] = self["webpackChunkozon"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map