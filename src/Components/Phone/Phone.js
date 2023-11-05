import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import './Phone.css'

const Phone = () => {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState({
        labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
        datasets: [
            {
                label: 'money',
                data: [10, 20, 50, 35, 43, 60],
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
                setTimeout(updateCounter, 10);
            }
        };
        updateCounter();
    }, [counter]);

    useEffect(() => {
        setData((prevData) => ({
          labels: [...prevData.labels, ''],
          datasets: [
            {
              label: 'Money',
              data: [...prevData.datasets[0].data, counter],
              fill: false,
              borderColor: 'blue',
              tension: 0.4,
            },
          ],
        }));
      }, [counter]);
  return (
    <div className='phone-interface'>
        <div className="counter">${counter.toFixed(2)}</div>
        <div className="graph">
            <Line data={data} options={{ maintainAspectRatio: false }} />
        </div>  
    </div>
  );
};

export default Phone
