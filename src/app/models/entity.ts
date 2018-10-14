export interface IEntity {
    id: string;
    nome: string;
    localizacao: Location;
    descricao: string;
    tipo: string;
    camposDinamicos: any[];
    keywords: string[];
    created_date: string;
}

export class Entity implements IEntity {
    id: string;
    nome: string;
    localizacao: Location;
    descricao: string;
    tipo: string;
    camposDinamicos: any[];
    keywords: string[];
    created_date: string;

    constructor(
        entidade: IEntity
    ) {
        this.id = entidade.id;
        this.nome = entidade.nome;
        this.localizacao = entidade.localizacao;
        this.descricao = entidade.descricao;
        this.tipo = entidade.tipo;
        this.camposDinamicos = entidade.camposDinamicos;
        this.keywords = entidade.keywords;
        this.created_date = entidade.created_date;
    }

    get IconUrl() {
        switch (this.tipo) {
            case 'banheiros':
                return '../../assets/toilet-icon.png';
            case 'pontos-coleta-azeite':
                return '../../assets/oil-icon.png';
        }
    }
}

export class Location {
    latitude: number;
    longitude: number;
}


