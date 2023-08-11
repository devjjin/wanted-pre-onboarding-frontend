import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';

function RootComponent() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route
              path="/signup"
              element={accessToken ? <Navigate to="/todo" /> : <SignUp />}
            />
            <Route
              path="/signin"
              element={accessToken ? <Navigate to="/todo" /> : <SignIn />}
            />
            <Route path="/todo" element={<Todo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
