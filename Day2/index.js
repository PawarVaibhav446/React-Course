
// let main = <div>
//     <h1>My 2nd Day Of learning React.</h1>
//     <p>React is too much fun and i love it!!!!</p>
// </div>
// console.log(main);

// ReactDOM.render(
//     <div>
//         <h1>My 2nd Day Of learning React.</h1>
//         <p>React is too much fun and i love it!!!!</p>
//     </div>,
//     document.getElementById("root")
// )
// //or
// ReactDOM.render(
//     main,
//     document.getElementById("root")
// )


// Challenge 1
// const pr = (
//     <nav>
//         <h1>Royal Homoeo Pharmacy</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// ) 

// ReactDOM.render(pr, document.getElementById("root"))

// Challenge 2
// const jsx = (
//     <nav>
//         <h2>Hello 2nd Challenge of the day.</h2>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//         <p>Hello How are you ? will i able to complete this course...............</p>
//     </nav>
// )

// document.getElementById("root").append(jsx)
// document.getElementById("root").append(JSON.stringify(jsx))

// Challenge 3
// const sample = (
//     <div>
//         <div>
//             <img src="/Day2/ReactLogo.png" alt="#" width="40px"></img>
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100K starts on Github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of mobile apps, including enterprise apps</li>
//             </ul>
//         </div>
//     </div>
// )

// ReactDOM.render(sample, document.getElementById("root"))

// function MyName(){
//     return(
//         <h1>Vaibhav Tukaram Pawar</h1>
//     )
// }

// ReactDOM.render(<MyName />, document.getElementById("root"))






import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function Challenge() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Challenge />, document.getElementById("root"))