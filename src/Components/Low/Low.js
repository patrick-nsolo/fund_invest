import React from 'react'
import './Low.css'

const Low = () => {
  return (
    <div>
        <div>
            <h1>Hello User,</h1> 
            <h2>You have selected a low Risk tolerance level</h2>
        </div>
        <div className='dynamic-bar'>
            <table id="data-table" border="1" cellpadding="10" cellspacing="0" summary="skillset">
                <thead>
                    <tr>
                        <td>&nbsp;</td>
                        <th scope="col">CSS</th>
                        <th scope="col">SEO</th>
                        <th scope="col">Design</th>
                        <th scope="col">HTML</th>
                        <th scope="col">CMS</th>
                    </tr>
                </thead>
            </table>

        </div>
        
    </div>
  )
}

export default Low
