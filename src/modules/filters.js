
// фильтр поиска
//export const searchFilter = (goods, value) => {
//     return goods.filter((goodsItem) => {
//         return goodsItem.title.toLowerCase().includes(value.toLowerCase())
//     })
// }

//фильтр по категориям
export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;

    })
}
//общая функция для фильтрации по цене и акции + поиск
export const funcFilter = (goods, minValue, maxValue, checkValue, searchValue) => {
    console.log(checkValue);
    return goods.filter((goodsItem) => {
        const isMin = minValue.trim() ? goodsItem.price >= parseInt(minValue.trim()) : true;
        const isMax = maxValue.trim() ? goodsItem.price <= parseInt(maxValue.trim()) : true;
        const isSale = checkValue ? goodsItem.sale : true;
        return isMin && isMax && isSale && goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
    })
}
// функция для фильтрации по цене
export const priceFilter = (goods, min, max) => {
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
export const hotSaleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
       if(value){
        return goodsItem.sale===true
       }else{
        return goodsItem
       }

    })
}