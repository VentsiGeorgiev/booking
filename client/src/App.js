import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Personal, Preferences } from './components';
import { Account, Home, Register, SignIn, AccountSettingsLayout } from './pages';
import RequireAuth from './utils/RequireAuth';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='register' element={<Register />} />
                    <Route path='sign-in' element={<SignIn />} />

                    <Route element={<RequireAuth />}>
                        <Route path='mysettings' element={<Account />} />


                        <Route path='mysettings' element={<AccountSettingsLayout />} >
                            <Route path='personal' element={<Personal />} />
                            <Route path='preferences' element={<Preferences />} />
                        </Route>

                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
