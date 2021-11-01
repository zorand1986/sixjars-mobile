/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import Food from "../../assets/Food";
import PiggyBank from "../../assets/PiggyBank";
import Entertainment from "../../assets/Entertainment";
import Car from "../../assets/Car";
import Growth from "../../assets/Growth";
import Heart from "../../assets/Heart";

export const mockJars = [
  {
    id: 1,
    code: "ESS",
    Icon: Food,
    progress: 0.5,
    percentage: "50%",
    title: "Essentials Jar",
    description:
    "Use this jar for all your necessary spindings like food, rent, utilities etc. About 55% of your budget should be covered by this category.",
  },
  {
    id: 2,
    code: "FFR",
    Icon: PiggyBank,
    progress: 0.1,
    percentage: "10%",
    title: "Financial Freedon Jar",
    description: "This is a long term investment portion of your monthly budget. It should take around 10% of your monthly income.",
  },
  {
    id: 3,
    code: "ENT",
    Icon: Entertainment,
    progress: 0.23,
    percentage: "23%",
    title: "Entertainment jar",
    description: "What's life without a little bit of fun? Bars, restaurants, ticket...put them all in this jar. It should account for 10% of your income.",
  },
  {
    id: 4,
    code: "LTP",
    Icon: Car,
    progress: 0,
    percentage: "0%",
    title: "Long term purchases jar",
    description: "Travel expenses, cars, home appliances, and other more expensive items. 10% of your income should go to this category.",
  },
  {
    id: 5,
    code: "PGR",
    Icon: Growth,
    progress: 0.9,
    percentage: "90%",
    title: "Personal Growth jar",
    description: "Personal growth is very important. Put all your expenses for classes, books, gym membership fees etc. in this jar. Reserve around 10% of your income for this jar.",
  },
  {
    id: 6,
    code: "SHR",
    Icon: Heart,
    progress: 1,
    percentage: "100%",
    title: "Share jar",
    description: "This jar is meant for all the gifts to friends and family and charity donations. It should account for 5% of your income on average.",
  },
];

export const mockData = [
  {
    id: "1",
    date: "12/10/2021",
    amount: "345",
    note: "groceries",
    jar: "neccessity",
  },
  {
    id: "2",
    date: "12/10/2021",
    amount: "123",
    note: "dining",
    jar: "entertainment",
  },
  {
    id: "3",
    date: "12/10/2021",
    amount: "675",
    note: "madjarski",
    jar: "growth",
  },
  {
    id: "4",
    date: "12/10/2021",
    amount: "345",
    note: "groceries",
    jar: "neccessity",
  },
  {
    id: "5",
    date: "12/10/2021",
    amount: "123",
    note: "dining",
    jar: "entertainment",
  },
  {
    id: "6",
    date: "12/10/2021",
    amount: "675",
    note: "madjarski",
    jar: "growth",
  },
];

export const dataset1 = [49, 16, 8, 25, 3, 25, 60, 25, 44, 36, 94, 34, 30, 27, 36, 93, 56, 43, 85, 46, 55, 71, 23, 31, 24, 53, 59, 30, 48, 17, 87];

export const averageData = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
