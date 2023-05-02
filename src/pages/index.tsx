// Internal dependencies
import Button from "@/components/Button"
import AlertProvider from "@/context/AlertProvider"

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 "
    >
      <div className='flex flex-col gap-5'>
        <Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Use context without provider present
        </Button>

        <AlertProvider>
          <Button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Use context with provider present
          </Button>
        </AlertProvider>
      </div>
    </main>
  )
}
