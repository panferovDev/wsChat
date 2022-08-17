import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import AppNavBAr from './components/AppNavBar/AppNavBar';
import NotFoungPage from './components/NotFoundPage/NotFoundPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { socketInit } from './Redux/actions/wsActions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // инициализация ws
    if (user.id) {
      dispatch(socketInit());
    }
  }, [user]);

  return (
    <Container>
      <AppNavBAr />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFoungPage />} />
      </Routes>
    </Container>
  );
}

export default App;
