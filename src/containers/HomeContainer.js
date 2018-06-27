import React, { Component } from "react"
import axios from "axios"
import Home from "../components/Home"
import { BASE_URL } from "../config/AppConst"

class HomeContainer extends Component {
  state = {
    reportsBySiteName: {}
  }

  componentDidMount() {
    setInterval(() => this.startPoll(), 2000)
  }

  startPoll = () => {
    axios.get(`${BASE_URL}/report`).then(resp => {
      const reportsBySiteName = this.normalizeBySiteName(resp.data || {})
      this.setState(prevState => {
        return {
          reportsBySiteName
        }
      })
    })
  }

  normalizeBySiteName = data =>
    data.reduce((res, e) => {
      res[e.siteName] = e
      return res
    }, {})

  render() {
    return <Home {...this.state} />
  }
}

export default HomeContainer
