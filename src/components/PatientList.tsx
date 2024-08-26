import { usePatientStore } from "../store"


export const PatientList = () => {
    const patient = usePatientStore(state => state.patient)
    console.log(patient)
    return (
        <div>PatientList</div>
    )
}
