import * as Element from './element.js'

//event listeners for profile page
export function addEventListeners(){
    Element.menuProfile.addEventListener('click', async ()=>{
        await profile_page();
    })
}

export async function profile_page(){
    Element.root.innerHTML ='<h1>Profile Page</h1>'
}