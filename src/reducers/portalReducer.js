
export const portalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            // console.log(action);
            const adding = {
                name: action.name,
                id: action.name + state.patients.length
            }
            const newPatients = [...state.patients, adding]
            return {
                ...state,
                patients: newPatients
            }
            break;

        case 'REMOVE_PATIENT':
            // console.log(action);
            const removed = state.patients.filter(patient => patient.id !== action.id);
            return {
                ...state,
                patients: removed
            }
            break;

        default:
            return state;
            break;
    }
} 