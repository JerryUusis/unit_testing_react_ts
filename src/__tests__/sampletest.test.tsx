import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestingComponent from '../components/TestingComponent'

describe("First test group", () => {
    test("Should render TestingComponent", () => {
        render(<TestingComponent />)
        const testingElement = screen.getByTestId('test-1');
        expect(testingElement).toBeInTheDocument();
    })
})