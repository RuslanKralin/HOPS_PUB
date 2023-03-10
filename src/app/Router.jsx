import { Home, Menu, Restaurant, NotFound, Brewery,Contacts  } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'shared/consts/routes';

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.MENU} element={<Menu />} />
            <Route path={ROUTES.RESTAURANT} element={<Restaurant />} />
            <Route path={ROUTES.BREWERY} element={<Brewery />} />
            <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
            <Route path={ROUTES.CONTACTS} element={<Contacts />} />
       </Routes>
    )
}

export default Router 