import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["VSS"],
  pin3: ["SDA"],
  pin4: ["pin4"],
  pin5: ["VDDH"],
  pin6: ["SCL"],
  pin7: ["GND"],
} as const

export const SGP40_D_R4 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2874215"],
      }}
      schPinStyle={{
        pin6: {
          marginTop: 0.2,
        },
      }}
      schPinArrangement={{
        leftSide: {
          pins: ["pin1", "pin5", "pin7"],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: ["pin3", "pin6"],
          direction: "top-to-bottom",
        },
      }}
      manufacturerPartNumber="SGP40_D_R4"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.1374119999999976mm"
            pcbY="0.8001000000000005mm"
            width="0.5849874mm"
            height="0.44800520000000005mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.1374119999999976mm"
            pcbY="0mm"
            width="0.5849874mm"
            height="0.44800520000000005mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.1374119999999976mm"
            pcbY="-0.8001000000000005mm"
            width="0.5849874mm"
            height="0.44800520000000005mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.1374120000000119mm"
            pcbY="-0.8001000000000005mm"
            width="0.5849874mm"
            height="0.44800520000000005mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.1374120000000119mm"
            pcbY="0mm"
            width="0.5849874mm"
            height="0.44800520000000005mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.1374120000000119mm"
            pcbY="0.8001000000000005mm"
            width="0.5849874mm"
            height="0.44800520000000005mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.2500101999999997mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.2961873999999938, y: 1.2961873999999938 },
              { x: 1.296187400000008, y: 1.2961873999999938 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2961873999999938, y: -1.2961873999999938 },
              { x: 1.296187400000008, y: -1.2961873999999938 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=dfc28c24c26e4dfc9c4940f18c23c15b&pn=C2874215",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
