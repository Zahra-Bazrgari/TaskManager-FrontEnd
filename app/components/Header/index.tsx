import React from "react";

type Props = {
  name: string;
  buttonComponent?: any;
  isSmallText?: boolean;
};

const Header = ({name, buttonComponent, isSmallText = false}: Props) => {
  return <div className=''>
    <h1 className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}>
      {name}
    </h1>

    {buttonComponent}
  </div>;
};

export default Header;