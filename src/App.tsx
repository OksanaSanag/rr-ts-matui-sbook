import ErrorBoundary from './ErrorBoundary';
import Main from './Main';

const App = () => {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  )
}

export default App;
