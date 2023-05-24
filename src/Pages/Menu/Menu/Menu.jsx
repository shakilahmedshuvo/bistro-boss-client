// react helmet async
import { Helmet } from 'react-helmet-async';

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
            <h2>
                Menu page
            </h2>
        </div>
    );
};

export default Menu;