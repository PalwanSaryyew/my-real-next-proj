import type { FC } from 'react';

interface Stats3Props {}

const Stats3: FC<Stats3Props> = ({}) => {
        return (
            <>
                <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
  <div>
    <p className="text-sm text-gray-500">Profit</p>

    <p className="text-2xl font-medium text-gray-900">$240.94</p>
  </div>

  <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <span className="text-xs font-medium"> 67.81% </span>
  </div>
</article>

<article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
  <div>
    <p className="text-sm text-gray-500">Profit</p>

    <p className="text-2xl font-medium text-gray-900">$240.94</p>
  </div>

  <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
      />
    </svg>

    <span className="text-xs font-medium"> 67.81% </span>
  </div>
</article>
            </>
        );
}
export default Stats3;