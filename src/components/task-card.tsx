import { formatDistanceToNow } from "date-fns";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import ptBR from "date-fns/locale/pt-BR";

import { ITaskProps } from "../utils/interfaces/ITaskProps";

interface ITaskCardProps {
  payload: ITaskProps;
  handleDeleteTask: (taskId: string) => void;
}

export function TaskCard(props: ITaskCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md text-left flex-col bg-slate-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-main-yellow">
        <span className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(props.payload.date, {
            addSufix: true, // @ts-expect-error 'formatDistanceToNow locale'
            locale: ptBR,
          })}{" "}
          atrás
        </span>

        <p className="text-sm leading-6 text-slate-400">{props.payload.body}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogTaskCardOverlay" />

        <Dialog.Content className="DialogTaskCardContent">
          <Dialog.Close className="DialogTaskCardClose">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-lg font-medium" style={{ color: "#cbd5e1" }}>
              {formatDistanceToNow(props.payload.date, {
                addSufix: true, // @ts-expect-error formatDistanceToNow locale
                locale: ptBR,
              })}{" "}
              atrás
            </span>

            {/* alterar para um textField */}
            <p
              className="text-base leading-6 text-slate-400"
              style={{ color: "#94a3b8" }}
            >
              {props.payload.body}
            </p>
          </div>

          <button
            type="button"
            onClick={() => props.handleDeleteTask(props.payload.id)}
            className="w-full py-4 text-center text-sm cursor-pointer outline-none font-medium group"
            style={{ backgroundColor: "#1e293b", color: "#cbd5e1" }}
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              deletar esta task
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
