import React from "react";
import { useCopyToClipboard } from "../hooks/useCopyToCliboard";

const CopyIcon = (): React.JSX.Element => (
  <svg
    className={"w-3.5 h-3.5"}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 18 20"
  >
    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
  </svg>
);

const CopySuccessIcon = (): React.JSX.Element => (
  <svg
    className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 12"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5.917 5.724 10.5 15 1.5"
    />
  </svg>
);

export function CopyToClipboard({ text }: { text: string }): React.JSX.Element {
  const [copiedText, copy] = useCopyToClipboard();
  const textData = text.startsWith("mailto:")
    ? text.replace("mailto:", "")
    : text;

  const handleCopy = (text: string) => async () => {
    await copy(text);
  };
  return (
    <div className="w-full max-w-80">
      <div className="relative">
        <input
          type="text"
          value={textData}
          className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled
          readOnly
        />
        <button
          onClick={handleCopy(textData)}
          className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
        >
          <span
            className={`${
              !copiedText ? "inline-flex gap-x-2" : "hidden"
            } items-center`}
          >
            <CopyIcon />
            <span className="text-xs font-semibold">Copiar</span>
          </span>
          <span
            className={`${
              copiedText ? "inline-flex gap-x-2" : "hidden"
            } items-center`}
          >
            <CopySuccessIcon />
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">
              ¡Copiado!
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
