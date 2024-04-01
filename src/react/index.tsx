import React from 'react';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('electronChat') as HTMLElement;
const root = createRoot(domNode);
root.render(<h1>Hello React</h1>);
