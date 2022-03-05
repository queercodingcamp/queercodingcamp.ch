import { Tab } from '@headlessui/react'
import Image from 'next/image'

import { classNames } from './utils/classNames'
import Button from './Button'
import A from './Link'

import twintQR from '../public/images/twintQR.png'
import paypalQR from '../public/images/paypalQR.png'

export default function Donate() {
  return (
    <div className='w-full max-w-md'>
      <Tab.Group>
        <Tab.List className='flex p-1 space-x-1 bg-gray-900/50 backdrop-saturate-200 rounded-xl'>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-md leading-5 font-medium text-white rounded-lg',
                'focus:outline-none',
                selected
                  ? 'bg-white text-slate-900 shadow'
                  : 'hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Stripe
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-md leading-5 font-medium text-white rounded-lg',
                'focus:outline-none',
                selected
                  ? 'bg-white text-slate-900 shadow'
                  : 'text-white hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Twint
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-md leading-5 font-medium text-white rounded-lg',
                'focus:outline-none',
                selected
                  ? 'bg-white text-slate-900 shadow'
                  : 'hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            PayPal
          </Tab>
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel className='bg-gray-900/50 backdrop-saturate-200 rounded-xl p-3 focus:outline-none'>
            <p className='pb-4 font-display'>Einmalige Spende</p>

            <div className='flex flex-row flex-wrap gap-4'>
              <Button
                outline
                className='font-display border-solid border-2 border-white text-white hover:bg-white hover:text-slate-900'
              >
                25 CHF
              </Button>
              <Button
                outline
                className='font-display border-solid border-2 border-white text-white hover:bg-white hover:text-slate-900'
              >
                50 CHF
              </Button>
              <Button
                outline
                className='font-display border-solid border-2 border-white text-white hover:bg-white hover:text-slate-900'
              >
                100 CHF
              </Button>
            </div>
            <hr className='border-white/50 my-6' />
            <p className='pb-4 font-display'>Jährliche Spende</p>
            <div className='flex flex-row flex-wrap gap-4'>
              <Button className='font-display text-slate-700 hover:opacity-80'>
                50 CHF
              </Button>
              <Button className='font-display text-slate-700 hover:opacity-80'>
                100 CHF
              </Button>
              <Button className='font-display text-slate-700 hover:opacity-80'>
                250 CHF
              </Button>
            </div>
          </Tab.Panel>
          <Tab.Panel className='bg-gray-900/50 backdrop-saturate-200 rounded-xl p-3 focus:outline-none'>
            <div className='flex flex-col items-center justify-center'>
              <div className='w-1/2'>
                <Image src={twintQR} alt='Twint QR code' />
              </div>
              <A
                className='text-center'
                taget='_blank'
                href='https://pay.raisenow.io/wcxgy'
              >
                Mit Twint Spenden
              </A>
            </div>
          </Tab.Panel>
          <Tab.Panel className='bg-gray-900/50 backdrop-saturate-200 rounded-xl p-3 focus:outline-none'>
            <div className='flex flex-col items-center justify-center '>
              <A
                className='text-center mb-6'
                taget='_blank'
                href='https://www.paypal.com/donate/?hosted_button_id=497MHVPBEXZJS'
              >
                Mit PayPal spenden
              </A>
              <div className='w-1/2'>
                <Image src={paypalQR} alt='Twint QR code' />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
