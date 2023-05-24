import { useState } from "react";
import orderCoverImg from "../../../assets/shop/order.jpg"
import Cover from "../../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    // load the data
    const [menu] = useMenu();

    const { category } = useParams();

    // get the value for each sections
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div className="font-bold">
            <Cover
                img={orderCoverImg}
                title={"Order Food"}
            ></Cover>
            {/* tab section */}
            <div className="max-w-6xl mx-auto">
                <Tabs
                    defaultIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}>
                    <div className="mx-auto text-center mt-10">
                        <TabList>
                            <Tab>
                                SALAD
                            </Tab>

                            <Tab>PIZZA
                            </Tab>

                            <Tab>
                                SOUPS
                            </Tab>

                            <Tab>
                                DESSERTS
                            </Tab>

                            <Tab>DRINKS
                            </Tab>

                        </TabList>
                    </div>
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