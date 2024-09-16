import { FC, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { pointSchema, PointType } from '@/domains'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { usePoints } from '@/context/PointContext'
import { random_numbers } from '@/lib/random_numbers'
import { useToast } from '@/hooks/use-toast'

const ModalInput: FC<{ type: string; data?: PointType }> = ({ type, data }) => {
  const { toast } = useToast()
  const { points, setPoints } = usePoints()
  const [dialogOpen, setDialogOpen] = useState(false)

  const form = useForm<PointType>({
    resolver: zodResolver(pointSchema),
    defaultValues: {
      title: data?.title || '',
      latitude: data?.latitude || '',
      longitude: data?.longitude || '',
      description: data?.description || '',
      image: data?.image || '',
    },
  })

  const onSubmit = (values: PointType) => {
    if (type === 'edit' && data) {
      const updatedPoints = points.map((point) =>
        point.id === data.id ? { ...point, ...values } : point
      )
      setPoints(updatedPoints)
      toast({
        title: '✅ success edit place!',
      })
    } else {
      setPoints([...points, { id: random_numbers(), ...values }])
      toast({
        title: '✅ success add new place!',
      })
      form.reset()
    }
    setDialogOpen(false)
  }

  useEffect(() => {
    if (data) {
      form.reset({
        title: data.title,
        latitude: data.latitude,
        longitude: data.longitude,
        description: data.description,
        image: data.image,
      })
    }
  }, [data, form])

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger>
        <Button
          className="hover:bg-orange-400"
          onClick={() => setDialogOpen(true)}
        >
          {type === 'add' ? 'Add New Spot' : 'Edit Spot'}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {type === 'add' ? 'Please enter your favorite spot!' : 'Edit Spot'}
          </DialogTitle>
          <DialogContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="latitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Latitude</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Latitude"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Longitude</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Longitude"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input type="url" placeholder="Image URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  {type === 'add' ? 'Submit' : 'Save Changes'}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ModalInput
