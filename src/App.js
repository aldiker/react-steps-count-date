import { useState } from 'react'
import Counter from './components/Counter'

function App() {
    const [stepValue, setStepValue] = useState(1)
    const [counterValue, setCounterValue] = useState(0)

    const currentDay = new Date().toDateString()

    const date = new Date('June 21 2027')
    date.setDate(date.getDate() + counterValue)

    return (
        <div>
            <Counter
                text='Step'
                deltaValue={1}
                value={stepValue}
                setValue={setStepValue}
            />
            <br />
            <Counter
                text='Count'
                deltaValue={stepValue}
                value={counterValue}
                setValue={setCounterValue}
            />

            {counterValue ? (
                <p>
                    {counterValue} {counterValue === 1 ? 'day' : 'days'} from
                    today is {date.toDateString()}
                </p>
            ) : (
                <p>Today is {currentDay}</p>
            )}
        </div>
    )
}

export default App
