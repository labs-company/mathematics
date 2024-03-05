import React from 'react'

export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <button className="shadow size-16 bg-white flex items-center justify-center cursor-grab rounded-md">
      {children}
    </button>
  )
}
