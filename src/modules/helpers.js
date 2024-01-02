//функция отложенного запроса
export const debounce = (func, ms = 300) => {
    let timer
    return (...args) => {
        //сброс таймера
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, ms)
    }
}
  //количество товаров в корзине
  export const changeTotalCounter=()=>{
    const cartsCounter = document.querySelector('.counter');
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    cartsCounter.textContent = cart.length;
    
}
export const thanks=()=>{
    const thanks = document.querySelector('.alert-modal');

    thanks.classList.add('active')
   
    setTimeout(() => {
        thanks.classList.remove('active')
    }, 1000)
}