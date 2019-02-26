/** @jsx jsx */
import React from "react"
import { jsx, css, keyframes } from "@emotion/core"
import { black } from "ansi-colors"

const pulse = keyframes`
  0% {
    background-color: #657682
  }

  50% {
    background-color: #ADC0CE
  }

  0% {
    background-color: #657682
  }
`

const Box = ({ text, width = "auto", pulseSpeed }) => (
  <div
    css={{
      backgroundColor: "#657682",
      color: "#fff",
      flex: `1 1 ${width}`,
      margin: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "30px",
      textShadow: "1px 1px 2px black",
      animation: pulseSpeed
        ? `${pulse} ${pulseSpeed}ms ease infinite`
        : undefined
    }}
  >
    {text}
  </div>
)

const getSpeedMs = ({ isFlashing, isRandom }) => {
  if (!isFlashing) {
    return 0
  }

  const max = 1000
  const min = 100

  if (isRandom) {
    return Math.random() * (max - min) + min
  }

  return 300
}

const InterfaceDemo = props => (
  <div
    css={{
      backgroundColor: "#2E2E2E",
      width: "90%",
      margin: "0 auto",
      height: "700px",
      display: "flex",
      flexDirection: "column",
      padding: "5px"
    }}
  >
    <div css={{ display: "flex", flex: "1 1 45%" }}>
      <div css={{ display: "flex", flexDirection: "column", flex: "1 1 50%" }}>
        <Box text="wss://instrument-data" pulseSpeed={getSpeedMs(props)} />
        <Box text="wss://market-conditions" pulseSpeed={getSpeedMs(props)} />
      </div>
      <Box text="wss://chart-data" pulseSpeed={getSpeedMs(props)} />
    </div>
    <div css={{ display: "flex", flex: "1 1 auto" }}>
      <Box text="wss://orders" pulseSpeed={getSpeedMs(props)} />
      <Box width="60%" text="wss://valuations" pulseSpeed={getSpeedMs(props)} />
    </div>
  </div>
)

export default InterfaceDemo
