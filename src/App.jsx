import './App.css';
import Charts from './components/Charts/Charts';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import Navbar from './components/Navbar/Navbar';
import EmployeeList from './components/EmployeeTable/Employee';

function App() {
  return (
    <div className="App">
      <Navbar />
      <p className='home'>Home / <u>Report & Insights</u></p>
      <div className='container'>
      <Charts />
      <EmployeeList />
      </div>
    </div>
  );
}

export default App;
