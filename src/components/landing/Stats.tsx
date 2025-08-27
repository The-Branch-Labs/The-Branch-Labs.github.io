import type { ReactNode } from 'react';

const stats = [
  {
    number: '10,000+',
    label: 'Active Researchers',
  },
  {
    number: '500+',
    label: 'Research Projects',
  },
  {
    number: '50+',
    label: 'Countries',
  },
  {
    number: '95%',
    label: 'Success Rate',
  },
];

export function Stats(): ReactNode {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 dark:text-gray-200 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
