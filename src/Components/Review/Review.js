import React from 'react';

const Review = () => {
    const reviewJson = [
        {

        }
    ]
    return (
        <div>
            <h2 className="text-5xl font-bold text-center"> What Our Customer Say!</h2>
           <br />
            <div className='grid grid-cols-1 lg:grid-cols-3 px-2 gap-2'>
            <div className='flex p-2'>
                <div class="avatar">
                    <div class="w-16 m-2 rounded">
                        <img src="https://api.lorem.space/image/face?hash=80245" />
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl'>Emrica barnerdo</h3>
                    <p>Whenever I search any product on their website , I got every products of mine are available.</p>
                    <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
</div>
                </div>
            </div>
            <div className='flex p-2 bg-neutral text-secondary'>
                <div class="avatar">
                    <div class="w-16 m-2 rounded">
                        <img src="https://api.lorem.space/image/face?hash=77703" />
                    </div>
                </div>
                <div>
                <h3 className='text-3xl'>Silva barnerdo</h3>
                    <p>They provide best agricultural product in cheap rate I mean in best rate .I personnaly like them.</p>
                    <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
</div>
                </div>
            </div>
            <div className='flex p-2'>
                <div class="avatar">
                    <div class="w-16 m-2 rounded">
                        <img src="https://api.lorem.space/image/face?hash=92048" />
                    </div>
                </div>
                <div>
                <h3 className='text-3xl'>Salvika maew</h3>
                    <p>I am happy with their good products and customer service. I'm their regular customer.</p>
                    <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Review;