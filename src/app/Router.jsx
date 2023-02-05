import { Home, Menu, Restaurant, NotFound } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'shared/consts/routes';

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.MENU} element={<Menu />} />
            <Route path={ROUTES.RESTAURANT} element={<Restaurant />} />
            <Route path={ROUTES.NOTFOUND} element={<NotFound />} />

       </Routes>
    )
}

export default Router 