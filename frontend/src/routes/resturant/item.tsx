import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resturant/item')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/resturant/item"!</div>
}
