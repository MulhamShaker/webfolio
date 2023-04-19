// import Footer from "./footer";
// import Navbar from "./navbar";




// const Layout = ({ children }) => {
//     return (
//         <div className="content">
//             <Navbar />
//             {children}
//             <Footer />
//         </div>
//     );
// }

// export default Layout;


type ChildrenType = React.ReactNode; 


interface MyComponentProps {
  children: ChildrenType;
}

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {

  return (
    <div className="content">
        {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}

