import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => {
  return (
    <div className='bg-white flex flex-col min-h-screen justify-between'>
        <Header/>
        <div className='mt-24 mx-6 md:mx-24'>
            {children}
        </div>
        <Footer/>
    </div>
  );
};