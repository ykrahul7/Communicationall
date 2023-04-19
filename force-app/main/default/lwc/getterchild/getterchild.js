import { LightningElement, api } from 'lwc';

export default class Getterchild extends LightningElement {
    //use of getter setter
    userdetail
   @api 
      get details(){
       return this.userdetail;
      }
      set details(data){
         let newage=data.age*2
         // spread operator used here 
         //also assign the new value 
       this.userdetail={...data,age:newage,"kuchbhi":"kuchbh"}
      }
}