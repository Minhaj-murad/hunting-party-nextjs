

const Addplayers = () => {
 
    
    const handleaddplayers = event => {
        event.preventDefault();
        const form = event.target;
        const playerName =form.playerName.value ;
        const price = form.price.value;
        const country = form.country.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const img=form.photoURL.value;
        

        const player = {
            playerName,
            rating,
            price,
            country,
           description,
           img
        }

       

        fetch('https://to-do-list-server-98tvv8qz2-mehedi-noob.vercel.app/listdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(player)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
                



    return (
        <div>
             <form onSubmit={handleaddplayers} >
                <h2 className="text-4xl text-center text-amber-600 mb-8">Add New players </h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    
                    <input name="playerName" type="text" placeholder="player Name" className="input  w-full  text-black bg-gray-100" />
                    <input name="country" type="text" placeholder="country" className="input  w-full  text-black  bg-gray-100 " required />
                    <input name="price" type="text" placeholder="Price" className="input  w-full   text-black bg-gray-100 " required />
                    <input name="photoURL" type="text" placeholder="PhotoURL" className="input  text-black  bg-gray-100 w-full  " required />
                    <input name="rating" type="text" placeholder="rating" className="input  w-full  text-black bg-gray-100 " required />
                    <input name="description" type="text" placeholder="player description"  className="input  w-full  text-black bg-gray-100  "  />
                </div>
            

                <input className='btn mt-6' type="submit" value="Add player" />
            </form>
            
        </div>
    );
};

export default Addplayers;