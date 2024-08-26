import { create } from "zustand"
import { v4 as uuidv4 } from 'uuid'
import { DraftPacient, Pacient } from "./types"
type PatienetSate = {
    patient: Pacient[],
    addPatient: (data: DraftPacient) => void
}

const createPatient = (patient: DraftPacient): Pacient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatienetSate>((set) => ({
    patient: [],
    addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
            patient: [...state.patient, newPatient]

        }))

    }
}))