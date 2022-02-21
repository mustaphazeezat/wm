import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import { EmployeeProvider } from "./context/EmployeeContext";
import AddEmployee from "./pages/AddEmployee";
import Employees from "./pages/Employees";



function App() {
  return (
    <EmployeeProvider>
       <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Employees />} />
          <Route exact path="/add-employee" element={<AddEmployee />} />

        </Routes>
    </Router>
    </EmployeeProvider>
  );
}

export default App;
