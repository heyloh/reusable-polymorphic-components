import { useRef } from "react"
import { Border } from "./components/Border"
import { Text } from "./components/Text"

function App() {
  const invalidRefForBorder = useRef<HTMLAnchorElement | null>(null)
  const validRefForBorder = useRef<HTMLDivElement | null>(null)
  return (
    <Border ref={validRefForBorder} as="div" color="indigo" width={5} variant="dotted">
      <Border as="div" color="violet" width={5} variant="dashed">
        <Text as="h1" color="red">Lorem ipsum dolor sit amet</Text>
      </Border>
      <Border as="div" color="blue" width={5} variant="double">
        <Text as="h2" color="green">Consectetur adipisicing elit.</Text>
      </Border>
      <Border as="div" color="green" width={5} variant="groove">
        <Text as="a" href="https://google.com" color="blue">Hello world</Text>
      </Border>
      <Border as="div" color="yellow" width={5} variant="ridge">
        <Text>Obcaecati ut aliquid praesentium vero</Text>
      </Border>
    </Border>
  )
}

export default App
