export type Pacient = {
    id: string,
    name: string,
    caretaker: string,
    date: Date,
    email: string,
    symptoms: string
}

export type DraftPacient = Omit<Pacient, 'id'>