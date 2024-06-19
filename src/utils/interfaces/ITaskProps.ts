export interface ITaskProps {
  id: string;
  createdAt: Date;
  body: string;
  color?:
    | "#cce5ff"
    | "#a3ffac"
    | "#ffca99"
    | "#eaffc2"
    | "#ff8097"
    | "transparent";
  status: number;
}
