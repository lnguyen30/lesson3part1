import * as Element from './element.js'

export function info(title, body, closeModal){
    //if another modal exists, close the modal
    if(closeModal) closeModal.hide();
    //passes info to modal body then display
   Element.modalInfoTitle.innerHTML = title;
   Element.modalInfoBody.innerHTML = body;
   Element.modalInfo.show();

}

export function currency (money){
    //converts to USD 
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(money);
}