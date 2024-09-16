import { FC } from 'react'
import Map from '@/components/common/Map'
import ModalInput from '@/components/common/ModalInput'
import SelectPlace from '@/components/common/SelectPlace'

const MapPage: FC = () => {
  return (
    <div id="map" className="h-screen">
      <div className="p-8 flex lg:flex-row flex-col lg:justify-between lg:items-start items-center gap-2">
        <h1 className="text-3xl font-semibold text-orange-400">
          Create your fav spot
        </h1>
        <div className="flex gap-2">
          <ModalInput type="add" />
          <SelectPlace />
        </div>
      </div>
      <div className="px-8">
        <Map />
        <p className="text-center italic mt-4">
          hopefully I will have the opportunity to go to that place😊
        </p>
      </div>
    </div>
  )
}
export default MapPage
