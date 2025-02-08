import Notify from 'simple-notify'
import search from './search'

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
            new Notify({
                status: 'error',
                title: 'Ошибка!',
                text: error.message,
                effect: 'slide',
                type: 3,
                autoclose: true,
            })
        })
}
export default getData