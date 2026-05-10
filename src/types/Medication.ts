export default interface Medication {
    id: number;
    nome: string;
    categoria: string;
    tarja: string;
    principioAtivo: string;
    dosagem: string;
    absorcao: string;
    miligramas: string;
    apresentacao: string;
    subtitle: string;
    title?: string;
    isFavorite?: boolean;
}