export default function Tooltip({
  message,
  children,
}: {
  message: string;
  children: any;
}) {
  return (
    <div className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <div className="absolute left-1/2 -top-13 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
        <div className="flex max-w-xs flex-col items-center shadow-lg">
          <div className="rounded bg-black/50 dark:bg-white p-2 text-center text-xs text-white dark:text-black">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
