import { api } from "./api";

export const buscarMedicamentosPorNome = async (nome: string) => {
    const response = await api.get(`/produtos/busca?q=${nome}&page=1&per_page=20`);
    return response.data;
};

export const buscarDetalheMedicamento = async (id: number) => {
    const response = await api.get(`/produtos/${id}`);
    return response.data;
};

export const buscarBulaPorNome = async (nome: string) => {
    const response = await api.get(`/bulas/busca?q=${nome}&page=1&per_page=20`);
    return response.data;
}

export const buscarPorPrincipioAtivo = async (id: number) => {
    const response = await api.get(`/bulas/interacoes/pa/${id}?page=1&per_page=20`);
    return response.data;
}