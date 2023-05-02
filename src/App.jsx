import './App.css'
import reaction from "./assets/images/icon-reaction.svg"
import memory from "./assets/images/icon-memory.svg"
import verbal from "./assets/images/icon-verbal.svg"
import visual from "./assets/images/icon-visual.svg"



function App() {
  return (<main className='m-0 p-0 box-border items-center font-Hanken lg:h-screen lg:grid justify-items-center content-center items-center  '>

    <div className="lg:flex lg:max-w-2xl lg:shadow-2xl lg:rounded-3xl">
      <div className='bg-gradient-to-t from-lightRoyalBlueBackground  from-10% to-lightSlateBlueBackground text-center px-10 py-4 text-white rounded-b-3xl lg:w-6/12 lg:rounded-3xl'>
        <p className='text-lightLavender my-3'> Your Result</p>
        <div className='my-3 inline-block rounded-full bg-gradient-to-t from-persianBlueCircle to-violetBlueCircle px-8 py-6 lg:px-12 lg:py-10'>
          <p className="text-5xl"> 76</p>
          <p className='text-lightLavender text-sm my-0.5'> of 100</p>
        </div>
        <div className="px-6 my-2 lg:mt-10">
          <p className='text-2xl my-2'>Great</p>
          <p className='font-light text-lightLavender text-sm my-2'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
      <div className="px-8 py-4 flex flex-col lg:w-6/12">
        <h2 className="font-bold my-2">
          Summary
        </h2>

        <ul className="flex flex-col gap-4 my-4">
          <li className="list-none flex justify-between text-sm border-0 rounded-lg px-3 py-4 bg-lightRedBG">
            <p className='flex gap-3'>
              <img src={reaction} alt="reaction-img" className="block" />
              <span className='text-lightRed font-bold'>Reaction</span>
            </p>
            <p className="font-bold">
              <span>80</span>
              <span className='text-lightLavender'> / 100</span>
            </p>
          </li>
          <li className="list-none flex justify-between text-sm border-0 rounded-lg px-3 py-4 bg-orangeYellowBG">
            <p className='flex gap-3'>
              <img src={memory} alt="memory-img" className="block" />
              <span className='text-orangeYellow font-bold'>Memory</span>
            </p>
            <p className="font-bold">
              <span>92</span>
              <span className='text-lightLavender'> / 100</span>
            </p>
          </li>
          <li className="list-none flex justify-between text-sm border-0 rounded-lg px-3 py-4 bg-greenTealBG">
            <p className='flex gap-3'>
              <img src={verbal} alt="verbal-img" className="block" />
              <span className='text-greenTeal font-bold'>Verbal</span>
            </p>
            <p className="font-bold">
              <span>61</span>
              <span className='text-lightLavender'> / 100</span>
            </p>
          </li>
          <li className="list-none flex justify-between text-sm border-0 rounded-lg px-3 py-4 bg-cobaltBlueBG">
            <p className='flex gap-3'>
              <img src={visual} alt="visual-img" className="block" />
              <span className='text-cobaltBlue font-bold'>Visual</span>
            </p>
            <p className="font-bold">
              <span>72</span>
              <span className='text-lightLavender'> / 100</span>
            </p>
          </li>
        </ul>

        <button className="bg-darkGrayBlue hover:bg-lightRoyalBlueBackground text-white py-3 px-2 border-0 rounded-3xl my-2">Continue</button>
      </div>
    </div>
  </main >

  )
}

export default App
