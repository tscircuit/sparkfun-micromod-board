import Connector from "./Connector"

type GroupProps = {
  schX?: number
  schY?: number
}

const FunctionConnector = (props: GroupProps) => {
  return (
    <group {...props}>
      <Connector
        name="J1"
        connections={{
          pin72: "net.VCC",
          pin71: "net.EN",
          pin21: "net.SCL",
          pin19: "net.SDA",
        }}
      />

      <chip
        name="U2"
        footprint="soic8"
        pinLabels={{
          pin1: "A0",
          pin2: "A1",
          pin3: "A2",
          pin4: "GND",
          pin5: "SDA",
          pin6: "SCL",
          pin7: "WP",
          pin8: "VCC",
        }}
        schX={-4}
        schY={-1}
        connections={{
          pin1: "J1.pin36",
          pin2: "J1.pin34",
          pin3: "J1.pin32",
          pin4: "J1.pin1",
          pin5: "net.SDA",
          pin6: "net.SCL",
          pin7: "net.GND",
          pin8: "net.V3_3",
        }}
        schPinArrangement={{
          leftSide: {
            pins: ["pin8", "pin7", "pin6", "pin5"],
            direction: "top-to-bottom",
          },
          rightSide: {
            pins: ["pin1", "pin2", "pin3", "pin4"],
            direction: "top-to-bottom",
          },
        }}
      />
    </group>
  )
}

export default FunctionConnector
