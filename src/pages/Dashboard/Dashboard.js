import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import axios from 'axios';
import Card from '../../components/Card/Card'
import GreenBtn from "../../components/GreenBtn/GreenBtn";


const yearGroup = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

const Dashboard = ({ }) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
    getUserList()
  }, []);

  const getUserList = async () => {
    const result = await axios(
      'https://api.spaceXdata.com/v3/launches?limit=100',
    );
    setData(result.data);
    setIsLoaded(false)
    console.log(result.data);
  }

  const onYearFilterApply = async (year) => {
    setIsLoaded(true)

    const result = await axios(
      `https://api.spaceXdata.com/v3/launches?launch_year=${year}`,
    );
    setData(result.data);
    setIsLoaded(false)
  }

  const onLaunchFilterApply = async (status) => {
    setIsLoaded(true)
    const result = await axios(
      `https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${status}`
    );
    setData(result.data);
    setIsLoaded(false)

  }

  const onLandFilterApply = async (status) => {
    setIsLoaded(true)
    const result = await axios(
      `https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true&land_success=${status}`,
    );
    setData(result.data);
    setIsLoaded(false)
  }
  return (
    <div className="mainContainer">
      <section className="subContainer">
        <h2 className="title">SpaceX Launch Pograms</h2>
        <section className="dataContainer">
          <aside className="filterBar">
            <div className="sideBar">
              <h2 className="title">Filter</h2>
              <div className="launchYearView">
                <span className="subtitle">
                  Launch Year
                </span>
                <div className="list">
                  {yearGroup.map((year) => {
                    return (<GreenBtn title={year} onClick={() => onYearFilterApply(year)} />)
                  })}


                </div>
              </div>
              <div className="launchView">
                <span className="subtitle">
                  Successful Launch
                  </span>
                <div className="list">
                  <GreenBtn title="True" onClick={() => onLaunchFilterApply(true)} />
                  <GreenBtn title="False" onClick={() => onLaunchFilterApply(false)} />
                </div>
              </div>
              <div className="landingView">
                <span className="subtitle">
                  Successful Landing
                  </span>
                <div className="list">
                  <GreenBtn title="True" onClick={() => onLandFilterApply(true)} />
                  <GreenBtn title="False" onClick={() => onLandFilterApply(false)} />
                </div>
              </div>
            </div>
          </aside>
          <section className="cardContainer">
            {data.map((item) => {
              return (
                <Card item={item} />
              )
            })}


            {isLoaded && <div className="loader">
              <div className="spinner">
                <div></div>
                <div></div>
              </div>
            </div>}
          </section>
        </section>

      </section>
    </div>
  )
}

export default Dashboard;