import React from 'react'
import { Line } from 'react-chartjs-2'

const Phone = () => {
    const [counter, setCounter] = useState(0);
    const [date, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'money',
                data: [],
                fill: false,
                borderColor: 'blue',
                tension: 0.4,
            },
        ],
    });
    useEffect(() => {
        const updateCounter = () => {
            if (counter < 299987) {
                setCounter(counter + 1);
            }
        }

    })
  return (
    <div>
      
    </div>
  )
}

export default Phone
