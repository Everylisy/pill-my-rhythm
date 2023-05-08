import moment, { unitOfTime } from "moment";
import { Appointments, Levels, Supplements } from "./routes/Schedule/Calendar";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: sessionStorage,
});

export const currentDate = new Date(moment().format());
export const start = moment()
  .startOf("isoweek" as unitOfTime.StartOf)
  .format();
export const end = moment().isoWeekday("Sunday").format();

export const supplementAtom = atom<Supplements[]>({
  key: "supplements",
  default: [],
});

export const tasksAtom = atom({
  key: "task",
  default: [
    {
      text: "매일 같은 시간에 기상하기",
      type: "B",
    },
    {
      text: "낮에 하루 한 번 이상 산책하기",
      type: "B",
    },
    {
      text: "규칙적인 식사하기",
      type: "B",
    },
    {
      text: "틈틈이 운동하기",
      type: "B",
    },
    {
      text: "매일 같은 시간에 취침하기",
      type: "B",
    },
  ],
});

export const checkListAtom = atom({
  key: "checkList",
  default: [
    {
      text: "매일 같은 시간에 기상하기",
    },
    {
      text: "낮에 하루 한 번 이상 산책하기",
    },
    {
      text: "규칙적인 식사하기",
    },
    {
      text: "틈틈이 운동하기",
    },
    {
      text: "스케쥴러에 등록한 영양제 챙겨먹기",
    },
    {
      text: "매일 같은 시간에 취침하기",
    },
  ],
});

export const dayHoursAtom = atom({
  key: "dayHour",
  default: [
    {
      text: "아침",
      type: "B",
    },
    {
      text: "점심",
      type: "L",
    },
    {
      text: "저녁",
      type: "D",
    },
  ],
});

export const appointmentsAtom = atom<Appointments[]>({
  key: "appointment",
  default: [],
});

export const levelsAtom = atom<Levels[]>({
  key: "level",
  default: [],
});

export const userState = atom({
  key: "Recoiluser",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
