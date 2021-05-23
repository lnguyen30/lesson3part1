import * as Element from './element.js'

//event listeners for home page
export function addEventListeners(){
    Element.menuHome.addEventListener('click', async ()=>{
        await home_page();
    })
}

export async function home_page(){
    Element.root.innerHTML ='<h1>Home Page</h1>'
}