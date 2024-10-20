import React from 'react'
import { frontend, backend, database, tool } from "../resources/global"
import Icon from '@mdi/react'
import { mdiBattery70, mdiMagnify, mdiMenu, mdiPlus, mdiSignalCellular3, mdiSwapVertical, mdiTailwind, mdiWifi } from '@mdi/js'
import { FlipWords } from "../components/ui/flip-words";

const Skill = () => {
  return (
    <div className='flex w-full flex-col content-pointer-none'>
      <div className="flex justify-end me-10">
        <span className="text-4xl font-light"><span className="text-amber-400 font-bold">Tech</span> Stack</span>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded-lg lg:ronded-l-[2rem]"></div>
          <div className="relative bg-neutral-600 flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-light text-white max-lg:text-center">
                Frontend
              </p>
            </div>
            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[2cqw] border-t-[2cqw] border-gray-700 bg-gray-900 shadow-2xl">
                <div className="h-full object-cover">
                  <div className='mx-8 mt-3 mb-5 flex flex-row justify-between items-center'>
                    <div>
                      <span className='text-xs text-gray-600 font-medium'>9:41</span>
                    </div>
                    <div className='flex flex-row'>
                      <Icon path={mdiSignalCellular3} size={0.6} className='text-gray-600' />
                      <Icon path={mdiWifi} size={0.6} className='text-gray-600 mx-1' />
                      <Icon path={mdiBattery70} size={0.6} className='text-gray-600' />
                    </div>
                  </div>
                  <div className='mx-5 mb-3 flex flex-row justify-between items-center'>
                    <Icon path={mdiMenu} size={1} className='text-gray-500' />
                    <Icon path={mdiTailwind} size={1.5} className='text-indigo-500' />
                    <Icon path={mdiPlus} size={1} className='text-gray-500' />
                  </div>
                  <div className="mx-5 mb-3 flex flex-row justify-center items-center">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <Icon path={mdiMagnify} size={1} className='text-gray-500' />
                      </div>
                      <input
                        type="text"
                        placeholder="Search Frameworks..."
                        disabled
                        className="block w-full rounded-md border-0 bg-gray-800 py-1.5 pl-12 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                      <div className="absolute inset-y-0 me-3 right-0 flex items-center">
                        <button
                          type='button'
                          className='bg-gray-600 rounded-md px-2 py-0.5 text-xs font-light'
                          disabled
                        >
                          /
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 border-t border-gray-600">
                    <div className="mx-5 mt-3 mb-5 flex flex-row justify-between items-center">
                      <div>
                        <span className="text-white text-sm font-normal">Lists</span>
                      </div>
                      <div className='flex flex-row justify-center items-center'>
                        <span className="text-white text-sm font-normal">Sort by</span>
                        <Icon path={mdiSwapVertical} size={0.7} className='ms-1' />
                      </div>
                    </div>
                    <div className="mx-5 h-64 overflow-y-scroll scrollbar-hide object-cover grid grid-cols-2 gap-3">
                      {frontend.map(( item, index ) => (
                        <span key={ index } className='inline-flex items-center rounded-lg bg-gray-900 px-5 py-2 text-sm font-medium text-gray-200 ring-1 ring-inset ring-gray-500/10 hover:ring-green-500'>
                          <Icon path={item.icon} size={1} className={`me-1 ${item.iconColor}`} />
                          {item.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg ring-1 ring-white lg:rounded-l-[2rem]"></div>
        </div>
        <div className="relative max-lg:row-start-1">
          <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem]"></div>
          <div className="relative bg-slate-600 flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-white max-lg:text-center">
                Databases
              </p>
            </div>
            <div className="relative min-h-[12rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[2cqw] border-t-[2cqw] border-gray-700 bg-gray-900 shadow-2xl">
                <div className="h-36 overflow-y-scroll scrollbar-hide bg-gray-800 border-t border-gray-600">
                  <div className="mx-5 mt-3 mb-5 flex flex-row justify-between items-center">
                    <div>
                      <span className="text-white text-sm font-normal">Lists</span>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                      <span className="text-white text-sm font-normal">Sort by</span>
                      <Icon path={mdiSwapVertical} size={0.7} className='ms-1' />
                    </div>
                  </div>
                  <div className="mx-5 mb-3 object-cover grid grid-cols-2 gap-3">
                    {database.map(( item, index ) => (
                      <span key={ index } className='inline-flex justify-center items-center rounded-lg bg-gray-900 px-5 py-2 text-sm font-medium text-gray-200 ring-1 ring-inset ring-gray-500/10 hover:ring-green-500'>
                          {
                            !item.src &&
                            <span className='flex justify-center items-center h-7'>{item.title}</span>
                          }
                          {
                            item.src &&
                            <img
                              src={ item.src }
                              className='inline-block h-7 w-auto'
                            />
                          }
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-white max-lg:rounded-t-[2rem]"></div>
        </div>
        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div className="absolute inset-px rounded-lg"></div>
          <div className="relative bg-gray-600 flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-white max-lg:text-center">Tool</p>
            </div>
            <div className='relative min-h-[5rem] w-full grow [container-type:inline-size] max-lg:py-6 lg:pb-2'>
              <div className="absolute bottom-0 left-0 right-10 top-10 overflow-hidden rounded-tr-xl bg-gray-900 shadow-2xl">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm font-medium loading-6 text-gray-400">
                    <div className="border-b border-r border-b-white/20 border-r-white/20 bg-white/5 px-4 py-2 text-white">
                      ToolsManagement.tsx
                    </div>
                    <div className="border-r border-gray-600/10 px-4 py-2">App.tsx</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 px-6 pb-14 pt-6">
                  <span className="text-red-400">import </span><span className="text-white">React </span>
                  <span className="text-red-400">from </span><span className="text-sky-400">"react"</span><br />
                  <span className="text-red-400">import</span>
                  <FlipWords
                    words={tool.map(( item ) => (
                      item.title
                    ))}
                    className='text-white'
                  />
                  <span className="text-red-400">from</span><span className="text-sky-400">"../resources/global.tsx"</span><br />
                  <span className="text-red-400">import </span><span className="text-white">{"{ cn }"} </span>
                  <span className="text-red-400">from </span><span className="text-sky-400">"@/lib/utils"</span><br />
                  <span className="text-red-400">import </span><span className="text-white">{"{ CanvasRevealEffect }"} </span>
                  <span className="text-red-400">from </span><span className="text-sky-400">"../components/ui/canvas-reveal-effect"</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-white"></div>
        </div>
        <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div className="relative bg-zinc-600 flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-white max-lg:text-center">
                Backend
              </p>
            </div>
            <div className="relative min-h-[30rem] w-full grow">
              <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                    <div className="border-b border-r border-b-white/20 border-r-white/20 bg-white/5 px-4 py-2 text-white">
                      BackendManagement.tsx
                    </div>
                    <div className="border-r border-gray-600/10 px-4 py-2">App.tsx</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 px-6 pb-14 pt-6">
                  <span className="text-red-400">import </span><span className="text-white">React </span>
                  <span className="text-red-400">from </span><span className="text-sky-400">"react"</span><br />
                  <span className="text-red-400">import </span><span className="text-white">Icon </span>
                  <span className="text-red-400">from </span><span className="text-sky-400">"@mdi/react"</span><br />
                  <span className="text-red-400">import </span><span className="text-white">{"{ cn }"} </span>
                  <span className="text-red-400">from </span><span className="text-sky-400">"@/lib/utils"</span><br />
                  <span className="text-red-400">import </span><span className="text-white">{"{ CanvasRevealEffect }"} </span>
                  <span className="text-red-400">from </span><span className="text-sky-400">"../components/ui/canvas-reveal-effect"</span><br />
                  <span className="text-red-400">import </span><span className="text-white">{"{ mdiNumeric1Circle }"} </span>
                  <span className="text-red-400">from </span><span className="text-sky-400">"@mdi/js"</span><br />
                  <span className="text-red-400">import</span>
                  <FlipWords
                    words={backend.map(( item ) => (
                      item.title
                    ))}
                    className='text-white'
                  />
                  <span className="text-red-400">from </span><span className="text-sky-400">"../resources/global.tsx"</span><br /><br />
                  <span className="text-red-400">const </span><span className="text-violet-400">Backend </span>
                  <span className="text-red-400">= </span><span className="text-blue-400">()</span>
                  <span className="text-red-400"> =&gt; </span><span className="text-blue-400">&#123;</span><br />
                  <span className="text-red-400 ps-4">return</span><span className="text-green-500 ps-2">(</span><br />
                  <span className="text-white ps-8">&lt;</span><span className="text-green-400">div</span>
                  <span className="text-blue-400 ps-1">className</span><span className="text-red-400">=</span>
                  <span className="text-blue-400">"flex flex-col justify-center items-center h-screen"</span><span className="text-white">&gt;</span><br />
                  <span className="text-white ps-16">&lt;</span><span className="text-green-400">Card</span><br />
                  <span className="text-blue-400 ps-20">icon</span><span className="text-red-400">=</span>
                  <span className="text-yellow-400">&#123; <span className="text-blue-400">mdiNumeric1Circle</span> &#125;</span><br />
                  <span className="text-blue-400 ps-20">step</span><span className="text-red-400">=</span>
                  <span className="text-blue-400">"Deployments"</span><br />
                  <span className="text-blue-400 ps-20">title</span><span className="text-red-400">=</span>
                  <FlipWords
                    words={backend.map(( item ) => (
                      `"${item.title}"`
                    ))}
                    className='text-blue-400 px--1'
                  /><br />
                  <span className="text-blue-400 ps-20">title</span><span className="text-red-400">=</span>
                  <span className="text-blue-400">"This our portfolio"</span><br />
                  <span className="text-white ps-16">&gt;</span><br />
                  <span className="text white ps-20">&lt;</span><span className="text-green-400">CanvasRevealEffect</span><br />
                  <span className="text-white ps-8">&lt;/</span><span className="text-green-400">div</span>
                  <span className="text-white">&gt;</span><br />
                  <span className="text-green-500 ps-4">)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
      </div>
    </div>
  )
}

export default Skill