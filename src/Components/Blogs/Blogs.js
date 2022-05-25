import React from 'react';
import { FaReact, FaProductHunt, FaReacteurope } from 'react-icons/fa';
import { GiMatterStates, GiHypodermicTest, GiSwordArray } from 'react-icons/gi';
// import { VscSymbolArray } from 'react-icons/vs';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
        <h2 className='text-5xl font-bold text-center text-primary'>Our Tech Blog!</h2>
        <br />
        <div className='grid grid-cols-1 lg:grid-cols-3 px-2 gap-2'>
            <div className='flex bg-accent text-white p-3'>
                <div class="avatar">
                    <div class="w-16 rounded">
                    <FaReact className='text-5xl mt-3' />
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl'>How will you improve the performance of a React Application?</h3>
                    <p>There are many more ways to optimize the performance of a React app. For example using service workers to cache application state, using useMemo, using virtualize long lists, avoiding unnecessary renders and many more. Thanks for reading and hope you found this article helpful.</p>
                </div>
            </div>
            <div className='flex bg-primary text-white p-3'>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <GiMatterStates className='text-5xl mt-3' />
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl'>What are the different ways to manage a state in a React application?</h3>
                    <p>What you need to do is store your theme setting in a Redux or MobX store, or in a plain JavaScript object, and pass it to all your components using Context. I had no idea state management was the solution to the prop drilling problem until I learned about Redux, out of curiosity. To make things worse, many articles say you can build non-trivial web apps without state management, which initially deterred me from even learning about it.</p>
                </div>
            </div>
            <div className='flex bg-secondary text-white p-3'>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <FaReacteurope className='text-5xl mt-3' />
                    </div>
                </div>
                <div>
                <h3 className='text-3xl'> How does prototypical inheritance work?</h3>
                    <p>In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

Prototypal inheritance is a language feature that helps in that.</p>
                    
                </div>
            </div>
            <div className='flex bg-secondary text-white p-3'>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <FaProductHunt className='text-5xl mt-3' />
                    </div>
                </div>
                <div>
                <h3 className='text-3xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h3>
                    <p>React keeps a copy of the previous state and uses it as a reference point. When we use setState, it creates a new item in the systems memory… a distinctly different item from the original… Now, React has the ability to distinguish what needs to be re-rendered based on the previous state.</p>
                    
                </div>
            </div>
            <div className='flex bg-accent text-white p-3'>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <GiSwordArray className='text-5xl mt-3' />
                    </div>
                </div>
                <div>
                <h3 className='text-3xl'>You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                    <p>You must write Javascript code to loop thru the list of all products, produce the HTML code for each, append to previous products HTML, and output the whole resulting catalog on the screen. Reminder: syntax to read a property, example get the price of the second product in the list: products[1].price
If for a product the qty_in_stock is 0 , do not show the product on the web page
Your code must work with an array of any amount of product, do not hardcode the list of 6 products by copy/paste the HTML above ! You must use a for loop for example. If a product is removed or added to the list, the code doesn't need to be modified.</p>
                    
                </div>
            </div>
            <div className='flex bg-neutral text-white p-3'>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <GiHypodermicTest className='text-5xl mt-3' />
                    </div>
                </div>
                <div>
                <h3 className='text-3xl'>What is a unit test? Why should write unit tests?</h3>
                    <p>Let’s start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
                    
                </div>
            </div>
            </div>
        </div>
                    );
};

                    export default Blogs;