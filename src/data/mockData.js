/* eslint-disable import/no-unresolved */
import Food from "../../assets/Food";
import PiggyBank from "../../assets/PiggyBank";
import Entertainment from "../../assets/Entertainment";
import Car from "../../assets/Car";
import Growth from "../../assets/Growth";
import Heart from "../../assets/Heart";

export const mockJars = [
  {
    id: 1, code: "ESS", Icon: Food, progress: 0.5, percentage: "50%",
  },
  {
    id: 2, code: "FFR", Icon: PiggyBank, progress: 0.1, percentage: "10%",
  },
  {
    id: 3, code: "ENT", Icon: Entertainment, progress: 0.23, percentage: "23%",
  },
  {
    id: 4, code: "LTP", Icon: Car, progress: 0, percentage: "0%",
  },
  {
    id: 5, code: "PGR", Icon: Growth, progress: 0.9, percentage: "90%",
  },
  {
    id: 6, code: "SHR", Icon: Heart, progress: 1, percentage: "100%",
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
