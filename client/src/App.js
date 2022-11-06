import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Account, Home, Register, SignIn } from './pages';
import RequireAuth from './utils/RequireAuth';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/sign-in' element={<SignIn />} />

                    <Route element={<RequireAuth />}>
                        <Route path='/account' element={<Account />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
