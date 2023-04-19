import { LightningElement } from 'lwc';

export default class Parentcomp extends LightningElement {
    crouseldata =[
        {
        src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header : "First Card",
        description : "Four card description.",
        alternativetext : "Fourth card accessible description."

    },
    {
        src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
        header : "second Card",
        description : "second card description.",
        alternativetext : "second card accessible description."

    },
    {
        src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
        header : "third Card",
        description : "third card description.",
        alternativetext : "third card accessible description."

    }

]
precentages
changehandler(event){
this.precentages= event.target.value;

}
handleClick(){
this.template.querySelector('c-childmethodcallfromparent').resetslider();
}


}

