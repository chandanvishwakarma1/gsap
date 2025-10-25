import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-4xl text-indigo-400">hi,from h1</h1>hi,from home page
    </div>
  )
}

export default App
