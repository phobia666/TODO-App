import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Card from './Card'

const Categories = ({open, del, editOpen}) => {

  const [landingCount, setLandingCount] = useState(0);
  const [meetingCount, setMeetingCount] = useState(0);
  const [uiuxCount, setUiuxCount] = useState(0);
  const [developTasks, setDevelopTasks] = useState(0);
  const [bugFixes, setBugFixes] = useState(0);
  const [clientFixes, setClientFixes] = useState(0);
  const [research, setResearch] = useState(0)
  const [marketing, setMarketing] = useState(0)
  const [contentWriting, setContentWriting] = useState(0)
  const [testingQA, setTestingQA] = useState(0)

  const getTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const tasks = await response.json();
    
    setLandingCount(tasks.filter(task => task.category === 'Landing Page Designs').length);
    setMeetingCount(tasks.filter(task => task.category === 'Meeting Page Designs').length);
    setUiuxCount(tasks.filter(task => task.category === 'UI/UX Designs').length);
    setDevelopTasks(tasks.filter(task => task.category === 'Development Tasks').length);
    setBugFixes(tasks.filter(task => task.category === 'Bug Fixes').length);
    setClientFixes(tasks.filter(task => task.category === 'Client Reviews').length);
    setResearch(tasks.filter(task => task.category === 'Research').length);
    setMarketing(tasks.filter(task => task.category === 'Marketing').length);
    setContentWriting(tasks.filter(task => task.category === 'Content Writing').length);
    setTestingQA(tasks.filter(task => task.category === 'Testing & QA').length);

  }

  useEffect(() => {
    getTasks();
  }, [open, del, editOpen])

  const data = [
  { title: 'Meeting Page Designs', projects: meetingCount },
  { title: 'Landing Page Designs', projects: landingCount },
  { title: 'UI/UX Designs', projects: uiuxCount },
  { title: 'Development Tasks', projects: developTasks },
  { title: 'Bug Fixes', projects: bugFixes },
  { title: 'Client Reviews', projects: clientFixes },
  { title: 'Research', projects: research },
  { title: 'Marketing', projects: marketing },
  { title: 'Content Writing', projects: contentWriting },
  { title: 'Testing & QA', projects: testingQA },
]

  const [active, setActive] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    containScroll: false,
    dragFree: false,
  })

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => setActive(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <h2 className='font-medium text-3xl tracking-wide'>Categories</h2>

      <div className='overflow-hidden  w-full py-6' ref={emblaRef}>
        <div className='flex gap-6'>
          {data.filter(elem => elem.projects != 0).map((card, i) => (
            <div
              key={i}
              className='flex-none w-56 transition-transform duration-300'
              onClick={() => emblaApi?.scrollTo(i)}
            >
              <Card active={i === active} title={card.title} projects={card.projects} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons for manual loop navigation */}
      <div className='flex gap-4'>
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className='bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl'
        >‹</button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className='bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl'
        >›</button>
      </div>
    </div>
  )
}
export default Categories