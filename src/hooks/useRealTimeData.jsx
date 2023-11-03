import { getPacientsCurp } from '../controllers/pacientFromCuidador.js';
import { getRealtimeData } from '../controllers/realtime.controller.js';
import { useAuth } from '../context/authContext'

const useRealTimeData = () => {
    const uid = "cTbehnPYRDWps4L2VjAcaSyO6K52"//test

    const { user } = useAuth()

    const [data, setData] = useState(null)

    useEffect(() => {
      getPacientsCurp(user.uid).then((curps) => { curps.map((pacienteID) => {
            getRealtimeData(uid + pacienteID).then((data) => {
                setData(data)
              }).catch((error) => {
                console.error('Error al obtener datos en TR', error)
              })
          })
        }).catch((error) => {
          console.error('Error al obtener CURPs', error)
        })
    }, [])
    return {data}
}
export default useRealTimeData