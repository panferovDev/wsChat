import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import AppNavBAr from './components/AppNavBar/AppNavBar';
import ChatPage from './components/ChatPage/ChatPage';
import NotFoungPage from './components/NotFoundPage/NotFoundPage';
import AuthProtect from './components/RoutesProtect/AuthProtect';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { userCheck } from './Redux/actions/userActions';
import { socketInit } from './Redux/actions/wsActions';
import './components/styles.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // инициализация ws
    if (user.id) {
      dispatch(socketInit());
    }
  }, [user]);

  useEffect(() => {
    dispatch(userCheck());
  }, []);

  return (
    <Container>
      <AppNavBAr />
      <Routes>
        <Route
          path="/signin"
          element={(
            <AuthProtect>
              <SignIn />
            </AuthProtect>
        )}
        />
        <Route
          path="/signup"
          element={(
            <AuthProtect>
              <SignUp />
            </AuthProtect>
      )}
        />
        <Route path="/" element={<ChatPage />} />
        <Route path="*" element={<NotFoungPage />} />
      </Routes>
    </Container>
  );
}

export default App;
