import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen w-screen flex items-center justify-center flex-col gap-8">
      <div className="flex items-center flex-col">
        <h1 className="text-4xl">Hello World</h1>
        <h2>Destroy complexity, create beauty.</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            pulvinar nibh id felis placerat, euismod aliquet odio rutrum.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
