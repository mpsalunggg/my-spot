import { FC } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { PointType } from '@/domains'
import { usePoints } from '@/context/PointContext'
import { usePlacePoint } from '@/context/PlaceContext'
import DetailPlace from './DetailPlace'
import { POINT_MAP } from '@/constants/image'

const Map: FC = () => {
  const { points } = usePoints()
  const { selectedPoint } = usePlacePoint()

  const MapFlyToPoint = ({ point }: { point?: PointType }) => {
    const map = useMap()

    if (point) {
      map.setView([Number(point.latitude), Number(point.longitude)], 10)
    }
    return null
  }

  return (
    <div className="w-full lg:h-[700px] h-[400px]">
      <MapContainer
        center={[-0.7269477819059036, 118.11615349782144]}
        zoom={6}
        className="h-full w-full"
      >
        <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />
        {selectedPoint && (
          <MapFlyToPoint
            point={points.find((point) => point.id === selectedPoint)}
          />
        )}

        {points.map((point) => (
          <Marker
            key={point.id}
            position={[Number(point.latitude), Number(point.longitude)]}
            icon={L.icon({
              iconUrl: POINT_MAP,
              iconSize: [35, 35],
              iconAnchor: [16, 37],
            })}
          >
            <Popup className="pb-8 ml-[1.5px]">
              <DetailPlace data={point} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map
