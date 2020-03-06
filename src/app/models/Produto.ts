export class Produto {
    constructor(
        public codProduto?: number,
        public desc?: string,
        public reg_anvisa?: string,
        public controlado?: boolean,
        public codGrupo?: number
    ) { }
}

// o ponto ? faz com que o parametro seja opcional