import { SHTC3_TR_2_5KS } from "../imports/SHTC3_TR_2_5KS"

type GroupProps = {
  schX?: number
  schY?: number
}

const HumiditySensor = (props: GroupProps) => {
  return (
    <group {...props}>
      <SHTC3_TR_2_5KS
        name="U3"
        connections={{
          VDD: "net.V3_3",
          SCL: "net.SCL",
          SDA: "net.SDA",
          VSS: "net.GND",
        }}
      />

      <capacitor
        capacitance="0.1uF"
        footprint="0402"
        name="C3"
        schX={-4}
        schRotation={"90deg"}
        connections={{ pin2: "net.V3_3", pin1: "net.GND" }}
      />
    </group>
  )
}

export default HumiditySensor
