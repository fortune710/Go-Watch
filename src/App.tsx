import './App.css'
import { Route, Routes } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/Home';
import { MovieDetailPage } from './pages/Movie';
import { SearchPage } from './pages/SearchPage';
import { TVShowPage } from './pages/TvShow';
import { BottomNavbar } from './components';
import { Suspense, lazy, useEffect } from 'react';
import { Container } from '@mui/material';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { app } from './utils';
import { LoginPage } from './pages/Login';
import { ProfilePage } from './pages/Profile';

const SignUpPage = lazy(() => import('./pages/SignUp').then(m=> ({ default: m.SignUpPage })))

const ComingSoon: React.FC = () => {
  return(
    <>
      <Container sx={{ display:'flex', alignItems: 'center', justifyContent:"center", height: '100vh' }}>
        <h3>Coming Soon</h3>
      </Container>
      <BottomNavbar/>
    </>
  )
}

function App() {
  const auth = getAuth(app);
  const API_KEY = "e77b613c447296755dab014d1426012a";
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/"  element={<LandingPage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/movie/:id" element={<MovieDetailPage/>} />
        <Route path="/show/:id" element={<TVShowPage/>} />
        <Route path="/favourites" element={<ComingSoon/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Suspense>
  )
}

export default App
