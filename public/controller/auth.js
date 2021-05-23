import * as Element from '../viewpage/element.js'
import * as FirebaseController from './firebase_controller.js'
<<<<<<< HEAD
import * as Constant from '../model/constant.js'
=======
import * as Util from '../viewpage/util.js'
>>>>>>> les31-13-modal-infobox
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
<<<<<<< HEAD
          console.log(e);
=======
            console.log(e);
            Util.info('Sign In Error', JSON.stringify(e), Element.modalSignin);
            
>>>>>>> les31-13-modal-infobox
        }
    })

} 