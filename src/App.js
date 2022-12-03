import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { Timer } from "./components/Settimer";
import { QuizContextProvider } from "./context/QuizContext";
// import { LoginForm } from './components';

function App() {
  return (
    <div className="App">
      <QuizContextProvider>
        <Header/>
        <Quiz />
      </QuizContextProvider>
    </div>
  );
}

export default App;
