import './App.css';
import ReviewControl from './ReviewControl'
import Header from './Header'
import EmojiBar from './EmojiBar'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <div className="container align-items-center justify-content-center text-center">
        <Header />
        <EmojiBar />
        <ReviewControl />
      </div>
    </>
  );
}

export default App;
