import Home from "../view/pages/Home";
import Aboutus from "../view/pages/about-us";
import MyGoogleMap from "../view/pages/MyGoogleMap";
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
    },
    {
        path : `${urlpath}google-map`,
        component: MyGoogleMap,
    }
]

export default routes;