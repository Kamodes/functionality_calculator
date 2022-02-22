import Image from "next/image";
import Link from "next/link";
import { EmptyFlex } from "./emptyFlex";
import { HeaderButton } from "./headerButton";

export const Header = () => {
  return (
    <div className="flex">
      <div className="ml-3 mt-4">
        <Image
          src={"/../public/images/logo_func_cul.png"}
          alt={"logo"}
          width={200}
          height={120}
          objectFit="contain"
        />
      </div>
      <EmptyFlex basis="1/2" />
      <div className="flex">
        <HeaderButton label="このサイトについて" />
        <HeaderButton label="新規登録" />
        <HeaderButton label="ログイン" />
      </div>
    </div>
  );
};
