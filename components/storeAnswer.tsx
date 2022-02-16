import { Answer } from "./answer";

export type storeAnswerPropType = {
  answers: Array<{ name: string; num: number }>;
};

export const StoreAnswer: React.FC<storeAnswerPropType> = (prop) => {
  return (
    <div className="flex justify-center">
      <ul className="bg-stone-200 flex-row basis-2/3">
        {prop.answers.map((answer: { name: string; num: number }) => (
          <li key={answer.name} className="text-center">
            <Answer name={answer.name} num={answer.num} />
          </li>
        ))}
      </ul>
    </div>
  );
};
