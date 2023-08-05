
import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Dashboard />
      <Table />
    </div>
  );
}

export default App;
