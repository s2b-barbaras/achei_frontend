export interface IPlace {
    _id: string;
    nome: string;
    localizacao: Location;
    descricao: string;
    tipo: string;
    camposDinamicos: any[];
    keywords: string[];
    created_date: string;
}

export class Place implements IPlace {
    _id: string;
    nome: string;
    localizacao: Location;
    descricao: string;
    tipo: string;
    camposDinamicos: any[];
    keywords: string[];
    created_date: string;

    constructor(
        place: IPlace
    ) {
        this._id = place._id;
        this.nome = place.nome;
        this.localizacao = place.localizacao;
        this.descricao = place.descricao;
        this.tipo = place.tipo;
        this.camposDinamicos = place.camposDinamicos;
        this.keywords = place.keywords;
        this.created_date = place.created_date;
    }

    get IconUrl() {
        switch (this.tipo) {
            case 'banheiros':
                return '../../assets/toilet-icon.png';
            case 'pontos-coleta-azeite':
                return '../../assets/oil-icon.png';
            case 'sebo':
                return '../../assets/sebo.png';
        }
    }
}

export class Location {
    latitude: number;
    longitude: number;
}


