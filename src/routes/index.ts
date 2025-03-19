import { LayoutHeader } from "@/components/Layouts"
import Following from "@/page/Following"
import Home from "@/page/Home"
import Profile from "@/page/Profile"
import Search from "@/page/Search"
import Upload from "@/page/Upload"
import { Fragment } from "react/jsx-runtime"

const publicRouter = [
    { path: "/", component: Home },
    { path: "/follower", component: Following },
    { path: "/upload", component: Upload, layout: LayoutHeader },
    { path: "/search", component: Search, layout: Fragment },
    { path: "/profile", component: Profile, layout: Fragment }
]
const privateRouter = [

]
export { publicRouter, privateRouter }