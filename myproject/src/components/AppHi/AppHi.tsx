import { FC } from "react";

type HiProps = { userName: string };

const AppHi: FC<HiProps> = (props) => <h2>Hello, {props.userName}</h2>;

export default AppHi;

// import { PureComponent } from "react";

// type Props = { userName: string };
// class AppHi extends PureComponent<Props> {
//   render() {
//     return <h2>Hello, {this.props.userName}</h2>;
//   }
// }

// export default AppHi;
