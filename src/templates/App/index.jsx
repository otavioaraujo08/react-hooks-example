import './styles.css';

import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import CounterProvider from '../../contexts/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div className="App">
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
