// import { Personal } from './components/personal/personal';
// import { Education } from './components/education/education';
// import { Knownlang } from './components/knownlang/knownlang';
// import { UseStateFunction } from './components/usestatefunction/usestatefunction';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

</Routes>
  </Router>
      
      
    
    {/* <Personal />
    <Education />
    <Knownlang/>
    <UseStateFunction /> */}
    
    
    </div>

    
    </>
  );
}

export default App;
