import burgundybg from '../assets/image.png'
import './parents.css'
// import ivorycard from '../assets/ivory.jpg'
import pearl from '../assets/newivory.jpg'
import RosePetals from './rosepetals'

function Althaf({fade}){
    return(
        <div className='parents-page'>
            <RosePetals/>
            <div className="ivory-wrapper">
                
                <img src={pearl} alt="" className='ivory-card' />
                <div className={`invitation-content invitation-transition ${fade ? '' : 'fade-out'}`} >
                    <p className='bismillah'>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                    <p className='together'>TOGETHER WITH THEIR FAMILY</p>
                    <div className='parents-details'>
                    <h3 className='couple1'>ALTHAF</h3>
                    <h4 className='parent1'>S/o Alavikutty & Kadeeja</h4>
                    <h3 className='parent1'>and</h3>
                    <h3 className='couple1'>IRFANA THASNI</h3>
                    <h4 className='parent1'>D/o </h4>
                    </div>
                    
                    <p className='request'>REQUEST THE PLEASURE OF YOUR COMPANY</p>
                    <p className='celebrate'>As they celebrate their wedding</p>

                </div>
            </div>
            
        </div>
    )
}
export default Althaf