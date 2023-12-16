import { createServer } from 'miragejs';
import './App.css';
import Main from './pages/Main';

createServer({
  routes() {
    this.get('/api/users', () => [
      {
        id: '1',
        name: 'Luke',
        designation: 'Manager',
        team: 'Team-1',
        level: 1,
        reporter: '',
        //img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '2',
        name: 'Leia',
        designation: 'Engineer',
        team: 'Team-1',
        level: 4,
        reporter: 'Anakin',
        //img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '3',
        name: 'Anakin',
        designation: 'Team Lead',
        team: 'Team-1',
        level: 3,
        reporter: 'Max',
        //img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '4',
        name: 'Max',
        designation: 'Assistant-Manager',
        team: 'Team-1',
        level: 2,
        reporter: 'Luke',
        //img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '5',
        name: 'Mohammad',
        designation: 'Engineer',
        team: 'Team-1',
        level: 4,
        reporter: 'Anakin',
        //img: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '6',
        name: 'John',
        designation: 'Senior Software Engineer',
        team: 'Team-1',
        level: 3,
        reporter: 'Max',
        //img: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '7',
        name: 'Lee',
        designation: 'Manager',
        team: 'Team-2',
        level: 1,
        reporter: '',
        //img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '8',
        name: 'Ali',
        designation: 'Engineer',
        team: 'Team-2',
        level: 2,
        reporter: 'Lee',
        //img: 'https://images.unsplash.com/photo-1622031093531-f4e641788763?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '9',
        name: 'Roy',
        designation: 'Team Lead',
        team: 'Team-2',
        level: 2,
        reporter: 'Lee',
        //img: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]);
  },
});

function App() {
  return (
    <div className='App'>
      <Main />
    </div>
  );
}

export default App;
