import { SGP40_D_R4 } from "../imports/SGP40_D_R4"

type GroupProps = {
  schX?: number
  schY?: number
}

const AirQuality = (props: GroupProps) => {
  return (
    <group {...props}>
      <capacitor
        pcbX={-3}
        capacitance="1.0uF"
        footprint="0402"
        name="C7"
        schX={-2}
        schY={1.5}
        schRotation={"90deg"}
        connections={{ pin2: "U1.pin1", pin1: "net.GND" }}
      />
      <resistor
        resistance="4.7k"
        footprint="0402"
        name="R7"
        schX={-4}
        schY={2}
        connections={{ pin2: "C7.pin2", pin1: "net.V3_3" }}
      />

      <SGP40_D_R4
        name="U1"
        connections={{
          // VDD: "net.V3_3",
          GND: "net.GND",
          SDA: "net.SDA",
          SCL: "net.SCL",
          // VDDH: "net.V3_3",
          // pin4: "net.GND",
          VDDH: "C2.pin2",
        }}
      />

      <capacitor
        pcbX={-3}
        capacitance="1.0uF"
        footprint="0402"
        name="C2"
        schX={-3}
        schY={-0.5}
        schRotation={"90deg"}
        connections={{ pin2: "net.V3_3", pin1: "net.GND" }}
      />
    </group>
  )
}

export default AirQuality
