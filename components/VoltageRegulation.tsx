import { AP2112K_3_3TRG1 } from "../imports/AP2112K_3_3TRG1"

const VoltageRegulation = () => {
  return (
    <group>
      <resistor
        pcbX={-3}
        resistance="100k"
        footprint="0402"
        name="R12"
        schX={-4}
        schRotation={"90deg"}
        connections={{ pin1: "U4.EN", pin2: "net.VCC" }}
      />
      <capacitor
        pcbX={-3}
        capacitance="1.0uF"
        footprint="0402"
        name="C6"
        schX={-3}
        schRotation={"90deg"}
        connections={{ pin1: "U4.GND", pin2: "net.VCC" }}
      />
      <netlabel net="EN" schX={-5} anchorSide="right" connectsTo={"R12.pin1"} />

      <capacitor
        pcbX={-3}
        capacitance="1.0uF"
        footprint="0402"
        name="C5"
        schX={3}
        schRotation={"90deg"}
        connections={{ pin1: "U4.VOUT", pin2: "net.VCC" }}
      />

      <AP2112K_3_3TRG1
        connections={{
          VIN: "net.VCC",
        }}
        name="U4"
        schX={0}
      />
    </group>
  )
}

export default VoltageRegulation
