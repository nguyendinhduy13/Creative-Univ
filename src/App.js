
import './App.css';
import Introduce from './Components/Introduce/introduce';
import Problems from './Components/Problems/problems';
import Special from './Components/Special/special';
import StepCard from './Card/StepCard';
function App() {
  return (
   <div className="h-screen overflow-auto py-4 px-8 ">
    <Introduce/>
    <Problems/>
    <Special/>
    <div className="grid grid-cols-2 gap-4">
       <StepCard/>
    </div>
   
   </div>
  )
}
export default App;
