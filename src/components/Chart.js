import React from "react"
import { Bar } from "react-chartjs-2"

const getLabel = data => Object.keys(data).map(e => data[e].siteName)

const dataFormation = reportsBySiteName => {
  const labels = getLabel(reportsBySiteName)
  const datasets = [
    {
      label: "Report Dataset",
      backgroundColor: "rgb(90, 103, 174)",
      borderColor: "rgb(90, 103, 174)",
      borderWidth: 1,
      hoverBackgroundColor: "rgb(109, 185, 227)",
      hoverBorderColor: "rgb(109, 185, 227)",
      data: labels.map(e => reportsBySiteName[e].total)
    }
  ]

  return { labels, datasets }
}

const Chart = props => (
  <div>
    <Bar
      data={dataFormation(props.reportsBySiteName)}
      width={100}
      height={650}
      options={{
        maintainAspectRatio: false
      }}
    />
  </div>
)

export default Chart
