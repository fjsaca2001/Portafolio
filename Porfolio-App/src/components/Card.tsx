import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  body?: string;
}
export function CardBody(props: CardBodyProps) {
  const { title, body } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{body}</p>
    </>
  );
}
export default Card;
