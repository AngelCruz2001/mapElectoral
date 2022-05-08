import { Home } from '../screens/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

export const AppRouter = () => {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}


