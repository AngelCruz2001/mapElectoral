import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Casilla } from '../interfaces/MarkersInterfaces';
export const getCasillas = async () => {
    const casillasCol = collection(db, 'casillas');
    const cassSnapshot = await getDocs(query(casillasCol, orderBy('PORC_MC', 'desc')));
    const cassList: Casilla[] = cassSnapshot.docs.map(doc => doc.data() as Casilla);
    console.log(cassList.length);
    console.log(cassList);
    return cassList;
}
