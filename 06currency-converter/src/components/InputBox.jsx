import React, { useId } from 'react'

function InputBox({
    label, // From and To
    amount,
    onAmountChange, // handle states when Amount Changes
    onCurrencyChange, // handle states when currency changes
    currencyOptions = [], // default empty array if no options are provided
    selectCurrency = "usd", // default selected currency
    amountDisable = false, // default to false, meaning the input is enabled
    currencyDisable = false, // default to false, meaning the select is enabled
    className = "", // user intended CSS
}) {

    const amountInputId = useId(); // react hook for generating unique IDs for accessibility attributes
    //if we just use any random string, it may not be unique across multiple instances of the component, leading to potential accessibility issues. useId ensures that each instance of InputBox has a unique ID for the amount input field.

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option> /* Providing a key (here key={currency}) lets React uniquely identify
                            each element in the list across renders. With keys React can:
                            - Efficiently update only changed items instead of re-rendering the whole list
                            - Preserve element state when items are reordered or updated
                            If no key is provided, React will emit a warning and may reuse DOM nodes
                            incorrectly which can cause bugs (wrong selection, lost focus, stale state).
                            Use stable, unique keys (IDs) where possible; avoid array indexes for keys
                            when list order can change. */
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;