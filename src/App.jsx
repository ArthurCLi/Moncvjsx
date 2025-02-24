import { createSignal } from "solid-js";
import './App.css'

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
    <div style="background-color: #530fe6;">
        <h1> Experience</h1>
         <i class="fa-brands fa-tiktok"></i>
    </div>
    <div>
        <h1> Education</h1>
        <strong>Good</strong>
    </div>
    <div style="background-color: #f20a0a;">
        <h1> Skills</h1>
        <ul>
          
            <li><p>Roulade en avant</p></li>
            <li>Chanter faux </li>
            <li>Faire le trajet mine-meuh en 2min</li>
            
          </ul>
    </div>
    <div>
        <h1> Language</h1>
        <ol>
            <li>Franais</li>
            <li>Latin (A0)</li>


        </ol>
            
    </div>
    </>
  );
}

export default App;