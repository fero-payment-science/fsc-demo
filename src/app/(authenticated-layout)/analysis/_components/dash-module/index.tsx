import type { IconType } from 'react-icons';

import styles from '../../data-grid.module.css';

export default function DashModule({
  className,
  children,
  Icon,
  title,
  subhead,
}: {
  className: string;
  children: React.ReactNode;
  Icon: IconType;
  title: string;
  subhead?: string;
}) {
  return (
    <div
      className={`${styles[className]} ${styles.module} shadow-md border border-slate-300 relative`}
    >
      <div className="flex items-center mb-4 border-b border-primary pb-3">
        <Icon className="mr-2" size={30} color="var(--primary)" />
        <div className="flex items-center gap-x-2">
          <p className="text-primary font-semibold text-lg">{title}</p>
          {subhead && (
            <span className="relative top-[1px] text-xs text-slate-600">
              {subhead}
            </span>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
