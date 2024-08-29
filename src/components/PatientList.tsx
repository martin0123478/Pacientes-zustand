import { usePatientStore } from "../store"
import { PatiensDetail } from "./PatiensDetail"


export const PatientList = () => {
    const patient = usePatientStore(state => state.patient)

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {
                patient.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {''}
                            <span className="text-indigo-600 font-bold">citas</span>
                        </p>
                        {
                            patient.map(patient => (
                                <PatiensDetail
                                    key={patient.id}
                                    patient={patient} />
                            ))
                        }
                    </>
                ) :
                    <>
                        <h2 className="font-black text-3xl text-center"> No hay Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando Pacientes {''}
                            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                        </p>
                    </>
            }

        </div>
    )
}
