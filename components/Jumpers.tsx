type GroupProps = {
  schX?: number
  schY?: number
}

const Jumper = (props: GroupProps) => (
  <group {...props}>
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12"
      pinCount={3}
      schRotation={"180deg"}
      bridged
      connections={{
        pin2: "net.V3_3",
      }}
    />

    <resistor
      resistance="2.2k"
      footprint="0402"
      name="R2"
      schX={1}
      schY={-1}
      schRotation={"-90deg"}
      connections={{
        pin1: "JP1.pin1",
        pin2: "net.SDA",
      }}
    />

    <resistor
      resistance="2.2k"
      footprint="0402"
      name="R1"
      schX={-1}
      schY={-1}
      schRotation={"-90deg"}
      connections={{
        pin1: "JP1.pin3",
        pin2: "net.SCL",
      }}
    />
  </group>
)

const Jumper2 = (props: GroupProps) => (
  <group {...props}>
    <solderjumper
      name="PWR"
      footprint="solderjumper2_bridged12"
      pinCount={2}
      // schX={2}
      bridgedPins={[["1", "2"]]}
      connections={{
        pin1: "net.V3_3",
      }}
    />

    <resistor
      resistance="1k"
      footprint="0402"
      name="R3"
      schX={1}
      // schRotation={"90deg"}
      connections={{
        pin1: "PWR.pin2",
        // pin2: "net.GND",
      }}
    />

    <led
      name="LED1"
      color="red"
      footprint="0402"
      schX={2}
      connections={{
        pin1: "R3.pin2",
        pin2: "net.GND",
      }}
    />
  </group>
)

export const Jumpers = (props: GroupProps) => (
  <group {...props}>
    <Jumper schX={2} schY={0} />
    <Jumper2 schX={1} schY={2} />
  </group>
)

export default Jumpers
