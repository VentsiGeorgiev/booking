import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Account, Home, Register, SignIn } from './pages';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/account' element={<Account />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
