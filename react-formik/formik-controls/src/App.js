import logo from './logo.svg';
import './App.css';
import FormikContainer from './components/FormikContainer'
import LoginForm from './components/LoginForm';
import RegistrantionForm from './components/RegistrantionForm';
import EnrollmentForm from './components/EnrollmentForm'

function App() {
  return (
    <div className="App">
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* <RegistrantionForm /> */}
      <EnrollmentForm />
    </div>
  );
}

export default App;
