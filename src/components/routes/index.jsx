import Home from "../view/pages/Home";
import Aboutus from "../view/pages/about-us";
let urlpath = "/reactjs-git/"

const routes = [
    {
        path : `${urlpath}`,
        component : Home,
        exact: true
    },
    {
        path : `${urlpath}about-us`,
        component: Aboutus,
    }
]

export default routes;