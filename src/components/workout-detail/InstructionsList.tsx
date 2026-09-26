interface InstructionsListProps {
  instructions: string[];
}
 
export default function InstructionsList({ instructions }: InstructionsListProps) {
  return (
    <div>
      <h2 className="text-lg font-extrabold uppercase tracking-tight text-white">
        Instructions
      </h2>
      <ol className="mt-3 space-y-2.5">
        {instructions.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm text-white/70">
            <span className="font-semibold text-white">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}