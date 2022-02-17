import { DivButton } from "./divButton";
import { EmptyButton } from "./emptyButton";
import { MulButton } from "./mulButton";
import { NumButton } from "./numButton";
import { PlusButton } from "./plusButton";
import { SaveButton } from "./saveButton";
import { SubButton } from "./subButton";

export const Caluculator: React.FC = () => {
  return (
    <div className="flex flex-col space-y-1 mx-6 justify-items-center">
      <div className="flex space-x-1 justify-center">
        <NumButton n={7} />
        <NumButton n={8} />
        <NumButton n={9} />
        <DivButton />
      </div>
      <div className="flex space-x-1 justify-center">
        <NumButton n={4} />
        <NumButton n={5} />
        <NumButton n={6} />
        <MulButton />
      </div>
      <div className="flex space-x-1 justify-center">
        <NumButton n={1} />
        <NumButton n={2} />
        <NumButton n={3} />
        <SubButton />
      </div>
      <div className="flex space-x-1 justify-center">
        <EmptyButton />
        <NumButton n={0} />
        <SaveButton />
        <PlusButton />
      </div>
    </div>
  );
};
