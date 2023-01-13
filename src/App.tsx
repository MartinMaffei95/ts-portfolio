import { useState } from 'react';
import { Header } from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-500">
      <Header />
    </div>
  );
}

export default App;
