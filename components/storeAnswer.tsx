import { Answer } from "./answer";

export type storeAnswerPropType = {
  memo: Array<{ name: string; num: number }>;
};

export const StoreAnswer: React.FC<storeAnswerPropType> = (prop) => {
  return (
    <div className="flex justify-center bg-white ">
      <ul className="flex-row basis-2/3">
        <div className="text-center font-mono text-2xl">保存した値</div>
        {prop.memo.map((answer: { name: string; num: number }) => (
          <li key={answer.name} className="text-center ">
            <Answer name={answer.name} num={answer.num} />
          </li>
        ))}
      </ul>
    </div>
  );
};
