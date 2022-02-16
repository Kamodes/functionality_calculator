import { Answer } from "./answer";

export type storeAnswerPropType = {
  answers: Array<{ name: string; num: number }>;
};

export const StoreAnswer: React.FC<storeAnswerPropType> = (prop) => {
  return (
    <div>
      {prop.answers.map((answer: { name: string; num: number }) => (
        <li key={answer.name}>
          <Answer name={answer.name} num={answer.num} />
        </li>
      ))}
    </div>
  );
};
