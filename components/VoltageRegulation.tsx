import { AP2112K_3_3TRG1 } from "../imports/AP2112K_3_3TRG1"

type GroupProps = {
  schX?: number
  schY?: number
}

const VoltageRegulation = (props: GroupProps) => {
  return (
    <group {...props}>
      <resistor
        resistance="100k"
        footprint="0402"
        name="R12"
        schX={-4}
        schRotation={"90deg"}
        connections={{ pin1: "U4.EN", pin2: "net.VCC" }}
      />
      <capacitor
        capacitance="1.0uF"
        footprint="0402"
        name="C6"
        schX={-3}
        schRotation={"90deg"}
        connections={{ pin1: "U4.GND", pin2: "net.VCC" }}
      />
      <netlabel net="EN" schX={-5} anchorSide="right" connectsTo={"R12.pin1"} />

      <capacitor
        capacitance="1.0uF"
        footprint="0402"
        name="C5"
        schX={3}
        schRotation={"90deg"}
        connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      />

      <AP2112K_3_3TRG1
        connections={{
          VIN: "net.VCC",
          VOUT: "C5.pin2",
        }}
        name="U4"
        schX={0}
      />
    </group>
  )
}

export default VoltageRegulation
