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
        this.kolo.subscribe({
            next(x) {
                console.log(`primio br ${x}`);
            },
            error(err){console.log("greeska")}   
        })
    }

    proveriTiket(br:number){
        if(this.proveriBroj(br)){
            this.pogodjenih++;
            if(this.jeDobitan()){
                this.setStatus('Dobitan');
            }
            else{
                console.log(`Pogodjen broj ${br}`);
            }
        }
    }

    proveriBroj(br:number):boolean{
        //this.brojevi.forEach((el)=>{
        //    if(el===br)
        //        return true;
        //})
        return this.brojevi.includes(br);
    }

    jeDobitan():boolean{
        return this.pogodjenih === 6 ? true : false;
    }

    setStatus(status:String){
        this.status = status;
        console.log(this.status);
    }

    gubitan(){ //proba, prepravi da ima vise smisla
        this.setStatus('Gubitan');
        console.log(this.status); 
    }

}