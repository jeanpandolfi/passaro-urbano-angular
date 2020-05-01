import { PipeTransform, Pipe } from '@angular/core';

@Pipe(
    {name: 'descricaoReduzida'}
)
export class DescricaoReduzida implements PipeTransform {
    transform(descricao: string, truencarEm: number): string {

        if(descricao.length > truencarEm){
            return descricao.substr(0, truencarEm) + '...';
        }

        return descricao;
    }
    
}