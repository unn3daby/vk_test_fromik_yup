import './App.css';
import {useState, useEffect} from 'react';
const App = () => {
    const [value, setValue] = useState('Choose');
    const [valute, setValute] = useState([]);

    const changeValue = (current) => {
        valute.forEach(element => {
            if(element.CharCode === current) {
                setValue(element.Value);
            }
        });
    }
    
    const getRatio = async () => {
        const data = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`);
        const jsonData = await data.json();
        const {USD, UAH, EUR} = jsonData.Valute;
        return [USD, UAH, EUR];
    }

    useEffect(() => {
    (async function() {
        const valutes = await getRatio();
        setValute(valute => valute = [...valutes]);
    })()
    },[]);

    return (
        <>
            <div className="screen">
                <div>
                    {value}
                </div>
            </div>
            <form className="input-container">
                <button onClick = {() => changeValue('USD')} className="invite-btn" type="button">
                    USD
                </button>
                <button onClick = {() => changeValue('UAH')} className="invite-btn" type="button">
                    UAH
                </button>
                <button onClick = {() => changeValue('EUR')} className="invite-btn" type="button">
                    EUR
                </button>
            </form>
        </>
    );
}
    
   
 export default App;
  
