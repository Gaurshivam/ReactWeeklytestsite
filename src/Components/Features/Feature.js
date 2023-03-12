import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <div>
            <div class="text-center pt-4">
                <h1>Our Features</h1>
                <hr class="w-25 mx-auto" />
            </div>
            <div className='Features'>
                <div class="card" style={{ width: "18rem" }}>
                    <img 
                    height="200px"
                    src="https://th.bing.com/th?id=OIP.BjyCN8dMgoKSQInuDvDJnQHaG5&w=258&h=241&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Trusted Author</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="www.google.com" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img 
                    height="200px"
                    src="https://th.bing.com/th?id=OIP.WHlXXQohA9rkJ8HZdrvq9QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Fully responsive</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="www.google.com" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img 
                    height="200px"
                    src="https://th.bing.com/th?q=Reusable+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Reusable Element</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="www.google.com" class="btn btn-primary">Read More</a>
                    </div>
                </div>
        </div> 
        </div>
  )
}

export default Feature
