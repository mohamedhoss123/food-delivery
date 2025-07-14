import { createFileRoute } from '@tanstack/react-router'
import { Input } from "@/components/ui/input"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
export const Route = createFileRoute('/resturant/item')({
  component: RouteComponent,
})

function RouteComponent() {

  return <div className="w-full p-8">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-5">
        <Input placeholder="search " className="w-72"></Input>
        <Button>search</Button>
      </div>
      <Dialog >
        <DialogTrigger><Button>Create Item</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Item</DialogTitle>
          </DialogHeader>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="name" />

                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="price" />
                <Label htmlFor="image">Image</Label>
                <Input id="image" className="w-full h-12" placeholder="image" type="file"  />
                <Button>Submit</Button>
        </DialogContent>
      </Dialog>
    </div>
    <div className="pt-12">
        <h2 className="text-2xl font-bold">Items</h2>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>

  </div>
}
