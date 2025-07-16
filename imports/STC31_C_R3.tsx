import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VSS1"],
  pin2: ["NC1"],
  pin3: ["ADDR"],
  pin4: ["SCL"],
  pin5: ["VSS2"],
  pin6: ["VDD"],
  pin7: ["SDA"],
  pin8: ["NC2"],
  pin9: ["VSS3"],
  pin10: ["NC3"],
  pin11: ["VSS4"],
  pin12: ["NC4"],
  pin13: ["EPAD"],
} as const

export const STC31_C_R3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C22396918"],
      }}
      schPinStyle={{
        pin7: {
          marginTop: 0.2,
        },
      }}
      schPinArrangement={{
        leftSide: {
          pins: ["pin6", "pin3", "pin1"],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: ["pin4", "pin7"],
          direction: "top-to-bottom",
        },
      }}
      manufacturerPartNumber="STC31_C_R3"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.8001000000000005mm"
            pcbY="-1.4175740000000019mm"
            width="0.38569899999999996mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="-1.4175740000000019mm"
            width="0.38569899999999996mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.8001000000000005mm"
            pcbY="-1.4175740000000019mm"
            width="0.38569899999999996mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.6675100000000072mm"
            pcbY="-0.8001000000000147mm"
            width="0.5849874mm"
            height="0.38569899999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.6675100000000072mm"
            pcbY="-1.4210854715202004e-14mm"
            width="0.5849874mm"
            height="0.38569899999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.6675100000000072mm"
            pcbY="0.8000999999999863mm"
            width="0.5849874mm"
            height="0.38569899999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.8001000000000005mm"
            pcbY="1.4175739999999877mm"
            width="0.38569899999999996mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="1.4175739999999877mm"
            width="0.38569899999999996mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.8001000000000005mm"
            pcbY="1.4175739999999877mm"
            width="0.38569899999999996mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.667509999999993mm"
            pcbY="0.8000999999999863mm"
            width="0.5849874mm"
            height="0.38569899999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.667509999999993mm"
            pcbY="-1.4210854715202004e-14mm"
            width="0.5849874mm"
            height="0.38569899999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.667509999999993mm"
            pcbY="-0.8001000000000147mm"
            width="0.5849874mm"
            height="0.38569899999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0mm"
            pcbY="-1.4210854715202004e-14mm"
            width="2.2999954mm"
            height="1.7999964mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.1451589999999925, y: -1.576273200000017 },
              { x: -1.8261076000000003, y: -1.576273200000017 },
              { x: -1.8261076000000003, y: -1.1453114000000113 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1451589999999925, y: 1.576120799999984 },
              { x: -1.8261076000000003, y: 1.576120799999984 },
              { x: -1.8261076000000003, y: 1.1451843999999767 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1453368000000097, y: 1.576120799999984 },
              { x: 1.826285399999989, y: 1.576120799999984 },
              { x: 1.826285399999989, y: 1.1451843999999767 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1453368000000097, y: -1.576273200000017 },
              { x: 1.826285399999989, y: -1.576273200000017 },
              { x: 1.826285399999989, y: -1.1453114000000113 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=81be6d0044f74aa08902af37c04cb07c&pn=C22396918",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
