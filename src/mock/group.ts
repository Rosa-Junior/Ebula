import {Group} from "../types/Group"

export const groups: Group[] = [
  {
    id: 1,
    nome: "Antibióticos",
    description:"Medicamentos para infecções bacterianas",
    totalMedications: 12,
    medicationIds: [1, 4],
  },
  {
    id: 2,
    nome: "Pediatria",
    description:"Dosagens infantis e suspensões para RN",
    totalMedications: 5,
    medicationIds:  [1, 2],     
  },
];