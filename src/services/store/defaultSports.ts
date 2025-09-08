import { TSetupItem, TSportsData } from "../types";

const DEFAULT_SETUPS_DATA: TSetupItem[] = [
  {
    id: "rounds",
    title: "Раунды",
    canDisable: false,
    items: [
      {
        title: "Количество",
        type: "count",
        value: "3",
      },
      {
        title: "Время",
        type: "time",
        value: "03:00",
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
      },
    ],
  },
];

export const DEFAULT_SPORTS_DATA: TSportsData[] = [
  {
    code: "newTimer",
    title: "Новый таймер",
    description: "Создать свой таймер",
    icon: "addIcon",
    setups: [
      ...DEFAULT_SETUPS_DATA,
      {
        id: "rest",
        title: "Отдых",
        canDisable: true,
        items: [
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
      {
        id: "explosion",
        title: "Взрыв",
        canDisable: true,
        items: [
          {
            title: "Количество",
            type: "count",
            value: "2",
          },
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
    ],
  },
  {
    code: "box",
    title: "Бокс",
    description: "12 раундов по 3 мин",
    icon: "boxIcon",
    setups: [
      ...DEFAULT_SETUPS_DATA,
      {
        id: "rest",
        title: "Отдых",
        canDisable: true,
        items: [
          {
            title: "Время",
            type: "time",
            value: "04:00",
          },
        ],
      },
      {
        id: "explosion",
        title: "Взрыв",
        canDisable: true,
        items: [
          {
            title: "Количество",
            type: "count",
            value: "2",
          },
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
    ],
  },
  {
    code: "mma",
    title: "ММА",
    description: "3 раунда по 5 мин",
    icon: "mmaIcon",
    setups: [
      ...DEFAULT_SETUPS_DATA,
      {
        id: "rest",
        title: "Отдых",
        canDisable: true,
        items: [
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
      {
        id: "explosion",
        title: "Взрыв",
        canDisable: true,
        items: [
          {
            title: "Количество",
            type: "count",
            value: "2",
          },
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
    ],
  },
  {
    code: "kudo",
    title: "Кудо",
    description: "3 раунда по 5 мин",
    icon: "kudoIcon",
    setups: [
      ...DEFAULT_SETUPS_DATA,
      {
        id: "rest",
        title: "Отдых",
        canDisable: true,
        items: [
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
      {
        id: "explosion",
        title: "Взрыв",
        canDisable: true,
        items: [
          {
            title: "Количество",
            type: "count",
            value: "2",
          },
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
    ],
  },
  {
    code: "sambo",
    title: "Самбо",
    description: "3 раунда по 5 мин",
    icon: "samboIcon",
    setups: [
      ...DEFAULT_SETUPS_DATA,
      {
        id: "rest",
        title: "Отдых",
        canDisable: true,
        items: [
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
      {
        id: "explosion",
        title: "Взрыв",
        canDisable: true,
        items: [
          {
            title: "Количество",
            type: "count",
            value: "2",
          },
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
    ],
  },
  {
    code: "thai",
    title: "Тайский бокс",
    description: "3 раунда по 5 мин",
    icon: "thaiIcon",
    setups: [
      ...DEFAULT_SETUPS_DATA,
      {
        id: "rest",
        title: "Отдых",
        canDisable: true,
        items: [
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
      {
        id: "explosion",
        title: "Взрыв",
        canDisable: true,
        items: [
          {
            title: "Количество",
            type: "count",
            value: "2",
          },
          {
            title: "Время",
            type: "time",
            value: "01:00",
          },
        ],
      },
    ],
  },
];
