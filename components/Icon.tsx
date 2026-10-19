type IconName = 'arrow-up-right' | 'arrow-up' | 'arrow-down' | 'play' | 'pause' | 'diamond' | 'plus' | 'minus' | 'close';

const paths: Record<IconName, string> = {
  'arrow-up-right': 'M5 19 19 5M5 5h14v14',
  'arrow-up': 'M12 20V4m-7 7 7-7 7 7',
  'arrow-down': 'M12 4v16m-7-7 7 7 7-7',
  play: 'm8 5 11 7-11 7V5Z',
  pause: 'M8 5v14M16 5v14',
  diamond: 'm12 3 8 9-8 9-8-9 8-9Z',
  plus: 'M5 12h14M12 5v14',
  minus: 'M5 12h14',
  close: 'm6 6 12 12M6 18 18 6',
};

export default function Icon({ name }: { name: IconName }) {
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={paths[name]} /></svg>;
}
