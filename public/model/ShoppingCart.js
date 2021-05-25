export class ShoppingCart {

    constructor(uid){
        this.uid = uid;
        this.items = []; //array of serialized products objects / shopping cart
    }

    addItem(product){
        //if product already exits in the product array, the push into items array
        // example if product 1 is already in cart, increase it by another 
        const item = this.items.find(e=> product.docId = e.docId);
        //if product is new or no items in cart
        if(!item){
            product.qty = 1;
            //serialize the product
            const newItem = product.serialize();
            //assign new product docId
            newItem.docId = product.docId
            //push it into array
            this.items.push(newItem);
        }else{
            //increase the product by 1
            ++product.qty;// label for each product
            ++item.qty; //shows amount in shopping cart
        }
    }

    removeItem(product){
        //dec qty 
        //find the product in the shopping cart by the docId and index
        const index = this.items.findIndex(e => product.docId == e.docId)
        //if item doesn't exist
        if(index<0) return;

        //dec qty in cart
        --this.items[index].qty; // shopping cart dec
        --product.qty; // label of product dec
        if(product.qty == 0){
            this.items.splice(index, 1); // removes shopping cart 
        }

    }
}