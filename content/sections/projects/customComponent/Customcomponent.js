import React from 'react'
import css from './style.css'
import { useRef } from 'react'


const Customcomponent = () => {

    const optionsArr = [
        { value: 'Mountain', label: 'Mountain',id:1,url:'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },

        { value: 'Forest', label: 'Forest',id:2,url:'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },

        { value: 'Ocean', label: 'Ocean',id:3,url:'https://plus.unsplash.com/premium_photo-1669748158379-b1460474807c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },

        { value: 'Desert', label: 'Desert',id:4,url:'https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80' },






    ]




    const imgRef = useRef()

    const onmouseFunk = (e)=>{
        optionsArr.forEach((items)=>{
            if(items.label == e.target.innerText){
                imgRef.current.src = items.url
            }

        })
        
        // console.log(e.target.innerText)
    
    }



  return (
    <div id='container'>
        <div className='left'>


            <div className='wrepper'>

                <div className='top
                '>
                    Dropdown
                </div>

                <div className='bottum'>
                    {
                        optionsArr.map((items)=>{
                            return(
                                <div
                                onMouseEnter={(e)=>onmouseFunk(e)} 
                                key={items.id}
                                className='items'>{items.label}</div>
                            )
                        })
                    }
        

                </div>
             
            </div>

        </div>


        <div className='right'>
            <div className='img-wrepper'>
                <img ref={imgRef} src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Customcomponent