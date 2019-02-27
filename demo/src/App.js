import React, { useState } from "react";
import useWebsocket from "./hooks/useWebsocket";
import { formatCurrency } from "./utils/format-currency";
import { buildUrl } from "./utils/build-url";

const availableCurrencies = ["AUD", "CNY", "EUR", "GBP", "RUS", "USD"];

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  return (
    <div>
      <form>
        <label htmlFor="currencies">Select a currency to subscribe to</label>
        <select
          id="currencies"
          onChange={({ target: { value: selectedCurrency } }) =>
            setCurrencies(val => val.concat(selectedCurrency))
          }
        >
          <option key="default">Select a currency below</option>
          {availableCurrencies.map(
            currency =>
              !currencies.includes(currency) && (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              )
          )}
        </select>
      </form>
      {currencies.map(currency => (
        <Subscription
          key={currency}
          currency={currency}
          cancelSubscription={() =>
            setCurrencies(val => val.filter(curr => curr !== currency))
          }
        />
      ))}
    </div>
  );
};

const Subscription = ({ currency, cancelSubscription }) => {
  const [{ data: price, isOpen }] = useWebsocket(
    buildUrl("/price", { currency })
  );

  return (
    <div style={{ margin: "15px 0" }}>
      <button onClick={cancelSubscription}>×</button>
      Current price of {currency}:{" "}
      {!isOpen ? "Loading..." : formatCurrency(price, currency)}
    </div>
  );
};

export default App;
