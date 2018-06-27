import React from "react"
import { Bar } from "react-chartjs-2"
import { Line } from "react-chartjs-2"

const getLabel = data => {
  return Object.keys(data).map(e => {
    return data[e].siteName
  })
}

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

const Chart = props => {
  return (
    <div>
      <Bar
        data={dataFormation(props.reportsBySiteName)}
        width={100}
        height={350}
        options={{
          maintainAspectRatio: false
        }}
      />
      {/* <Line data={dataFormation(props.reportsBySiteName)} /> */}
    </div>
  )
}

export default Chart
