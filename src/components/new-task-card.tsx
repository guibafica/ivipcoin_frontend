import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { toast } from "sonner";

import { colors } from "../utils/colors";

import { SelectComponent } from "./select";

interface INewTaskCardProps {
  onTaskCreated: (content: string) => void;
}

let speechRecognition: SpeechRecognition | null = null;

export function NewTaskCard({ onTaskCreated }: INewTaskCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [content, setContent] = useState("");

  const handleStartEditor = useCallback(() => {
    setShouldShowOnboarding(false);
  }, []);

  const handleContentChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setContent(event.target.value);

      if (event.target.value === "") setShouldShowOnboarding(true);
    },
    []
  );

  const handleSaveTask = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (content === "") {
        toast.warning("Um conteúdo é obrigatório para continuar");

        return;
      }

      onTaskCreated(content);

      setContent("");
      setShouldShowOnboarding(true);

      toast.success("Task criada com sucesso!");
    },
    [content, onTaskCreated]
  );

  const handleStartRecording = useCallback(() => {
    const isSpeechRecognitionAPIAvailable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionAPIAvailable) {
      alert(
        "Infelizmente seu navegador não suporta a API de gravação de voz :("
      );

      return;
    }

    setIsRecording(true);
    setShouldShowOnboarding(false);

    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    speechRecognition = new SpeechRecognitionAPI();

    speechRecognition.lang = "pt-BR";
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;

    speechRecognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, "");

      setContent(transcription);
    };

    speechRecognition.onerror = (event) => {
      console.error(event);
    };

    speechRecognition.start();
  }, []);

  const handleStopRecording = useCallback(() => {
    setIsRecording(false);

    if (speechRecognition !== null) speechRecognition.stop();
  }, []);

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col bg-slate-700 text-left p-5 gap-3 outline-none hover:ring-2 hover:ring-yellow-200 focus-visible:ring-2 focus-visible:ring-yellow-50 cursor-pointer">
        <span className="text-sm font-medium text-slate-200">
          Adicionar task
        </span>

        <p className="text-sm leading-6 text-slate-400">
          Gravar um audio que vai ser convertido para texto automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />

        <Dialog.Content className="DialogContent">
          <Dialog.Close className="DialogClose">
            <X className="size-5" />
          </Dialog.Close>

          <form className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span
                className="text-lg font-medium"
                style={{ color: "#cbd5e1" }}
              >
                Adicionar uma task
              </span>

              <div className="w-full flex flex-row items-center justify-between -mt-4 gap-x-10 mb-4">
                <SelectComponent />

                <SelectComponent />
              </div>

              {shouldShowOnboarding ? (
                <p className="text-base leading-6" style={{ color: "#94a3b8" }}>
                  Começar{" "}
                  <button
                    type="button"
                    onClick={handleStartRecording}
                    className="font-medium hover:underline cursor-pointer"
                    style={{ color: colors.primary.yellow }}
                  >
                    gravando uma task em audio
                  </button>{" "}
                  ou, se preferir,{" "}
                  <button
                    type="button"
                    onClick={handleStartEditor}
                    className="font-medium hover:underline cursor-pointer"
                    style={{ color: colors.primary.yellow }}
                  >
                    apenas use texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  value={content}
                  onChange={handleContentChange}
                  className="text-base leading-6 bg-transparent resize-none flex-1 outline-none"
                  style={{ color: "#94a3b8" }}
                />
              )}
            </div>

            {isRecording ? (
              <button
                type="button"
                onClick={handleStopRecording}
                className="w-full flex items-center justify-center gap-2 py-4 text-center text-base outline-none font-medium transition-all cursor-pointer"
                style={{ backgroundColor: "#0f172a", color: "#cbd5e1" }}
              >
                <div
                  className="rounded-full animate-pulse"
                  style={{ background: "#ef4444", width: 12, height: 12 }}
                />
                Gravando! (Clique para parar)
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSaveTask}
                className="w-full py-4 text-center text-base outline-none font-medium cursor-pointer"
                style={{
                  backgroundColor: colors.primary.yellow,
                  color: "#422006",
                }}
              >
                Salvar task
              </button>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
