import { PipeTransform, Pipe } from '@angular/core';
import { PaisModel }           from './models/pais-model';

@Pipe({name:'paisFilter'})
export class PaisFilterPipe implements PipeTransform{
    transform(paises: PaisModel[], textoBusqueda: string){
        if (!paises || !textoBusqueda){
            return paises;
        }
        return paises.filter(pais => pais.nombrePais.toLowerCase().indexOf(textoBusqueda.toLowerCase()) !== -1);
    }
}