import dynamic from 'next/dynamic';

const ClientBellCurve = dynamic(() => import('./client-bell-curve'), {
  ssr: false
});

export default function BellCurve() {
  return <ClientBellCurve />;
}
