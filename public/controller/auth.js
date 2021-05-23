import * as Element from '../viewpage/element.js'
import * as FirebaseController from './firebase_controller.js'
import * as Constant from '../model/constant.js'
//event listener for sign in
export function addEventListeners(){
    Element.formSignin.addEventListener('submit', async e => {

         //listens to sign in form when sign in form button is clicked
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try{
            await FirebaseController.signIn(email, password);
            Element.modalSignin.hide();
        }catch(e){
          console.log(e);
        }
    })

} 