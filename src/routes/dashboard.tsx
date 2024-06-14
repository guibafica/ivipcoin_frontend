import { useCallback, ChangeEvent, useState } from "react";
import { toast } from "sonner";

import { Header } from "../components/header";
import { NewTaskCard } from "../components/new-task-card";
import { TaskCard } from "../components/task-card";

import { ITaskProps } from "../utils/interfaces/ITaskProps";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState<ITaskProps[]>(() => {
    const tasksOnStorage = localStorage.getItem("tasks");

    if (tasksOnStorage) return JSON.parse(tasksOnStorage);

    return [];
  });

  const filteredTasks =
    search !== ""
      ? tasks.filter((task) =>
          task.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : tasks;

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    // const query = event.target.value;
  }, []);

  const onTaskCreated = useCallback(
    (content: string) => {
      const newTask: ITaskProps = {
        id: crypto.randomUUID(),
        date: new Date(),
        body: content,
        color: "#f90",
        status: "new",
      };

      const tasksArray = [newTask, ...tasks];

      setTasks(tasksArray);

      localStorage.setItem("tasks", JSON.stringify(tasksArray));
    },
    [tasks]
  );

  const handleDeleteTask = useCallback((id: string) => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      const tasksArray = JSON.parse(storedTasks);
      const newTasksArray = tasksArray.filter(
        (task: ITaskProps) => task.id !== id
      );

      setTasks(newTasksArray);
      localStorage.setItem("tasks", JSON.stringify(newTasksArray));

      toast.success("Task deletada com sucesso!");
    }
  }, []);

  return (
    <>
      <Header />

      <div className="h-full min-h-screen w-screen flex flex-col justify-start items-center pt-16  px-16 bg-slate-900 text-slate-50 antialiased">
        {/* <div className="mx-auto max-w-6xl my-12 space-y-6 px-5 md:px-0"> */}
        <form className="w-full py-4">
          <input
            type="text"
            placeholder="Busque por suas tasks..."
            onChange={handleSearch}
            className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          />

          <div className="h-px bg-slate-700 mt-4" />
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] mt-4">
          <NewTaskCard onTaskCreated={onTaskCreated} />

          {filteredTasks.map((currentTask) => (
            <TaskCard
              key={Math.random()}
              payload={{
                id: currentTask.id,
                date: currentTask.date,
                body: currentTask.body,
                color: currentTask.color,
                status: currentTask.status,
              }}
              handleDeleteTask={(taskId) => handleDeleteTask(taskId)}
            />
          ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
