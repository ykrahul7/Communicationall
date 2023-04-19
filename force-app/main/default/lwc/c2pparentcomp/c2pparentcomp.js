import { LightningElement } from 'lwc';

export default class C2pparentcomp extends LightningElement {
      msg
    showmodal=true;
    handelers(event){
        this.showmodal=false;
        this.msg=event.detail.msg;
    }

}