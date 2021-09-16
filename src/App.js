import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <div className="App" style={{height: '100%'}}>
      <Layout>
          <Quiz />
      </Layout>
    </div>
  );
}

export default App;
