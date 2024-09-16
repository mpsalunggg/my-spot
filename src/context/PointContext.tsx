import {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'
import { PointType } from '@/domains'
import { DATA_DEFAULT } from '@/constants/data'
import { LOCAL_STORAGE_KEY } from '@/constants/localstorage'

interface PointsContextType {
  points: PointType[]
  setPoints: Dispatch<SetStateAction<PointType[]>>
}

const PointsContext = createContext<PointsContextType | undefined>(undefined)

export const usePoints = (): PointsContextType => {
  const context = useContext(PointsContext)
  if (!context) {
    throw new Error('usePoints must be used inside PointsProvider')
  }
  return context
}

export const PointsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [points, setPoints] = useState<PointType[]>(() => {
    const savedPoints = localStorage.getItem(LOCAL_STORAGE_KEY)
    return savedPoints ? JSON.parse(savedPoints) : DATA_DEFAULT
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(points))
  }, [points])

  return (
    <PointsContext.Provider value={{ points, setPoints }}>
      {children}
    </PointsContext.Provider>
  )
}
