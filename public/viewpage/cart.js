import * as Element from './element.js'
import * as Route from '../controller/route.js'

//event listeners for home page
export function addEventListeners(){
    Element.menuCart.addEventListener('click', async ()=>{
        history.pushState(null, null, Route.routePathnames.CART);
        await cart_page();
    })
}

export async function cart_page(){
    Element.root.innerHTML ='<h1>Cart Page</h1>'
}