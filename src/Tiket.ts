import { Observable, Observer, Subject } from "../node_modules/rxjs/index";

export  class Tiket{

    public brojevi:number[]=new Array;
    public status:String;
    public pogodjenih:number;
    public ime:String; //ime za lakse raspoznavanje u console logu
    public kolo:Subject<number>;
    

    constructor(nums:number[], name:String){
       nums.forEach((el)=>{
           this.brojevi.push(el);
       })
       //this.brojevi = nums.map(x=>this.brojevi.push(x));
        status='Aktivan';
        this.ime=name;
        this.pogodjenih=0;
    }

    pratiIzvlacenje(){
       this.kolo.subscribe((num)=>{
           this.proveriTiket(num);
       }, 
       (err)=>{
        console.log("Desila se greska");
       },
       ()=>{
           if(this.jeDobitan()){
            this.setStatus('Dobitan');
           }else{
            this.setStatus('Gubitan');
           }    
       })
    }

    proveriTiket(br:number){
        if(this.proveriBroj(br)){
            this.pogodjenih++;
            if(this.jeDobitan()){
                this.setStatus(`Dobitan <----------`);
            }
            else{
                console.log(`Pogodjen broj ${this.ime} ${br}, broj pogodaka ${this.pogodjenih}`);
            }
        }
    }

    proveriBroj(br:number):boolean{
        return this.brojevi.includes(br);
    }

    jeDobitan():boolean{
        return this.pogodjenih === 6 ? true : false;
    }

    setStatus(status:String){
        this.status = status;
        console.log(`Tiket: ${this.ime} je ${this.status}`);
    }

}