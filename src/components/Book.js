import React from 'react'
import { Box } from '../util/Box'
export const Book = () => {
  return (
    <Box>
        <div style={{ marginLeft:"20px" }}>
            <div></div>
            <div id='book-info'>
                <span>4 hari lagi</span>
                <div>
                    <h2>Laut Bercerita</h2>
                    <button>Details</button>
                </div>
                <p>Leila salika Chudori</p>
                <p>Rating</p>
            </div>
        </div>
    </Box>
  )
}
