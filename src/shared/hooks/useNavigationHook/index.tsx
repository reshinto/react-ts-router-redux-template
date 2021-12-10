import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navi = useNavigate();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const navigate = (event?: MouseEvent, page?: string): void => {
    if (page) {
      navi(page);
    } else {
      navi(-1);
    }
  };

  const naviToAboutPage = (event: MouseEvent): void => {
    navigate(event, "/about");
  };

  return {
    navigate,
    naviToAboutPage,
  };
};
