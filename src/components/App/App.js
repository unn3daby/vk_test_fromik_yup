import './app.scss';
import CustomForm from '../Form/Form';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import logo from '../../img/logo.svg'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <div className="app">
          <img src={logo} alt="логотип 'Вконтакте'" className='logo'/>
          <CustomForm/>
      </div>
    </LocalizationProvider>
  );
}

export default App;
