import { useState } from 'react'
import Counter from './components/Counter'

function App() {
    const [stepValue, setStepValue] = useState(1)
    const [counterValue, setCounterValue] = useState(0)

    const currentDay = new Date().toDateString()

    const date = new Date(currentDay)
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

            <p>
                <span>
                    {counterValue === 0
                        ? 'Today is '
                        : counterValue > 0
                        ? `${counterValue} days from today is `
                        : `${Math.abs(counterValue)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>
        </div>
    )
}

export default App
