import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddCoffee=event=>{
        event.preventDefault();
        
        const form=event.target;

        const name=form.name.value
        const quantity=form.quantity.value
        const supplier=form.supplier.value
        const taste=form.taste.value
        const category=form.category.value
        const details=form.details.value
        const photo=form.photo.value

        const newCoffee={name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);

        //send data to server
        fetch("http://localhost:5000/coffee", {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)

        })
        .then(res=>res.json())
        .then (data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add coffee</h2>
            <form onSubmit={handleAddCoffee}> 
                {/* form row name & quantity */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name='quantity'placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                 {/* form row Supplier & taste */}

                <div className="md:flex ">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name='taste'placeholder="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                 {/* form row Category & Details */}

                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name='details'placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form of photo url */}
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input className="btn btn-block my-4 bg-[#D2B48C] text-black" type="submit" value="Add Coffee" />
                    
                </div>

            </form>
        </div>
    );
};

export default AddCoffee;