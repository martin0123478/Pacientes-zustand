import { create } from "zustand"
import { v4 as uuidv4 } from 'uuid'
import { DraftPacient, Pacient } from "./types"
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
type PatienetSate = {
    patient: Pacient[],
    activeId: Pacient['id'],
    addPatient: (data: DraftPacient) => void
    deletePatient: (id: Pacient['id']) => void
    getPatienById: (id: Pacient['id']) => void
    updatePatient: (data: DraftPacient) => void
}

const createPatient = (patient: DraftPacient): Pacient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatienetSate>()
    (devtools(

        persist((set) => ({
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
            },
            updatePatient: (data) => {
                set((state) => ({
                    patient: state.patient.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
                    activeId: ''

                }))
            }
        }), {
            name: 'pacient-Storage',
            storage: createJSONStorage(() => localStorage)
        })
    ))