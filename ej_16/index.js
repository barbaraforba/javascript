

class perimetroArea{
    constructor(lado){
     this.lado=lado;
    }   

    calcArea(){
        return console.log(this.lado*this.lado);
    }

    calcPerimetro(){
        console.log(this.lado*4);
    }
}

const pequeno = new perimetroArea(2);
const mediano = new perimetroArea(5);
const grande = new perimetroArea(10);

pequeno.calcArea();
pequeno.calcPerimetro();

mediano.calcArea();
mediano.calcPerimetro();

grande.calcArea();
grande.calcPerimetro();