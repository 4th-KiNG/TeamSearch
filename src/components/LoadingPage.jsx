import './LoadingPage.css'
import { ball } from '../assets';

const LoadingPage = () => {
    return (
        <>
        <div className="loadingPage">
           <img className='loadingico' src={ball} alt="" />
           <p>Loading...</p>
        </div>
        </>
    );
}
 
export default LoadingPage;