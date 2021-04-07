import {Tiket} from './Tiket';
import {UplaceniTiketi} from './UplaceniTiketi';
import Izvlacenje from './izvlacenje'
import { Observable, Subject } from '../node_modules/rxjs/index';


let uplTiketi = new UplaceniTiketi();
const tiket1 = new Tiket([5,13,25,33,42,45], "prvi tiket");
const tiket2 = new Tiket([2,7,15,22,44,48],"drugi tiket");
const tiket3 = new Tiket([1,19,11,23,41,24],"treci tiket");
const tiket4 = new Tiket([17,4,18,2,30,46], "cetvrti tiket");

uplTiketi.dodajTiket(tiket1);
uplTiketi.dodajTiket(tiket2);
uplTiketi.dodajTiket(tiket3);
uplTiketi.dodajTiket(tiket4);

const novaIgra = new Izvlacenje(uplTiketi);
novaIgra.pokreni();















