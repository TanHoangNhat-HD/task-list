import './App.css';
import '../node_modules/antd/dist/antd.css';
import Todos from 'features/todos/pages/Todos';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
