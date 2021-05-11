let products = document.querySelectorAll('.product');
const modal = document.querySelector('#modal2 .modal-content');

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();

    products.forEach((product)=> {
        product.addEventListener('click', (e)=> {
            let img = product.querySelector('.product_img').src;
            let title = product.querySelector('.product_title').innerText;
            let description = product.querySelector('.product_description').innerHTML;
            let price = product.querySelector('.product_price').innerHTML;

            modal.innerHTML = `
               <div class="row">
               <div class="col s12 m6">
                <img class="responsive-img" src="${img}" alt="order img">
               </div>
               <div class="col s12 m6">
                    <div class="order">
                        <h3 class="order_title">${title}</h3>
                        <ul class="order_description">${description}</ul>
                        <div class="order_price">${price}</div>
                    </div>
                    <form action="" method="post">
                    <input type="text" name="name" required>
                    <input type="tel" name="phone" required>
                    <input class="waves-effect waves-light btn red" type="submit">
                    </form>
               </div>
               </div>
            `
        })
    })
})