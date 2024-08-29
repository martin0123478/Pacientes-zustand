
import { Pacient } from '../types'
import { PatientDetailItem } from './PatientDetailItem'

type PatiensDetailProps = {
    patient: Pacient
}
export const PatiensDetail = ({ patient }: PatiensDetailProps) => {
    return (
        <div className='mx-5 my-10 px-5 p-10 bg-white shadow-md rounded-xl'>


            <PatientDetailItem label='ID: ' data={patient.id} />
            <PatientDetailItem label='Nombre: ' data={patient.name} />
            <PatientDetailItem label='Propietario: ' data={patient.caretaker} />
            <PatientDetailItem label='Fecha: ' data={patient.date.toString()} />
            <PatientDetailItem label='Sintomas: ' data={patient.symptoms} />
            <div className='flex justify-between gap-3 mt-10'>
                <button
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'>
                    Editar
                </button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
                    Eliminar
                </button>
            </div>
        </div>
    )
}
