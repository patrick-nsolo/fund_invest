import React, { useState } from 'react';
import './Risktolerance.css'

const Risktolerance = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('dollars');
    const [amount, setAmount] = useState('');

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <div className='rt'>
        <div className='exchange-rates'>
            <div className='exchange-rates-text'>
                <h2>Latest Currencies</h2>
                <h3>We offer CBN rates</h3>
            </div>
            <hr/>
            <div className='rates'>
                <ul>
                    <li>
                        <span className='currency'>USD</span> 
                        <span>783.174</span>
                    </li>
                    <li>
                        <span className='currency'>GBP</span> 
                        <span>965.8102</span>
                    </li>
                    <li>
                        <span className='currency'>EUR</span> 
                        <span>838.3221</span>
                    </li>
                </ul>
            </div>
            <div className='rates'>
                <ul>
                    <li><span className='currency'>CHF</span> 870</li>
                    <li className='yen'><span className='currency'>YEN</span> 5.2351</li>
                </ul>
            </div>
        </div>
        <div className='currency-converter'>
            <h2>Convert currency</h2>
            <h3>Quickly convert any major currency to NGN</h3>
            <div>
                <form onSubmit={handleSubmit}>
                <div>
                <label>Currency:</label>
                <select value={selectedCurrency} onChange={handleCurrencyChange}>
                    <option value="USD">Dollars</option>
                    <option value="GBP">Pounds</option>
                    <option value="YEN">Yen</option>
                </select>
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                />
                </div>
                <button type="submit">Convert</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Risktolerance;
