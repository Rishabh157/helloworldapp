import './App.css';

function App() {


  function applyOfOpration(arr, opration) {

    const result = [];

    for (let ele of arr) {
      result.push(opration(ele))
    }

    return result

  }

  const squareArr = applyOfOpration([1, 2, 3, 4, 5], function (x) {
    return x * x
  })


  console.log(squareArr)


  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
    </div>
  );
}

export default App;
