import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["VOUT"],
} as const

export const AP2112K_3_3TRG1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinStyle={{
        NC: {
          marginTop: 0.5,
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C51118"],
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VIN", "EN", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VOUT", "NC"],
        },
      }}
      manufacturerPartNumber="AP2112K_3_3TRG1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin4"]}
            pcbX="0.949705999999992mm"
            pcbY="1.2999720000000252mm"
            width="0.6223mm"
            height="1.1049mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.9497059999998783mm"
            pcbY="1.2999720000000252mm"
            width="0.6223mm"
            height="1.1049mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.9497059999998783mm"
            pcbY="-1.2999720000000252mm"
            width="0.6223mm"
            height="1.1049mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.0005079999999679785mm"
            pcbY="-1.2999720000000252mm"
            width="0.6223mm"
            height="1.1049mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.949705999999992mm"
            pcbY="-1.2999720000000252mm"
            width="0.6223mm"
            height="1.1049mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.41193520000013, y: -0.5003799999999501 },
              { x: -1.3871447999999873, y: -0.5003799999999501 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3871447999999873, y: -0.5003799999999501 },
              { x: -1.3871447999999873, y: 0.5003799999999501 },
              { x: 1.41193520000013, y: 0.5003799999999501 },
              { x: 1.41193520000013, y: -0.5003799999999501 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.779549399999837, y: -1.5214599999999336 },
              { x: -1.9027377800492786, y: -1.6465485285044679 },
              { x: -1.7782793999998603, y: -1.7703735202394455 },
              { x: -1.6538210199506693, y: -1.6465485285045816 },
              { x: -1.7770093999999972, y: -1.5214599999999336 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=6d166d1d6c064b99aa79465714e989c1&pn=C51118",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
