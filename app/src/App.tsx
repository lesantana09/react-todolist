import Text from './components/text';

export default function App() {

  return (
    <div className="flex flex-col gap-2">
       <Text variant="body-sm-bold" className="text-pink-base">
          Hello Vite + React!
        </Text>
       <Text className="text-green-base">
          Hello Vite + React!
        </Text>
       <Text variant="body-md-bold">
          Hello Vite + React!
        </Text>                
    </div>
   
  )
}
