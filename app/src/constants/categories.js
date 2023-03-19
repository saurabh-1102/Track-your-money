const incomeColors = [
  "#123123",
  "#154731",
  "#16784f",
  "#14915f",
  "#10ac6e",
  "#0bc77e",
  "#04e38d",
  "#00ff9d",
];
const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
  "#cc474b",
  "#f55b5f",
];

export const incomeCategories = [
  { type: "Crypto", amount: 0, color: incomeColors[0] },
  { type: "Internship", amount: 0, color: incomeColors[1] },
  { type: "Stocks", amount: 0, color: incomeColors[2] },
  { type: "Gifts", amount: 0, color: incomeColors[3] },
  { type: "Salary", amount: 0, color: incomeColors[4] },
  { type: "Savings", amount: 0, color: incomeColors[5] },
  { type: "Other", amount: 0, color: incomeColors[6] },
  { type: "Demo", amount: 0, color: incomeColors[7] },
];

export const expenseCategories = [
  { type: "Clothes", amount: 0, color: expenseColors[0] },
  { type: "Medicine", amount: 0, color: expenseColors[1] },
  { type: "Education", amount: 0, color: expenseColors[2] },
  { type: "Travel", amount: 0, color: expenseColors[3] },
  { type: "Food", amount: 0, color: expenseColors[4] },
  { type: "Entertainment", amount: 0, color: expenseColors[5] },
  { type: "Recharge", amount: 0, color: expenseColors[6] },
  { type: "Demo", amount: 0, color: expenseColors[7] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
