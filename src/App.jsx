import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncDecrementCreator,
  asyncIncrementCreator,
  decrementCreator,
  incrementCreator,
} from './store/countReducer';
import { fetchUsersCreator } from './store/userReducer';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      <div style={{ fontSize: '3rem' }}>{count}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => dispatch(asyncIncrementCreator())}>
          ИНКРЕМЕНТ++
        </button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>
          ДЕКРЕМЕНТ--
        </button>
        <button onClick={() => dispatch(fetchUsersCreator())}>
          ПОЛУЧИТЬ ЮЗЕРОВ
        </button>
      </div>
      {users.length > 0 ? (
        <div>
          {users.map((customer) => (
            <div
              style={{
                fontSize: '2rem',
                border: '1px solid black',
                padding: '10px',
                marginTop: 5,
                cursor: 'pointer',
              }}
              key={customer.id}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: '2rem', marginTop: 20 }}>
          Клиенты отсутствуют.
        </div>
      )}
    </div>
  );
}

export default App;
