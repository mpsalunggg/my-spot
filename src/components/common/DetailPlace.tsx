import { FC } from 'react'
import ModalInput from './ModalInput'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { PointType } from '@/domains'
import { CopyIcon } from '@radix-ui/react-icons'
import { usePoints } from '@/context/PointContext'
import { usePlacePoint } from '@/context/PlaceContext'
import { useToast } from '@/hooks/use-toast'

const DetailPlace: FC<{ data: PointType }> = ({ data }) => {
  const { toast } = useToast()
  const { id, title, image, latitude, longitude, description } = data
  const { setPoints } = usePoints()
  const { selectedPoint, setSelectedPoint } = usePlacePoint()

  const copyToClipboard = () => {
    const coordinates = `${latitude}, ${longitude}`
    navigator.clipboard.writeText(coordinates).then(() => {
      toast({
        title: '✅ success copied!',
      })
    })
  }

  const removePoint = (id?: number) => {
    setPoints((prevPoints) => {
      const updatedPoints = prevPoints.filter((point) => point.id !== id)
      if (selectedPoint === id) {
        setSelectedPoint(null)
      }
      return updatedPoints
    })
    toast({
      title: '✅ success delete place!',
    })
  }
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-2">
        <div
          className="w-full h-36 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </CardHeader>
      <CardContent>
        <div className="space-y-0">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p>{description}</p>
          <div className="flex items-center gap-2">
            <CopyIcon className="cursor-pointer" onClick={copyToClipboard} />
            <p className="text-xs">
              {latitude} ,{longitude}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="space-x-4">
        <ModalInput type="edit" data={data} />
        <Button variant="destructive" onClick={() => removePoint(id)}>
          Delete Place
        </Button>
      </CardFooter>
    </Card>
  )
}

export default DetailPlace
