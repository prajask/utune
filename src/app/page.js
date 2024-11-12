'use client';

import Image from 'next/image';
import styles from './page.module.css';

import { Button } from '@carbon/react';

import PlaygroundPage from './playground/page';

export default function Home() {
  return <PlaygroundPage />;
}
