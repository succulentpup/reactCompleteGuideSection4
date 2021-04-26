import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2021, 3, 24),
      amount: 299.83,
      title:  'Car Insurance',
    },
    {
      id: 'e2',
      date: new Date(2021, 3, 24),
      amount: 59.83,
      title:  'TV Insurance',
    },
    {
      id: 'e3',
      date: new Date(2021, 3, 24),
      amount: 99.83,
      title:  'Mobile Insurance',
    },
    {
      id: 'e4',
      date: new Date(2021, 3, 24),
      amount: 99.83,
      title:  'Laptop Insurance',
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        <Expenses expenses={expenses}/>
      </div>
    </div>
  );
}

export default App;
