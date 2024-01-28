import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestingComponent from '../components/TestingComponent'
import PropsComponent from '../components/PropsComponent'

afterEach(() => {
    cleanup()
})

describe("First test group", () => {
    test("Should render TestingComponent", () => {
        render(<TestingComponent />)
        const testingElement = screen.getByTestId('test-1');
        expect(testingElement).toBeInTheDocument();
    })

    test("Should have text content", () => {
        render(<TestingComponent />)
        const testingElement = screen.getByTestId('test-2');
        expect(testingElement).toHaveTextContent('This component is used for testing')
    })
})

describe("Props component test1", () => {
    let propsComp1: HTMLElement;

    // Use beforeEach to define the element before each test
    beforeEach(()=> {
        render(<PropsComponent id={1} sampleString="Passing test props from App to child" booleanValue={true} />);
        propsComp1 = screen.getByTestId("props-1");
    })

    test("Should render PropsComponent.tsx", () => {
        expect(propsComp1).toBeInTheDocument();
    })
    test("Should have text content", () => {
        expect(propsComp1).toHaveTextContent("1 Passing test props from App to child");
    })
})