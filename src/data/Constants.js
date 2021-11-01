import Food from "../../assets/Food";
import PiggyBank from "../../assets/PiggyBank";
import Entertainment from "../../assets/Entertainment";
import Car from "../../assets/Car";
import Growth from "../../assets/Growth";
import Heart from "../../assets/Heart";

export const defaultElementHeight = 250;

export const defaultJarValues = {
  ESS: {
    id: 1,
    code: "ESS",
    Icon: Food,
    progress: 0.55,
    percentage: "50%",
    title: "Essentials Jar",
    description:
    "Use this jar for all your necessary spindings like food, rent, utilities etc. About 55% of your budget should be covered by this category.",
  },
  FFR: {
    id: 2,
    code: "FFR",
    Icon: PiggyBank,
    progress: 0.1,
    percentage: "10%",
    title: "Financial Freedom Jar",
    description: "This is a long term investment portion of your monthly budget. It should take around 10% of your monthly income.",
  },
  ENT: {
    id: 3,
    code: "ENT",
    Icon: Entertainment,
    progress: 0.1,
    percentage: "23%",
    title: "Entertainment jar",
    description: "What's life without a little bit of fun? Bars, restaurants, ticket...put them all in this jar. It should account for 10% of your income.",
  },
  LTP: {
    id: 4,
    code: "LTP",
    Icon: Car,
    progress: 0.1,
    percentage: "0%",
    title: "Long term purchases jar",
    description: "Travel expenses, cars, home appliances, and other more expensive items. 10% of your income should go to this category.",
  },
  PGR: {
    id: 5,
    code: "PGR",
    Icon: Growth,
    progress: 0.1,
    percentage: "90%",
    title: "Personal Growth jar",
    description: "Personal growth is very important. Put all your expenses for classes, books, gym membership fees etc. in this jar. Reserve around 10% of your income for this jar.",
  },
  SHR: {
    id: 6,
    code: "SHR",
    Icon: Heart,
    progress: 0.05,
    percentage: "100%",
    title: "Share jar",
    description: "This jar is meant for all the gifts to friends and family and charity donations. It should account for 5% of your income on average.",
  },
};
