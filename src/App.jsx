import Accordian from './Components/accordion'
import RandomColor from './Components/generateColor'
import Rating from './Components/starRating'
import ImageSlider from './Components/image-slider'
function App() {

  return (
      <div>
        {/* <Accordian /> */}
        {/* <RandomColor /> */}
        {/* <Rating noOfStars={5} /> */}
        <ImageSlider url = {"https://picsum.photos/v2/list"} page={'1'}  limit={'6'} />
      </div>


  )
}

export default App
