import Home from "./pages/Home"
import Events from "./pages/Events"
import Event from "./pages/Event"

export default function PageRoutes() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route index element={<Home />}/>
                <Route path="hjem" element={<Home />}/>
                <Route path="events">
                    <Route index element={<Events />}/>
                    <Route path=":slug" element={<Event />}/>
                </Route>

                
            </Routes>
            <Footer />
        </>
    )
}