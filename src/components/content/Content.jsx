import Card from "./cards/Card";
import Header from "./header/Header";
import Menu from "./menus/Menu";
import Sidenav from "./sideNav/Side-menu";

const Content = () => {
    return (
        <>
        <main className="flex">
            <nav>
                <Sidenav />
            </nav>
            <div className="content">
                <Header />
                <Card />
                <Menu />
            </div>
        </main>
        </>
    )
}

export default Content;