import { calculateInvestmentResults, formatter } from '../util/investment.js'; // Asumiendo que tenés helpers

export default function Result({inputValues}) {
  const investmentResults = calculateInvestmentResults(inputValues)
  let initialInvestment = 0;
  if (investmentResults.length > 0) {
    initialInvestment = investmentResults[0].valueEndOfYear - investmentResults[0].interest - investmentResults[0].annualInvestment;
  }

  console.log('inputValues', inputValues)
  console.log('investmentResults', investmentResults)
  console.log('initialInvestment', initialInvestment)

  const rows = investmentResults.map((investmentResult) => {
    const totalInterest = investmentResult.valueEndOfYear - investmentResult.annualInvestment * investmentResult.year - initialInvestment;
    const totalAmountInvested = investmentResult.valueEndOfYear - totalInterest;

    return (<tr key={investmentResult.year}>
      <td>{investmentResult.year}</td>
      <td>{formatter.format(investmentResult.valueEndOfYear)}</td>
      <td>{formatter.format(investmentResult.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>)
  })

  return <table id="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}