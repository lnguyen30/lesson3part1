import * as Element from './element.js'

//event listeners for home page
export function addEventListeners(){
    Element.menuCart.addEventListener('click', async ()=>{
        await cart_page();
    })
}

export async function cart_page(){
    Element.root.innerHTML ='<h1>Cart Page</h1>'
}