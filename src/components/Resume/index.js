import React from 'react';
import Footer from '../Footer';

function Resume(){

    return(
  
  


<section className='my-5'>
<div className='container d-flex flex-column text-center'>
    <div className='p-2'>
    <h6 id='about'><a href='https://docs.google.com/document/d/1n-z7V0MitDuMM2nfoCiVof61wQYvdY44nM_6lBu45dE/export?format=pdf' target='blank' download>Download PDF</a></h6>

</div>

<div className='p-2'>
<iframe title='Resume' src="https://docs.google.com/document/d/e/2PACX-1vSIA5-jCj4FFwSqoqkzWjagW7btchZTfaNUYOd3ad1dZVA6K1_WNPJov6wvgk_89Ujfbha1b_wPsIaV/pub?embedded=true" width='800px' height='850px'/>
</div>
</div>
<div><Footer/></div>
</section>
    )
}

export default Resume;