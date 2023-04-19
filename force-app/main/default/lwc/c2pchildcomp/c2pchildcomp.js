import { LightningElement } from 'lwc';

export default class C2pchildcomp extends LightningElement {
       msg
    handleClick(){
        const myevent= new CustomEvent('close',{
        detail:{
            msg:"data already clsoed successfully"
        }
        });
        this.dispatchEvent(myevent);
    }


}