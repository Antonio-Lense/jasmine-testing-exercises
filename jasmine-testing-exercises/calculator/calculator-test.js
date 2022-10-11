
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 1000, years: 10, rate: 1};
  expect(calculateMonthlyPayment(values)).toEqual("8.76");
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 1027, years: 10, rate: 1};
  expect(calculateMonthlyPayment(values)).toEqual("9.00");
});

it("should return NaN when a string is inputed", () =>{
  const values = {amount: "asdf", years: 10, rate: 1};
  expect(calculateMonthlyPayment(values)).toEqual("NaN");
});
/// etc
