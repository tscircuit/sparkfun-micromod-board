import AirQuality from "./components/AirQuality"
import CO2Sensor from "./components/CO2Sensor"
import FunctionConnector from "./components/FunctionConnector"
import HumiditySensor from "./components/HumiditySensor"
import Jumpers from "./components/Jumpers"
import VoltageRegulation from "./components/VoltageRegulation"

export default () => (
  <board routingDisabled>
    <schematictext
      text="Voltage Regulator"
      fontSize={0.5}
      schX={-10}
      schY={12}
    />
    <VoltageRegulation schX={-10} schY={10} />

    <schematictext text="Jumpers" fontSize={0.5} schX={0} schY={14} />
    <Jumpers schX={-2} schY={10} />

    <schematictext
      text="Humidity and Temperature: SHTC3"
      fontSize={0.5}
      schX={10}
      schY={12}
    />
    <HumiditySensor schX={10} schY={10} />

    <schematictext
      text="Function Connector"
      fontSize={0.5}
      schX={-10}
      schY={5}
    />
    <FunctionConnector schX={-10} schY={2} />

    <schematictext text="CO2 Sensor: STC31" fontSize={0.5} schX={10} schY={5} />
    <CO2Sensor schX={10} schY={3} />

    <schematictext
      text="Air Quality: SGP40"
      fontSize={0.5}
      schX={10}
      schY={0}
    />
    <AirQuality schX={10} schY={-3} />
  </board>
)
