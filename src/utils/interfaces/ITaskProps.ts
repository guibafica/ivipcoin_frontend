export interface ITaskProps {
  id: string;
  date: Date;
  body: string;
  color: string;
  status: "new" | "started" | "waiting" | "finished";
}
