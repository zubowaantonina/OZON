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
export default renderCart