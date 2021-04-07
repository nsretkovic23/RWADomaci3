import {Tiket} from './tiket';
import { Observable, Subject } from '../node_modules/rxjs/index';


export class UplaceniTiketi{

    public tiketiZaKolo:Tiket[]=new Array;

    dodajTiket(t:Tiket){
        this.tiketiZaKolo.push(t);
    }

    prijaviTikete(bubanj:Subject<number>){
        this.tiketiZaKolo.forEach((el)=>{
            el.kolo=bubanj;
            el.pratiIzvlacenje();
        })
    }

}