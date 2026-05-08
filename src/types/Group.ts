export interface Grupo {
    id: string;
    nome: string;
    cor: string;
    medicamentos: string[]; // IDs dos medicamentos
    criadoEm: Date;
}
