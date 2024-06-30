import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

import { Calendar } from '@mantine/dates';
import { Accordion } from '@mantine/core';

import '@mantine/dates/styles.css'

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Calendar></Calendar>
      <Accordion></Accordion>
    </>
  );
}
