import React from "react";
import { useSetRecoilState } from "recoil";
import { del } from "../../Api";
import { supplementAtom } from "../../atoms";
import { supInfo } from "./DayItem";

interface supProps {
  info: supInfo;
}

function SupItem({ info }: supProps) {
  const setSupplements = useSetRecoilState(supplementAtom);
  const handleDelete = async () => {
    try {
      await del(`schedule/daily-supplement/${info.pk_plan_id}`);
      setSupplements((prev) =>
        prev.filter((value) => value.pk_plan_id !== info.pk_plan_id),
      );
    } catch (error: any) {
      console.log(error);
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <li onClick={handleDelete} className="cursor-pointer text-sm">
      {info.Supplement.name}
    </li>
  );
}

export default React.memo(SupItem);
