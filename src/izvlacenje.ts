import { Subject } from '../node_modules/rxjs/index';
import {Tiket} from './Tiket';
import {UplaceniTiketi} from './UplaceniTiketi';

export default class Izvlacenje{
    public tiketi:UplaceniTiketi;
    public bubanj:number[];
    public izvlaciIzBubnja:Subject<number>;
    public brojKuglica:number = 48;

    constructor(tiketi:UplaceniTiketi){
        this.tiketi=tiketi;
        this.bubanj=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
                    26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];
        this.izvlaciIzBubnja=new Subject<number>();
        this.subscribeTikete();
    }

    pokreni(){
        
        
            for(let i=0; i<30; ++i){
                let izvuceniBroj=this.izvuciBroj();
                console.log(`Izvucen je ${i+1}. broj: ${izvuceniBroj}`);
            
                this.izvlaciIzBubnja.next(izvuceniBroj);
            }
        
        this.izvlaciIzBubnja.complete();
    }



    izvuciBroj():number{
        let rnd = Math.round(Math.random()*(this.bubanj.length-1));
        let izvucen=this.bubanj[rnd];
        this.bubanj.splice(rnd, 1);

        return izvucen;
    }

    subscribeTikete(){
        this.tiketi.prijaviTikete(this.izvlaciIzBubnja);
    }


}