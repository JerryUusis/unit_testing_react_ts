import PropsComponent from "./components/PropsComponent"
import TestingComponent from "./components/TestingComponent"
import { SampleProps } from "./components/PropsComponent"


function App() {
  const sampleProps: SampleProps[] = [
    { id: 1, sampleString: "Passing test props from App to child", booleanValue: true },
    { id: 2, sampleString: "Jest is used for testing", booleanValue: true }
  ]

  return (
    <>
      <TestingComponent />
      {sampleProps.map((item) => {
        return (<PropsComponent key={item.id} {...item} />)
      })}
    </>
  )
}

export default App
