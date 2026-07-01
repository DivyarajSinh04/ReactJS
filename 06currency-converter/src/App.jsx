import { useState, useEffect } from 'react'
import { InputBox, ChaiBox } from './components/index'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import bgImage from './assets/bg-image.png'
import './App.css'

function App() {

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const currencyOptions = Object.keys(currencyInfo);

  // useEffect(() => {
  //   const rate = currencyInfo?.[toCurrency];
  //   if (typeof rate === 'number' && Number.isFinite(rate)) {
  //     setConvertedAmt(amount * rate);
  //   } else {
  //     // avoid setting NaN into controlled inputs
  //     setConvertedAmt(0);
  //   }
  // }, [currencyInfo, toCurrency]); // Here, in this dependency list if I write only toCurrency it is not updating but it i write currencyInfor, then it is updating because currencyInfo is changing when fromCurrency changes, which triggers the useEffect to run and update the converted amount. 

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  }

  const convert = () => {
    setConvertedAmt(amount * currencyInfo[toCurrency]);
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          // backgroundImage: `url('https://media.istockphoto.com/id/2161187104/photo/financial-chart-with-moving-up-arrow-graph-in-stock-market-on-blue-color-background.jpg?s=1024x1024&w=is&k=20&c=xj-WGjL_vYbpTngRk6wRwszTK3E2zIWkv6-WJMaqR1A=')`,
          backgroundImage: `url(${bgImage})`
        }}
      >
        <div>
          <ChaiBox />
        </div>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault(); // we don't want the page to reload when the form is submitted, which is the default behavior of a form submission. This prevents the default action and allows us to handle the form submission in JavaScript. We will trigger the convert function when the form is submitted, which will calculate the converted amount based on the current amount and selected currencies.
                convert();

              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  // passing the state setter directly is fine — it's equivalent to
                  // (value) => setAmount(value)
                  onAmountChange={setAmount}
                  onCurrencyChange={(currency) => setFromCurrency(currency)}
                  currencyOptions={currencyOptions}
                  selectCurrency={fromCurrency}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmt}
                  onCurrencyChange={(currency) => setToCurrency(currency)}
                  currencyOptions={currencyOptions}
                  selectCurrency={toCurrency}
                  amountDisable // passing anything means passing true
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
