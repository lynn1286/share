'use client'

import { useTransition } from 'react'
import { actionError } from './action'

const About = () => {
  const [isPending, startTransition] = useTransition()

  return (
    <div
      onClick={async () => {
        const { code } = await actionError()
        if (code) {
          startTransition(() => {
            throw new Error('This failed')
          })
        }
      }}
    >
      about
    </div>
  )
}

export default About
