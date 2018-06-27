import React, { Fragment } from "react"
import Chart from "./Chart"

const Home = props => (
  <Fragment>
    <h1 style={{ textAlign: "center", color: "grey" }}> IX Hackathon 2018 </h1>
    <Chart reportsBySiteName={props.reportsBySiteName} />
  </Fragment>
)

export default Home
