import { TSetupItem } from "../types";

// export const DEFAULT_SETUPS_DATA: TSetupItem[] = [
//   {
//     id: "rounds",
//     title: "Раунды",
//     canDisable: false,
//     items: [
//       {
//         title: "Количество",
//         type: "count",
//         value: 3,
//         minValue: 1,
//         maxValue: 10,
//       },
//       {
//         title: "Время",
//         type: "time",
//         value: "03:00",
//         minValue: "00:10",
//         maxValue: "03:00",
//       },
//     ],
//   },
//   {
//     id: "preparation",
//     title: "Подготовка",
//     canDisable: false,
//     items: [
//       {
//         title: "Время",
//         type: "time",
//         value: "00:20",
//         minValue: "00:10",
//         maxValue: "03:00",
//       },
//     ],
//   },
//   {
//     id: "rest",
//     title: "Отдых",
//     canDisable: true,
//     items: [
//       {
//         title: "Время",
//         type: "time",
//         value: "01:00",
//         minValue: "00:10",
//         maxValue: "03:00",
//       },
//     ],
//   },
//   {
//     id: "explosion",
//     title: "Взрыв",
//     canDisable: true,
//     items: [
//       {
//         title: "Количество",
//         type: "count",
//         value: 2,
//         minValue: 1,
//         maxValue: 9,
//       },
//       {
//         title: "Время",
//         type: "time",
//         value: "01:00",
//         minValue: "00:10",
//         maxValue: "03:00",
//       },
//     ],
//   },
// ];

export const DEFAULT_SETUPS_DATA: TSetupItem[] = [
  {
    id: "rounds",
    title: "Раунды",
    canDisable: false,
    items: [
      {
        title: "Количество",
        type: "count",
        value: 3,
        minValue: 1,
        maxValue: 10,
      },
      {
        title: "Время",
        type: "time",
        value: "03:00",
        minValue: "00:10",
        maxValue: "03:00",
      },
    ],
  },
  {
    id: "preparation",
    title: "Подготовка",
    canDisable: false,
    items: [
      {
        title: "Время",
        type: "time",
        value: "00:20",
        minValue: "00:10",
        maxValue: "03:00",
      },
    ],
  },
  {
    id: "rest",
    title: "Отдых",
    canDisable: true,
    items: [],
  },
  {
    id: "explosion",
    title: "Взрыв",
    canDisable: true,
    items: [],
  },
];
