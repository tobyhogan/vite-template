import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

import { Calendar } from '@mantine/dates';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Calendar></Calendar>
    </>
  );
}
