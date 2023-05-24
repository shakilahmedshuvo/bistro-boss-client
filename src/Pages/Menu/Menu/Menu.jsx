// react helmet async
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
// import menuImg from '../../../assets/menu/menu-bg.png';
import menuImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
    return (
        <div>
            {/* using helmet async start */}
            <Helmet>
                <title>
                    BISTRO BOSS | MENU
                </title>
            </Helmet>
            {/* using helmet async end */}
            {/* cover img */}
            <Cover
                img={menuImg}
                title={"Our Menu"}
            ></Cover>
            
        </div>
    );
};

export default Menu;