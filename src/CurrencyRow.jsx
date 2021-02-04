import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <div className="form-group form-row">
      <div className="col-lg-6">
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={onChangeAmount}
        />
      </div>
      <div className="col-lg-6">
        <select
          className="form-control"
          value={selectedCurrency}
          onChange={onChangeCurrency}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
