import { Button } from '@/components/ui/button'
import { BG_IMAGE } from '@/constants/image'
import { FC } from 'react'

const HomePage: FC = () => {
  const movetomap = () => {
    const targetElement = document.getElementById('map')
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('${BG_IMAGE}')`,
      }}
    >
      <div className="flex items-center justify-center h-full flex-col gap-2 px-8">
        <h1 className="text-black lg:text-5xl text-3xl font-bold">
          Welcome to <span className="text-orange-400">mySpot</span>
        </h1>
        <p className="text-black italic text-center">
          Share stories and pictures of each of your favorite places, and create
          a unique map
        </p>
        <Button className="bg-orange-400 text-white" onClick={movetomap}>
          Lets gooo
        </Button>
      </div>
    </div>
  )
}

export default HomePage
