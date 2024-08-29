import { create } from "zustand"
import { v4 as uuidv4 } from 'uuid'
import { DraftPacient, Pacient } from "./types"
type PatienetSate = {
    patient: Pacient[],
    activeId: Pacient['id'],
    addPatient: (data: DraftPacient) => void
    deletePatient: (id: Pacient['id']) => void
    getPatienById: (id: Pacient['id']) => void
}

const createPatient = (patient: DraftPacient): Pacient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatienetSate>((set) => ({
    patient: [],
    activeId: '',
    addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
            patient: [...state.patient, newPatient]

        }))

    },
    deletePatient: (id) => {
        set((state) => ({
            patient: state.patient.filter(patient => patient.id != id)
        }))
    },
    getPatienById: (id) => {
        set(() => ({
            activeId: id
        }
        ))
    }
}))