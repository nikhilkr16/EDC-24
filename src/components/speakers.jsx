import React from "react";

function Speakers() {
    return(
        <>
        <div className="flex flex-wrap justify-center items-center mb-16">
          <div className="glass-morphic pb-6 rounded-lg w-full max-w-7xl mt-6">
          <div className="m-0 border-y-0 p-12">
        <div className="flex flex-row justify-start items-center">
          <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
          <h1 className="text-[25px] ml-[-25px] font-bold">Speakers</h1>
        </div>
        <div className="mt-12">
          <h1 className="text-[35px] font-bold">Some Past Speakers</h1>
        </div>
      </div>
            <div className="flex relative overflow-hidden min-h-[400px] sm:h-auto">
              <div className="scrolling-cards flex space-x-6 animate-scroll1 mr-6">
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 1</h3>
                  <p>Some content for card 1.</p>
                </div>
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 2</h3>
                  <p>Some content for card 2.</p>
                </div>
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 3</h3>
                  <p>Some content for card 3.</p>
                </div>
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 4</h3>
                  <p>Some content for card 4.</p>
                </div>
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 5</h3>
                  <p>Some content for card 5.</p>
                </div>
              </div>
            
            <div className="scrolling-cards flex space-x-6 animate-scroll2">
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 1</h3>
                  <p>Some content for card 1.</p>
                </div>
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 2</h3>
                  <p>Some content for card 2.</p>
                </div>
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 3</h3>
                  <p>Some content for card 3.</p>
                </div>
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 4</h3>
                  <p>Some content for card 4.</p>
                </div>
                <div className="card w-full sm:w-[300px] h-auto sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">Card 5</h3>
                  <p>Some content for card 5.</p>
                </div>
              </div>
              </div>
            <div className="flex flex-col justify-center items-center">
              <button className="p-4 rounded-xl bg-[#FED853] font-bold">Know More</button>
            </div>
          </div>
        </div>
        </>
    )
}

export default Speakers