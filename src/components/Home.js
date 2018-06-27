import React from "react"
import Chart from "./Chart"

const Home = props => {
  return <Chart reportsBySiteName={props.reportsBySiteName} />
}

export default Home
