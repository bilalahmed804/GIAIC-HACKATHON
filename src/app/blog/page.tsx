import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Going all-in with millennial design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/Rectangle 11.png",
    },
    {
      title: "Exploring new ways of decorating",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/Rectangle 99.png",
    },
    {
      title: "Handmade pieces that took time to make",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/Rectangle 68.png",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">My Blog</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 space-y-6">
          {posts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <Image width={600} height={250}
                src={post.image} alt={post.title} className="rounded-lg" />
                <CardTitle className="mt-4">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <aside className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Categories</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-500">Design</Link></li>
              <li><Link href="#" className="text-blue-500">Lifestyle</Link></li>
              <li><Link href="#" className="text-blue-500">Handmade</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Recent Posts</h2>
            <ul className="space-y-2">
              {posts.map((post, index) => (
                <li key={index}>
                  <Link href="#" className="text-blue-500">{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <footer className="mt-6 flex justify-center space-x-2">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </footer>
    </div>
  );
}
