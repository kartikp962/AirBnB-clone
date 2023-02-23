// 1
// import React from "react"
// import Navbar from "./components/Navbar"
// import './App.css';

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/



// export default function App() {
//     return (
//       <div>
//         <Navbar />
//       </div>
//     )
// }


// // 2
// import React from "react"
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Card from "./components/Card";
// import './App.css';
/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/


// <Hero />



// export default function App() {
//     return (
//         <div>
//             <Navbar />
//             <Card />
//         </div>
//     )
// }


// 3
// import React from "react"
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Card from "./components/Card";
// import MyImage from './images/katie-zaferes.png'
// import './App.css';

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

// <Hero />



// export default function App() {
//     return (
//         <div>
//             <Navbar />
//             <Card
//                 img={MyImage}
//                 rating="5.0"
//                 reviewCount={6}
//                 country="USA"
//                 title="Life Lessons with Katie Zaferes"
//                 price={136}
//             />
//         </div>
//     )
// }


// 4
import React from "react"
import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
import Card from "./components/Card";
import data from "./data"
import './App.css';
import Hero from "./components/Hero";

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
            key={item.id}
            {...item}
        />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}