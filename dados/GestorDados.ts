import db from './DatabaseInstance';
 import { Produto } from './Produto';
 
 class GestorDados {
     public async remover(chave: string){
     db.write(()=>
         db.delete(db.objects('Produto')
                     .filtered('codigo = $0', parseInt(chave)))
     );
     }
     public async adicionar(produto: Produto){
     db.write(() => db.create('Produto', produto));
     }
     public async obterTodos(): Promise<Array<Produto>>{
     let objetos = [];
     for(let obj of db.objects<Produto>('Produto')){
         objetos.push(JSON.parse(JSON.stringify(obj)));
     }
     return objetos;
     }
 }
 
 export default GestorDados;
                     