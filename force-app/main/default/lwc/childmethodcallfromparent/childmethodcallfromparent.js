import { LightningElement,api} from 'lwc';

export default class Childmethodcallfromparent extends LightningElement {
    callfromparent=20;
    
    changehandler(event){
        this.callfromparent= event.target.value;
    }
    @api resetslider(){
      this.callfromparent = 50;
    }



}