import { useState } from "react";
import orderCoverImg from "../../../assets/shop/order.jpg"
import Cover from "../../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    //    get the initialIndex of
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    // get the value for each sections
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div className="font-bold">
            {/* use helmet */}
            {/* using helmet async start */}
            <Helmet>
                <title>
                    BISTRO BOSS | Order Food
                </title>
            </Helmet>
            <Cover
                img={orderCoverImg}
                title={"Order Food"}
            ></Cover>
            {/* tab section */}
            <div className="max-w-6xl text-center mx-auto">
                <Tabs
                    defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>
                            Salad
                        </Tab>

                        <Tab>
                            Pizza
                        </Tab>

                        <Tab>
                            Soup
                        </Tab>

                        <Tab>
                            Dessert
                        </Tab>

                        <Tab>
                            Drinks
                        </Tab>

                    </TabList>
                    {/* tab body section */}
                    <TabPanel>
                        <OrderTab
                            items={salad}
                        ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab
                            items={pizza}
                        ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab
                            items={soup}
                        ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab
                            items={desserts}
                        ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab
                            items={drinks}
                        ></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div >
    );
};

export default Order;