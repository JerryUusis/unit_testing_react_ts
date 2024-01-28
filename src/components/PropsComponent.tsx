export interface SampleProps {
    id: number
    sampleString: string
    booleanValue: boolean
  }

const PropsComponent = ({ id, sampleString, booleanValue }: SampleProps) => {
    return (
        <p data-testid = {`props-${id}`}>{id} {sampleString} {booleanValue}</p>
    )
}

export default PropsComponent;