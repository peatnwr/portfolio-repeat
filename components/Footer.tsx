import React from 'react'
import Icon from '@mdi/react'
import { mdiInstagram, mdiFacebook, mdiGithub } from '@mdi/js'

const Footer = () => {
  return (
    <footer className='w-full mt-10 mb-5'>
        <div className="flex w-full items-center rounded-full">
            <hr className="flex-1 h-0.5 border-b border-neutral-100"></hr>
            <div className="flex flex-row justify-center items-center loading-8 px-8 py-3">
                <a href="https://www.facebook.com/peatt.repeat/" target='_blank'>
                    <Icon path={mdiFacebook} size={1} />
                </a>
                <a href="https://www.instagram.com/pnwrpcr_/" target='_blank' className='mx-3'>
                    <Icon path={mdiInstagram} size={1} />
                </a>
                <a href="https://github.com/peatnwr" target='_blank'>
                    <Icon path={mdiGithub} size={1} />
                </a>
            </div>
            <hr className="flex-1 h-0.5 border-b border-neutral-100"></hr>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-neutral-500 text-sm font-bold">
                Copyright © 2024 Repeat
            </p>
            <div className="flex justify-between w-full">
                <div className='ms-3'>
                    <span className="text-neutral-400 text-sm">TH/Thailand</span>
                </div>
                <div className='me-3'>
                    <span className="text-neutral-400 text-sm me-4">
                        090-027-3067
                    </span>
                    <span className="text-neutral-400 text-sm">
                        nwrpeat@gmail.com
                    </span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer