export interface Group {
    id: number;
    nome: string;
    description: string;
    totalMedications: number;
    medicationIds: number[], // IDs dos medicamentos
    // criadoEm?: Date;
}
