interface TodoIntervalProps {
  intervalMs: number;
  setIntervalMs: (ms: number) => void;
  isFetching: boolean;
}

export default function TodoInterval({
  intervalMs,
  setIntervalMs,
  isFetching,
}: TodoIntervalProps) {
  return (
    <div className="relative mb-4">
      <label className="block mb-2">
        Query Interval speed (ms):
        <input
          value={intervalMs}
          onChange={(e) => setIntervalMs(Number(e.target.value))}
          type="number"
          step="100"
          className="border rounded p-1 w-full"
        />
      </label>
      {isFetching && (
        <div className="absolute top-0 right-0 h-4 w-4 bg-green-500 rounded-full animate-ping"></div>
      )}
    </div>
  );
}
