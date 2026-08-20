interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-x-auto rounded-none border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-xl transition-colors">
      <table className="w-full text-left">
        <thead className="bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
          <tr>
            <th className="px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[2px] text-gray-600 dark:text-neutral-400 font-mono">
              PROP
            </th>
            <th className="px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[2px] text-gray-600 dark:text-neutral-400 font-mono">
              TYPE
            </th>
            <th className="px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[2px] text-gray-600 dark:text-neutral-400 font-mono">
              DEFAULT
            </th>
            <th className="px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[2px] text-gray-600 dark:text-neutral-400 font-mono">
              DESCRIPTION
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-neutral-900">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50/80 dark:hover:bg-neutral-900/60 transition-colors">
              <td className="px-5 py-3 text-xs font-mono font-semibold text-[#1c69d4]">
                {row.prop}
              </td>
              <td className="px-5 py-3 text-xs font-mono text-gray-800 dark:text-neutral-300">
                {row.type}
              </td>
              <td className="px-5 py-3 text-xs font-mono text-gray-500 dark:text-neutral-500">
                {row.default}
              </td>
              <td className="px-5 py-3 text-xs text-gray-600 dark:text-neutral-400 font-light leading-relaxed">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
