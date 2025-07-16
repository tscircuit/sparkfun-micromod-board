import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["SCL"],
  pin3: ["SDA"],
  pin4: ["VSS"],
  pin5: ["VSS"],
} as const

export const SHTC3_TR_2_5KS = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C194656"],
      }}
      manufacturerPartNumber="SHTC3_TR_2_5KS"
      internallyConnectedPins={[["pin4", "pin5"]]}
      schPinArrangement={{
        leftSide: { pins: ["pin1", "pin4"], direction: "top-to-bottom" },
        rightSide: { pins: ["pin3", "pin2"], direction: "bottom-to-top" },
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.4998720000000958mm"
            pcbY="-1.040002999999956mm"
            width="0.48999139999999997mm"
            height="0.8299958mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.5001260000000229mm"
            pcbY="-1.040002999999956mm"
            width="0.48999139999999997mm"
            height="0.8299958mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.5001260000000229mm"
            pcbY="1.040002999999956mm"
            width="0.48999139999999997mm"
            height="0.8299958mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.4998720000000958mm"
            pcbY="1.040002999999956mm"
            width="0.48999139999999997mm"
            height="0.8299958mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0mm"
            pcbY="0.0001269999999067295mm"
            width="1.5999967999999998mm"
            height="0.6999986mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0761979999999767, y: -1.07607100000007 },
              { x: -1.0761979999999767, y: 1.076324999999997 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0761979999999767, y: -1.07607100000007 },
              { x: 1.0761979999999767, y: 1.076324999999997 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=0fb6413d799443d18b9b3a9b664ce775&pn=C194656",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
