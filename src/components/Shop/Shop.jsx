import React, { useEffect, useState } from "react";
import ShopCard from "../ShopCard/ShopCard";
import { useNavigate, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Shop = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6)
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  const [tabIndex, setTabIndex] = useState(0);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:5000/all-toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  console.log(toys);

  const regular = toys.filter((toy) => toy.Category === "Regular");
  const sports = toys.filter((toy) => toy.Category === "Sports");
  const police = toys.filter((toy) => toy.Category === "Police");

  const lastPostIndex = currentPage + postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = toys.slice(firstPostIndex, lastPostIndex) 



  return (
    <div className="w-full bg-white">
      <div className="container mx-auto md:p-10 font-serif">
        <h1 className="heading">Shop by category</h1>
        <div className="m-8">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className=" border-[1px] font-serif text-sm border-[#DF437E]">
              <Tab>All Toys</Tab>
              <Tab>Category One</Tab>
              <Tab>Category Two</Tab>
              <Tab>Category Three</Tab>
            </TabList>
            <TabPanel>
              <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {toys.map((toy) => (
                  <ShopCard key={toy._id} toy={toy}></ShopCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {regular.map((toy) => (
                  <ShopCard key={toy._id} toy={toy}></ShopCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {police.map((toy) => (
                  <ShopCard key={toy._id} toy={toy}></ShopCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {sports.map((toy) => (
                  <ShopCard key={toy._id} toy={toy}></ShopCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      
    </div>
  );
};

export default Shop;
