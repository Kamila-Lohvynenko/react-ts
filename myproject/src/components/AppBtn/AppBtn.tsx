import { FC } from "react";

type BtnProps = {
  text: string;
  onClick: () => void;
};
const AppBtn: FC<BtnProps> = ({ text, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default AppBtn;

// import { PureComponent, ReactNode } from "react";

// type BtnProps = {
//   text: string;
//   onClick: () => void;
// };

// class AppBtn extends PureComponent<BtnProps> {
//   render(): ReactNode {
//     const { text, onClick } = this.props;
//     return (
//       <button type="button" onClick={onClick}>
//         {text}
//       </button>
//     );
//   }
// }

// export default AppBtn;
