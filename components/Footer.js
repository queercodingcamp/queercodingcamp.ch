import React from 'react'
import Link from './Link'
import Image from 'next/legacy/image'
import Instagram from '../public/images/Instagram.svg'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { LogoFullWhite } from '../components/Logo'

export default function Footer() {
  return (
    <footer className=' bg-slate-900 w-full mt-24'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8  px-4 md:px-6 lg:px-8 py-8 md:py-16'>
        <div>
          <p className='text-base'>
            Verein Queer Coding Camp <br />
            8003 Zürich <br />
            <Link Icon={EnvelopeIcon} href='mailto:hi@queercodingcamp.ch'>
              hi@queercodingcamp.ch
            </Link>{' '}
            <br />
            <Link
              Icon={() => (
                <span className='align-top inline-block ml-2 mt-1'>
                  <Image
                    src={Instagram}
                    width={18}
                    height={18}
                    alt='Instagram'
                  />
                </span>
              )}
              href='https://www.instagram.com/queercodingcamp/'
            >
              @queercodingcamp
            </Link>
          </p>
        </div>
        <div>
          <LogoFullWhite size={80} className='hover:opacity-90 -ml-3' />
        </div>
      </div>
    </footer>
  )
}
