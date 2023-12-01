import React from 'react'
import image1 from './images/task1.1.png'
import image2 from './images/task1.2.png'
import image3 from './images/task1.3.png'
import image4 from './images/task1.4.png'
import image5 from './images/task4.1.png'
import image6 from './images/task4.1.png'
import image8 from './images/task4_2.2_1.png'
import image7 from './images/task4_2.2_2.png'
import image9 from './images/task4_2.2_3.png'
import image10 from './images/task4_2.2_4.png'
import image11 from './images/task4_2.3_1.png'
import image12 from './images/task4_2.3_2.png'
import image13 from './images/task4_2.3_3.png'
import image14 from './images/task4_2.3_4.png'

function App() {
	return (
		<>
			<div className='theory'>
				<h1 className='section-heading'>Theoretical Part</h1>
				<h1>Task 1.1</h1>
				<h2>Ethernet Standards</h2>
			</div>

			<div className='screenshots'>
				<h1 className='section-heading'>Practical Part</h1>
				<h2>2.1.1.</h2>
				<img src={image1} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image2} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image3} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image4} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<h2>2.1.2.</h2>
				<img src={image7} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image8} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image9} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image10} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<h2>2.1.3.</h2>
				<img src={image11} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image12} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image13} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image14} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<h2>2.1.4.</h2>
				<img src={image5} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
				<img src={image6} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
			</div>
		</>
	)
}

export default App
