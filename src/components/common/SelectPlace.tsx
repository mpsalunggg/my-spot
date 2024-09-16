import { FC } from 'react'
import { usePlacePoint } from '@/context/PlaceContext'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { usePoints } from '@/context/PointContext'

const SelectPlace: FC = () => {
  const { points } = usePoints()
  const { setSelectedPoint } = usePlacePoint()

  return (
    <Select onValueChange={(value) => setSelectedPoint(Number(value))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select your place" />
      </SelectTrigger>
      <SelectContent className="z-[9999]">
        {points.length ? (
          points.map((point) => (
            <SelectItem key={point.id} value={String(point.id)}>
              {point.title}
            </SelectItem>
          ))
        ) : (
          <SelectItem disabled value="-">
            Nothing Place
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}

export default SelectPlace
