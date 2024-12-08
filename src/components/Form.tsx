import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "./ui/textarea"

export function Form() {
  return (
    <Tabs defaultValue="account" className="w-[400px] mb-10">
      <TabsContent value="account">
        <Card>
          <CardContent className="space-y-2">
            <div className="space-y-1 py-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input id="username" defaultValue="xyz@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Subject</Label>
              <Input id="username" defaultValue="Subject" />
            </div>
            <Label>Message</Label>
            <Textarea placeholder="Type your message here." />
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    
    </Tabs>
  )
}
