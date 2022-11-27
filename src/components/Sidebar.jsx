import React from 'react'
import { Stack } from '@mui/material';

import { categories } from '../utils/constants';


function Sidebar({ seLectedCategory, setSelectedCategory }){
  return (
    <Stack
    direction='row'
    sx={{ overflowY: "auto",
        height: { sx: 'auto', md: '92%' },
        flexDirection: { md: 'column' }
    }}
    >
    {
        categories.map((category)=>{
            return(
                <button className='category-btn'
                    onClick={() => setSelectedCategory(category.name)}
                        style={{ background: category.name === 
                            seLectedCategory && '#FC1503',
                            color: '#fff',
                        }}
                    key={category.name}>
                    <span style={{ color: category.name === 
                        seLectedCategory ? '#fff' : 'red',
                        marginRight: '15px',
                        alignItems: 'center' 
                        }}>{category.icon}</span>
                    <span style={{ opacity: category.name === seLectedCategory ? '1' : '0.8', alignItems: 'center' }}>{category.name}</span>
                </button>
            )
        })
    }
    </Stack>
  )
}

export default Sidebar;