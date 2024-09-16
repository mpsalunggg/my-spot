# My Spot

My Spot is a geographic information system (GIS) based application that allows users to create location points with images, descriptions, and associated titles for each point entered. the data is stored in the user's browser localstorage so that the stored data is not lost when added, but it is only in the browser. This is link deploy -> [Link](https://my-spot-pearl.vercel.app/)

## Table of Contents

- [Data](#data)
- [Our Feature](#our-feature)
- [How To Run Project](#how-to-run-project)
- [Main Stack](#main-stack)

### Data

Example Data and type:

```bash
{
  id: number,
  title: string,
  latitude: string | number,
  longitude: string | number,
  description: string,
  image: string
}
```

### Our Feature

- Create point location
- Read detail point location
- Update point location
- Delete point location
- Add toast Alert
- Select location

### How To Run Project

- Use node > 20
- Clone Repository
  Clone repository:

  ```bash
  // with https
  git clone https://github.com/mpsalunggg/my-spot.git
  // with ssh
  git clone git@github.com:mpsalunggg/my-spot.git
  cd my-spot
  ```

- Install Dependencies

  ```bash
  yarn install
  // or
  npm install
  ```

- Run Server Development

  ```bash
  yarn dev
  // or
  npm run dev
  ```

### Main Stack

- Typescript
- React Vite
- ShadcnUI / based on RadixUI
- React Hook Form
- Zod
- Tailwind CSS
- React-leaflet
