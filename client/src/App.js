import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Register, SignIn } from './pages';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/sign-in' element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
