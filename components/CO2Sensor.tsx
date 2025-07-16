import { STC31_C_R3 } from "../imports/STC31_C_R3"

type GroupProps = {
  schX?: number
  schY?: number
}

const CO2Sensor = (props: GroupProps) => {
  return (
    <group {...props}>
      <STC31_C_R3
        name="U5"
        connections={{
          VDD: "net.V3_3",
          SCL: "net.SCL",
          SDA: "net.SDA",
          VSS1: "net.GND",
          ADDR: "net.ADDR",
        }}
      />

      <capacitor
        pcbX={-3}
        capacitance="0.1uF"
        footprint="0402"
        name="C4"
        schX={-4}
        schRotation={"90deg"}
        connections={{ pin2: "net.V3_3", pin1: "net.GND" }}
      />

      <group schX={4} schY={0}>
        <resistor
          resistance="1k"
          footprint="0402"
          name="R4"
          schX={0}
          connections={{
            pin2: "J_0X2A.pin1",
            pin1: "net.V3_3",
          }}
        />

        <solderjumper
          name="J_0X2A"
          footprint="solderjumper2_bridged12"
          pinCount={2}
          schX={1.4}
          bridgedPins={[["1", "2"]]}
          connections={{
            pin2: "net.ADDR",
          }}
        />

        <resistor
          resistance="1k"
          footprint="0402"
          name="R5"
          schX={0}
          schY={-1}
          connections={{
            pin2: "J_0X2B.pin1",
            pin1: "R4.pin1",
          }}
        />

        <solderjumper
          name="J_0X2B"
          footprint="solderjumper2_bridged12"
          pinCount={2}
          schX={1.4}
          schY={-1}
          bridgedPins={[["1", "2"]]}
          connections={{
            pin2: "J_0X2A.pin2",
          }}
        />

        <resistor
          resistance="1k"
          footprint="0402"
          name="R6"
          schX={0}
          schY={-2}
          // schRotation={"90deg"}
          connections={{
            pin2: "J_0X2C.pin1",
            pin1: "R5.pin1",
          }}
        />

        <solderjumper
          name="J_0X2C"
          footprint="solderjumper2_bridged12"
          pinCount={2}
          schX={1.4}
          schY={-2}
          bridgedPins={[["1", "2"]]}
          connections={{
            pin2: "J_0X2B.pin2",
          }}
        />
      </group>
    </group>
  )
}

export default CO2Sensor
