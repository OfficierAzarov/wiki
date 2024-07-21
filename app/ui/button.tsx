'use client';

import { MouseEventHandler } from 'react';

export default function Button({
  text,
  action,
  isSubmitButton = false,
}: {
  text: string;
  action?: MouseEventHandler<HTMLButtonElement>;
  isSubmitButton?: boolean;
}) {
  return (
    <button
      className={
        'ml-2 inline self-start font-sans text-xs text-gray-600 hover:text-black p-1'
      }
      onClick={action ? action : undefined}
      type={isSubmitButton ? 'submit' : undefined}
    >
      [{text}]
    </button>
  );
}
