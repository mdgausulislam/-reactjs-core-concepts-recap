import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Dhaka" special="Capital"> </District>
      <District name="Barisal" special="Political"> </District>
      <District name="Patuakhali" special="River"> </District>
      
    </div>
  );
}
const districtStyle={
  backgroundColor:'yellow',
  padding:"20px",
  margin:"20px",
  borderRadius:"30px"
}
function District(props){
  console.log(props);
  return(
    <div className='district' style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Specialty:{props.special} </p>
    </div>
  )
}

export default App;
